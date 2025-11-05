import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/_lib/db";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { resetPasswordSchema } from "@/app/_lib/validations";

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

    const validationResult = resetPasswordSchema.safeParse(body);

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

    const { token, password } = validationResult.data;

    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gt: new Date(),
        },
      } as Prisma.UserWhereInput,
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    if (!user.password) {
      return NextResponse.json(
        { error: "Cannot reset password for OAuth accounts. Please use your provider to change your password." },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      } as Prisma.UserUpdateInput,
    });

    return NextResponse.json(
      {
        message: "Password has been reset successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error resetting password:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

