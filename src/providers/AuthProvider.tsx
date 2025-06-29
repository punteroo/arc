"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function AuthProvider({ children, fallback = null }: AuthProviderProps) {
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Loading...
            </h1>
            <p className="text-lg text-gray-600 mb-6">Please wait.</p>
          </div>
        </div>
      </>
    );

  if (!session) return <>{fallback}</>;

  return <>{children}</>;
}
