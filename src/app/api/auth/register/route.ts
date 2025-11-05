import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/app/_lib/db";
import { apiRegisterSchema } from "@/app/_lib/validations";
import { ZodIssue } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validationResult = apiRegisterSchema.safeParse(body);
    
    if (!validationResult.success) {
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

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email
      }
    });
    
    if (existingUser) {
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
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      },
      { status: 500 }
    );
  }
}
