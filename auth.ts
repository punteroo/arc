import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

// Modified Discord provider to add more scopes.
const ArcDiscordProvider = Discord({
  authorization: {
    params: {
      scope: "identify email guilds",
    },
  },
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ArcDiscordProvider],
});
