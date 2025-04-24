import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

// Simulated equipment data
const equipmentData = {
  temperature: Math.random() * 100,
  voltage: 220 + (Math.random() * 20 - 10),
  load: Math.random() * 100,
  timestamp: new Date().toISOString(),
};

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // Update the simulated data
  equipmentData.temperature = Math.random() * 100;
  equipmentData.voltage = 220 + (Math.random() * 20 - 10);
  equipmentData.load = Math.random() * 100;
  equipmentData.timestamp = new Date().toISOString();

  return NextResponse.json(equipmentData);
} 