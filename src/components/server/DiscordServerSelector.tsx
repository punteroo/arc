"use client";

import { DiscordServer } from "@/types/arc.types";
import Image from "next/image";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/react";

type DiscordServerSelectorProps = {
  /** List of available Discord servers. */
  servers: Array<DiscordServer>;

  /** Currently selected server ID. */
  selectedServerId: string | null;

  /**
   * Callback function to handle server selection.
   * @param serverId - The ID of the selected server.
   */
  onServerSelect: (serverId: string) => void;
};

export default function DiscordServerSelector({
  servers,
  selectedServerId,
  onServerSelect,
}: DiscordServerSelectorProps) {
  const selectedServer = servers.find(
    (server) => server.id === selectedServerId
  );

  return (
    <Dropdown size="md" className="w-full">
      <DropdownTrigger className="w-full">
        <button className="w-full text-left px-4 py-2 bg-gray-700 rounded-md flex items-center gap-2">
          {selectedServer ? (
            <>
              {selectedServer.icon && (
                <Image
                  src={selectedServer.iconUrl}
                  alt={`${selectedServer.name} icon`}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              {selectedServer.name}
            </>
          ) : (
            "Select a Discord Server"
          )}
        </button>
      </DropdownTrigger>
      <DropdownMenu className="w-full max-h-80 overflow-y-auto">
        {servers.map((server) => (
          <DropdownSection key={server.id} title={server.name}>
            <DropdownItem
              key={server.id}
              onClick={() => onServerSelect(server.id)}
              className="flex items-center gap-2"
            >
              {server.icon && (
                <Image
                  src={server.iconUrl}
                  alt={`${server.name} icon`}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              {server.name}
            </DropdownItem>
          </DropdownSection>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
