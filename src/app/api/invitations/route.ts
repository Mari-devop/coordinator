import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/_lib/api/config/auth";
import { prisma } from "@/app/_lib/db";
import crypto from "crypto";
import { inviteSchema } from "@/app/_lib/validations";
import { sendInviteEmail } from "@/app/_lib/email";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const validationResult = inviteSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { email } = validationResult.data;

    if (!prisma) {
      return NextResponse.json(
        { error: "Database connection error", message: "Prisma client is not initialized" },
        { status: 500 }
      );
    }

    const inviter = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!inviter) {
      return NextResponse.json(
        { error: "Inviter not found" },
        { status: 404 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      const existingTeamMember = await prisma.teamMember.findUnique({
        where: {
          managerId_coWorkerId: {
            managerId: inviter.id,
            coWorkerId: existingUser.id,
          },
        },
      });

      if (existingTeamMember) {
        return NextResponse.json(
          { error: "This user is already in your team" },
          { status: 400 }
        );
      }

      if (existingUser.id === inviter.id) {
        return NextResponse.json(
          { error: "You cannot add yourself to your team" },
          { status: 400 }
        );
      }

      const teamMember = await prisma.teamMember.create({
        data: {
          managerId: inviter.id,
          coWorkerId: existingUser.id,
        },
      });

      return NextResponse.json(
        {
          message: "User added to your team successfully",
          teamMemberId: teamMember.id,
          action: "added",
        },
        { status: 200 }
      );
    }

    const existingInvitation = await prisma.invitation.findFirst({
      where: {
        email,
        status: "pending",
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (existingInvitation) {
      return NextResponse.json(
        { error: "An invitation has already been sent to this email" },
        { status: 400 }
      );
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    const invitation = await prisma.invitation.create({
      data: {
        email,
        token,
        inviterId: inviter.id,
        expiresAt,
        status: "pending",
      },
    });

    const inviteUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/register?invite=${token}`;
    
    let emailSent = false;
    let emailError: string | null = null;

    try {
      await sendInviteEmail({
        email,
        inviteUrl,
        inviterName: inviter.firstName && inviter.lastName 
          ? `${inviter.firstName} ${inviter.lastName}` 
          : inviter.name || undefined,
        inviterCompany: inviter.company || undefined,
      });
      emailSent = true;
    } catch (emailErrorObj: unknown) {
      const errorMessage = emailErrorObj instanceof Error ? emailErrorObj.message : String(emailErrorObj);
      emailError = errorMessage;
      console.error("Error sending invite email:", errorMessage);
    }

    const isDev = process.env.NODE_ENV === 'development';
    
    return NextResponse.json(
      {
        message: "Invitation sent successfully",
        invitationId: invitation.id,
        action: "invited",
        ...(isDev && {
          debug: {
            emailSent,
            emailError: emailError || null,
            hasResendKey: !!process.env.RESEND_API_KEY,
            inviteUrl,
          },
        }),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating invitation:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error("Full error details:", {
      message: errorMessage,
      stack: errorStack,
      prismaAvailable: !!prisma,
      prismaType: typeof prisma,
    });
    
    return NextResponse.json(
      { error: "Internal server error", message: errorMessage },
      { status: 500 }
    );
  }
}

