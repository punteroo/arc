import { DiscordBotClient } from "@/client/DiscordBotClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const serverId = searchParams.get("serverId");

  if (!serverId) {
    return NextResponse.json(
      { error: "Server ID is required" },
      { status: 400 }
    );
  }

  try {
    const client = new DiscordBotClient(process.env.DISCORD_BOT_TOKEN || "");
    const members = await client.obtainGuildMembers(serverId);

    return NextResponse.json(members);
  } catch (error) {
    console.error("Failed to fetch members:", error);
    return NextResponse.json(
      { error: "Failed to fetch members" },
      { status: 500 }
    );
  }
}
