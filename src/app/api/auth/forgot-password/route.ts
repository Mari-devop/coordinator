import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/_lib/db";
import crypto from "crypto";
import { Prisma } from "@prisma/client";
import { forgotPasswordSchema } from "@/app/_lib/validations";
import { sendPasswordResetEmail } from "@/app/_lib/email";

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const validationResult = forgotPasswordSchema.safeParse(body);

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

    const user = await prisma.user.findUnique({
      where: { email },
    });

    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpiry = new Date();
    resetTokenExpiry.setHours(resetTokenExpiry.getHours() + 1); 

    if (user) {
      await prisma.user.update({
        where: { email },
        data: {
          resetToken: resetToken,
          resetTokenExpiry: resetTokenExpiry,
        } as Prisma.UserUpdateInput,
      });

      const resetUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

      try {
        await sendPasswordResetEmail({
          email,
          resetUrl,
          userName: user.name || undefined,
        });
      } catch (emailError) {
        console.error("Error sending password reset email:", emailError);
      }
    }

    return NextResponse.json(
      {
        message: "If an account with that email exists, we've sent a password reset link.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing forgot password request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

