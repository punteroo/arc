"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  // Test discord sign-in
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24
"
    >
      <h1 className="text-4xl font-bold">Welcome to Arc!</h1>
      <p className="mt-4 text-lg">This is a custom hunger-games client.</p>
      <a
        className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        href="#"
        onClick={() => signIn("discord")}
      >
        Sign in with Discord
      </a>
      <p className="mt-4 text-sm text-gray-500">
        This is a test page for the Arc client. It is not functional yet.
      </p>
    </main>
  );
}
