import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/_lib/api/config/auth";
import { prisma } from "@/app/_lib/db";
import { asUserOnboarding } from "@/app/_lib/api/types/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = asUserOnboarding(await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    }));

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const isCompleted = !!(
      user.firstName &&
      user.lastName &&
      user.mobile &&
      user.company &&
      user.role &&
      user.userType
    );

    return NextResponse.json(
      {
        completed: isCompleted,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
