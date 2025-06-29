import { DiscordBotClient } from "@/client/DiscordBotClient";
import GameConfigurator from "@/components/game/GameConfigurator";

export default async function GameMain() {
  // Instance a new Discord bot client to make requests.
  const client = new DiscordBotClient(process.env.DISCORD_BOT_TOKEN || "");

  // Obtain a list of Discord servers the bot is connected to.
  const servers = await client.obtainServerList();

  return <GameConfigurator servers={servers} />;
}
