import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/app/_lib/db";
import { apiRegisterSchema } from "@/app/_lib/validations";
import { ZodIssue } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Registration request body:", { email: body.email, hasPassword: !!body.password, inviteToken: !!body.inviteToken });

    const validationResult = apiRegisterSchema.safeParse(body);
    
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.issues);
      return NextResponse.json(
        { 
          error: "Validation failed",
          message: "Validation failed",
          errors: validationResult.error.issues.map((err: ZodIssue) => ({
            field: err.path.join('.'),
            message: err.message,
            received: err.input
          }))
        },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;
    const inviteToken = body.inviteToken as string | undefined;

    try {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email
        }
      });
      
      if (existingUser) {
        console.log("User already exists:", email);
        return NextResponse.json(
          { error: "User with this email already exists" },
          { status: 400 }
        );
      }
      
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name: email.split('@')[0]
        }
      });

      console.log("User created successfully:", user.id);

      if (inviteToken) {
        try {
          const invitation = await prisma.invitation.findUnique({ 
            where: { token: inviteToken },
            include: { inviter: true },
          });

          if (invitation && invitation.status === "pending" && invitation.expiresAt > new Date()) {
            const existingTeamMember = await prisma.teamMember.findUnique({
              where: {
                managerId_coWorkerId: {
                  managerId: invitation.inviterId,
                  coWorkerId: user.id,
                },
              },
            });

            if (!existingTeamMember) {
              await prisma.teamMember.create({
                data: {
                  managerId: invitation.inviterId,
                  coWorkerId: user.id,
                },
              });

              await prisma.invitation.update({
                where: { id: invitation.id },
                data: { status: "accepted" },
              });

              console.log("User added to team via invitation:", invitation.inviterId);
            }
          }
        } catch (inviteError) {
          console.error("Error processing invitation:", inviteError);
        }
      }

      return NextResponse.json(
        { 
          success: true,
          message: "User registered successfully",
          user: {
            id: user.id,
            email: user.email,
          }
        },
        { status: 201 }
      );
    } catch (dbError) {
      console.error("Database error:", dbError);
      throw dbError;
    }
  } catch (error) {
    console.error("Registration error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    console.error("Error details:", {
      message: errorMessage,
      stack: errorStack,
      error
    });
    
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: errorMessage
      },
      { status: 500 }
    );
  }
}
