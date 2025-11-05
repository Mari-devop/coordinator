import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/_lib/api/config/auth";
import { prisma } from "@/app/_lib/db";
import type { ProfileUpdateInput } from "@/app/_lib/api/types/prisma";
import { asUser } from "@/app/_lib/api/types/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = asUser(await prisma.user.findUnique({
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

    return NextResponse.json(
      {
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email,
        mobile: user.mobile || "",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
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
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { field, value } = body;

    if (!field || value === undefined) {
      return NextResponse.json(
        { error: "Field and value are required" },
        { status: 400 }
      );
    }

    const allowedFields = ["firstName", "lastName", "mobile", "email"];
    if (!allowedFields.includes(field)) {
      return NextResponse.json(
        { error: `Field ${field} is not allowed to be updated` },
        { status: 400 }
      );
    }

    const updateData: ProfileUpdateInput = {
      [field]: value,
    };

    if (field === "firstName" || field === "lastName") {
      const currentUser = asUser(await prisma.user.findUnique({
        where: { email: session.user.email },
      }));

      const firstName = field === "firstName" ? value : (currentUser?.firstName || "");
      const lastName = field === "lastName" ? value : (currentUser?.lastName || "");
      updateData.name = `${firstName} ${lastName}`.trim();
    }

    const updatedUser = asUser(await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: updateData,
    }))!;

    if (!updatedUser) {
      return NextResponse.json(
        { error: "Failed to update user" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: `${field} updated successfully`,
        user: {
          firstName: updatedUser.firstName || "",
          lastName: updatedUser.lastName || "",
          email: updatedUser.email,
          mobile: updatedUser.mobile || "",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

