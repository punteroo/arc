"use client";

import { signIn } from "next-auth/react";

export default function AuthModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Arc!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          You are unauthenticated, please login.
        </p>
        <button
          className="inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          onClick={() => signIn("discord")}
        >
          Sign in with Discord
        </button>
        <p className="mt-4 text-sm text-gray-500">
          This is a test page for the Arc client. It is not functional yet.
        </p>
      </div>
    </div>
  );
}
