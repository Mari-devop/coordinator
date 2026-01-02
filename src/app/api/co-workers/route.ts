import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/api/config/auth";
import { prisma } from "@/app/_lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const manager = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!manager) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const teamMembers = await prisma.teamMember.findMany({
      where: {
        managerId: manager.id,
      },
      include: {
        coWorker: {
          select: {
            id: true,
            email: true,
            name: true,
            firstName: true,
            lastName: true,
            mobile: true,
            company: true,
            role: true,
            userType: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const coWorkers = teamMembers.map((tm) => ({
      id: tm.coWorker.id,
      name: tm.coWorker.firstName && tm.coWorker.lastName
        ? `${tm.coWorker.firstName} ${tm.coWorker.lastName}`
        : tm.coWorker.name || tm.coWorker.email.split('@')[0],
      position: tm.coWorker.role || 'Team Member',
      email: tm.coWorker.email,
      status: 'offline' as const, // TODO: Implement real status tracking
      lastActive: 'Unknown',
      department: tm.coWorker.company || 'N/A',
      phone: tm.coWorker.mobile || 'N/A',
      joinDate: new Date(tm.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
    }));

    return NextResponse.json(
      { coWorkers },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching co-workers:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: "Internal server error", message: errorMessage },
      { status: 500 }
    );
  }
}

