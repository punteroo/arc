"use client";

import AuthModal from "@/components/auth/LoginModal";
import { AuthProvider } from "@/providers/AuthProvider";

export default function Main() {
  return (
    <AuthProvider fallback={<AuthModal />}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Arc!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          To get started, invite the bot to your server and run the{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">/ arc</code> command.
        </p>
        <a
          href="https://discord.com/oauth2/authorize?client_id=1388700525025038478&scope=bot&permissions=2147484672"
          className="inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors mb-6"
        >
          Invite Bot to Server
        </a>
        <p className="text-lg text-gray-600 mb-6">
          This is a test page for the Arc client. It is not functional yet.
        </p>
      </div>
    </AuthProvider>
  );
}
