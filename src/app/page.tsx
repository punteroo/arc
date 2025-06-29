"use client";

import AuthModal from "@/components/auth/LoginModal";
import { AuthProvider } from "@/providers/AuthProvider";
import { Button, Card, CardBody } from "@heroui/react";
import Link from "next/link";

const BOT_CLIENT_ID = process.env.NEXT_PUBLIC_BOT_CLIENT_ID;

export default function Main() {
  return (
    <AuthProvider fallback={<AuthModal />}>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Card className="max-w-lg w-full">
          <CardBody className="flex flex-col items-center text-center gap-4 p-8">
            <h1>Welcome to Arc!</h1>
            <p className="text-foreground-500">
              To get started, invite the bot to your desired server.
            </p>
            <Button
              as="a"
              href={`https://discord.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}&scope=bot&permissions=2147484672`}
              color="primary"
              className="w-full sm:w-auto"
            >
              Invite Bot to Server
            </Button>
            <p className="text-foreground-500">
              If you already have Arc in your server, click the button below to
              start!
            </p>

            <Button
              as={Link}
              href="/game"
              color="success"
              className="w-full sm:w-auto"
            >
              Start Game
            </Button>
          </CardBody>
        </Card>
      </div>
    </AuthProvider>
  );
}
