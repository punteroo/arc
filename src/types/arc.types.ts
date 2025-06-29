import { Guild } from "discord.js";

export type DiscordServer = Pick<Guild, "id" | "name" | "icon"> & {
  iconUrl: string;
};

export interface DiscordMember {
  id: string;
  username: string;
  nickname: string | null;
  avatar: string | null;
  avatarUrl: string;
  isBot: boolean;
}
