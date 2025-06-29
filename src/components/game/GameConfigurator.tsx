"use client";

import { useState } from "react";
import { DiscordServer, DiscordMember } from "@/types/arc.types";
import DiscordServerSelector from "@/components/server/DiscordServerSelector";
import DiscordMemberSelector from "@/components/server/DiscordMemberSelector";
import { Button, Spinner } from "@heroui/react";

import axios from "axios";

export default function GameConfigurator({
  servers,
}: {
  servers: Array<DiscordServer>;
}) {
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);
  const [members, setMembers] = useState<DiscordMember[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<
    Map<string, { nickname: string; status: "Alive" | "Deceased" }>
  >(new Map());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handles server selection by updating the selected server ID.
   * Does not load members immediately; waits for button click.
   * @param serverId - The ID of the selected Discord server.
   */
  function handleServerSelect(serverId: string) {
    setSelectedServerId(serverId);
    setError(null);
  }

  /**
   * Fetches members for the selected server when the "Load Members" button is clicked.
   * Resets members and selected members before fetching.
   */
  function handleLoadMembers() {
    if (!selectedServerId) return;

    setMembers([]);
    setSelectedMembers(new Map());
    setError(null);
    setIsLoading(true);

    // Obtain the list of members from the server.
    async function fetchMembers() {
      try {
        const { data } = await axios({
          url: `/api/members?serverId=${selectedServerId}`,
          method: "GET",
        });

        if (data?.members?.length) setMembers(data.members);
        else throw new Error("No valid members found for this server.");
      } catch (error) {
        console.error("Failed to fetch members:", error);
        setError(
          error instanceof Error ? error.message : "Failed to load members."
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchMembers();
  }

  /**
   * Toggles a member's participation status in the game.
   * @param memberId - The ID of the member to toggle.
   * @param nickname - The member's nickname or username.
   */
  function handleMemberToggle(memberId: string, nickname: string) {
    setSelectedMembers((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(memberId)) newMap.delete(memberId);
      else newMap.set(memberId, { nickname, status: "Alive" });

      return newMap;
    });
  }

  /**
   * Updates a member's nickname in the selected members map.
   * @param memberId - The ID of the member.
   * @param newNickname - The new nickname to set.
   */
  function handleNicknameChange(memberId: string, newNickname: string) {
    setSelectedMembers((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(memberId))
        newMap.set(memberId, {
          nickname: newNickname,
          status: newMap.get(memberId)!.status,
        });

      return newMap;
    });
  }

  /**
   * Changes a member's status (Alive or Deceased).
   * @param memberId - The ID of the member.
   * @param status - The new status ("Alive" or "Deceased").
   */
  function handleStatusChange(memberId: string, status: "Alive" | "Deceased") {
    setSelectedMembers((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(memberId))
        newMap.set(memberId, { ...newMap.get(memberId)!, status });

      return newMap;
    });
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start py-10 px-6">
      <div className="w-full max-w-6xl space-y-10">
        <section className="bg-gray-800 rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Configure Your Game</h1>
          <p className="text-gray-300 mb-6">
            Select a Discord server to load its members and configure
            participants.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-full sm:w-auto flex-1 min-w-[240px]">
              <DiscordServerSelector
                servers={servers}
                selectedServerId={selectedServerId}
                onServerSelect={handleServerSelect}
              />
            </div>
            <Button
              color="primary"
              size="md"
              onClick={handleLoadMembers}
              disabled={!selectedServerId || isLoading}
              className="bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-auto px-6"
            >
              {isLoading && <Spinner size="sm" className="mr-3" />}
              {isLoading ? "Loading..." : "Load Members"}
            </Button>
          </div>
        </section>

        <section className="bg-gray-800 rounded-lg p-8 shadow-lg w-full">
          {error ? (
            <p className="text-red-400 text-center font-medium py-6">{error}</p>
          ) : isLoading ? (
            <div className="flex justify-center items-center py-10">
              <Spinner size="lg" className="text-blue-500" />
            </div>
          ) : members.length === 0 ? (
            <p className="text-gray-400 text-center font-medium py-6">
              The games are still empty... Maybe try sending some invites?
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
              <DiscordMemberSelector
                members={members}
                selectedMembers={selectedMembers}
                onMemberToggle={handleMemberToggle}
                onNicknameChange={handleNicknameChange}
                onStatusChange={handleStatusChange}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
