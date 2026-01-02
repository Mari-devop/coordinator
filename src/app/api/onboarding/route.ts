import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/_lib/api/config/auth";
import { prisma } from "@/app/_lib/db";
import { onboardingSchema } from "@/app/_lib/validations";
import type { OnboardingUpdateInput } from "@/app/_lib/api/types/prisma";

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

    const validationResult = onboardingSchema.safeParse(body);

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

    const validatedData = validationResult.data;

    const existingUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const updateData: OnboardingUpdateInput = {
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      mobile: validatedData.mobile,
      company: validatedData.company,
      role: validatedData.role,
      userType: validatedData.userType,
      name: `${validatedData.firstName} ${validatedData.lastName}`.trim(),
    };

    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: updateData,
    });

    return NextResponse.json(
      {
        message: "Onboarding data saved successfully",
      },
      { status: 200 }
    );
  } catch (error) {

    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        error: "Internal server error",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
