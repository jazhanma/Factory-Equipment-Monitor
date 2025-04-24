import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add user to team
export async function POST(
  request: Request,
  { params }: { params: { teamId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    // Check if team exists
    const team = await prisma.team.findUnique({
      where: { id: params.teamId },
    });

    if (!team) {
      return NextResponse.json(
        { message: "Team not found" },
        { status: 404 }
      );
    }

    // Update user's team
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        teamId: params.teamId,
      },
      include: {
        team: true,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Add user to team error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Remove user from team
export async function DELETE(
  request: Request,
  { params }: { params: { teamId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    // Update user to remove team association
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        teamId: null,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Remove user from team error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
} 