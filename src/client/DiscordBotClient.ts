import { DiscordServer, DiscordMember } from "@/types/arc.types";
import { Client, GatewayIntentBits } from "discord.js";

export class DiscordBotClient {
  readonly #botClientToken: string;
  #client: Client | null = null;

  constructor(botClientToken: string) {
    this.#botClientToken = botClientToken;
  }

  private async connect(): Promise<void> {
    try {
      if (!this.#botClientToken) {
        throw new Error("Discord bot token has not been provided.");
      }

      this.#client = new Client({
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
      });

      await this.#client.login(this.#botClientToken);
    } catch (e) {
      console.error("Failed to connect to Discord bot:", e);
      throw new Error("Discord bot connection failed.");
    }
  }

  public async obtainServerList(): Promise<Array<DiscordServer>> {
    if (!this.#client) await this.connect();

    if (!this.#client?.guilds) {
      throw new Error("Discord client is not connected to any guilds.");
    }

    const servers: Array<DiscordServer> = [];
    for (const guild of (await this.#client.guilds.fetch()).values()) {
      servers.push({
        id: guild.id,
        name: guild.name,
        icon: guild.icon,
        iconUrl: guild.icon
          ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
          : "https://cdn.discordapp.com/embed/avatars/0.png",
      });
    }

    return servers;
  }

  public async obtainGuildMembers(
    serverId: string
  ): Promise<{ members: DiscordMember[] }> {
    if (!this.#client) await this.connect();

    if (!this.#client?.guilds) {
      throw new Error("Discord client is not connected to any guilds.");
    }

    const guild = await this.#client.guilds.fetch(serverId);
    const members = await guild.members.fetch();

    return {
      members: members
        .filter((member) => !member.user.bot)
        .map((member) => ({
          id: member.user.id,
          username: member.user.username,
          nickname: member.nickname,
          avatar: member.user.avatar,
          avatarUrl: member.user.avatar
            ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png`
            : "https://cdn.discordapp.com/embed/avatars/0.png",
          isBot: member.user.bot,
        })),
    };
  }
}
