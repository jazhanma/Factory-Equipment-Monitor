import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // Get current equipment data
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/monitoring`);
  const equipmentData = await response.json();

  // Check for temperature warning
  if (equipmentData.temperature > 80) {
    // Create or update alert
    await prisma.alert.upsert({
      where: {
        id: "temperature-alert",
      },
      update: {
        message: `High temperature warning: ${equipmentData.temperature.toFixed(1)}°C`,
        severity: "warning",
        resolvedAt: null,
      },
      create: {
        id: "temperature-alert",
        type: "temperature",
        message: `High temperature warning: ${equipmentData.temperature.toFixed(1)}°C`,
        severity: "warning",
      },
    });
  } else {
    // Resolve any existing temperature alerts
    await prisma.alert.updateMany({
      where: {
        type: "temperature",
        resolvedAt: null,
      },
      data: {
        resolvedAt: new Date(),
      },
    });
  }

  // Get all active alerts
  const alerts = await prisma.alert.findMany({
    where: {
      resolvedAt: null,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(alerts);
} 