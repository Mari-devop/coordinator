import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/_lib/api/config/auth";
import { prisma } from "@/app/_lib/db";

interface UserWithSettings {
  emailNotifications: boolean;
  managerMode: boolean;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const userWithSettings = user as unknown as UserWithSettings;
    const isManager = user.userType === "manager";
    const managerModeValue = isManager ? true : false;
    
    return NextResponse.json(
      {
        emailNotifications: userWithSettings.emailNotifications ?? true,
        managerMode: managerModeValue,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching settings:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("Error details:", { message: errorMessage, stack: errorStack });
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
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

    const { emailNotifications } = body;

    if (emailNotifications === undefined) {
      return NextResponse.json(
        { error: "At least one setting must be provided" },
        { status: 400 }
      );
    }

    const updateData: {
      emailNotifications?: boolean;
    } = {};

    if (emailNotifications !== undefined) {
      updateData.emailNotifications = Boolean(emailNotifications);
    }

    const updatedUser = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: updateData,
    });

    const updatedUserWithSettings = updatedUser as unknown as UserWithSettings;
    const isManager = updatedUser.userType === "manager";
    const managerModeValue = isManager ? true : false;
    
    return NextResponse.json(
      {
        message: "Settings updated successfully",
        settings: {
          emailNotifications: updatedUserWithSettings.emailNotifications ?? true,
          managerMode: managerModeValue,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}
