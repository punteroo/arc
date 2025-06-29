"use client";

import { useState } from "react";
import Image from "next/image";
import { DiscordMember } from "@/types/arc.types";
import {
  Card,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

type DiscordMemberSelectorProps = {
  /** List of Discord members to display. */
  members: DiscordMember[];
  /** Map of selected members with their nickname and status. */
  selectedMembers: Map<
    string,
    { nickname: string; status: "Alive" | "Deceased" }
  >;
  /** Callback to toggle a member's participation. */
  onMemberToggle: (memberId: string, nickname: string) => void;
  /** Callback to update a member's nickname. */
  onNicknameChange: (memberId: string, newNickname: string) => void;
  /** Callback to update a member's status. */
  onStatusChange: (memberId: string, status: "Alive" | "Deceased") => void;
};

/**
 * Renders a grid of selectable member cards with editable nicknames and status dropdowns.
 * Members are sorted by ID, and nicknames are editable for all selected members, updated on blur.
 * @param props - The component props.
 */
export default function DiscordMemberSelector({
  members,
  selectedMembers,
  onMemberToggle,
  onNicknameChange,
  onStatusChange,
}: DiscordMemberSelectorProps) {
  // Local state for temporary input values
  const [inputValues, setInputValues] = useState<Map<string, string>>(
    new Map()
  );

  // Sort members by ID
  const sortedMembers = [...members].sort((a, b) => a.id.localeCompare(b.id));

  /**
   * Handles input value changes for a member's nickname.
   * Updates the local inputValues state without committing to onNicknameChange.
   * @param memberId - The ID of the member.
   * @param value - The temporary input value.
   */
  function handleInputChange(memberId: string, value: string) {
    setInputValues((prev) => {
      const newMap = new Map(prev);
      newMap.set(memberId, value);
      return newMap;
    });
  }

  /**
   * Commits the nickname change when the input loses focus.
   * @param memberId - The ID of the member.
   * @param value - The final input value.
   */
  function handleInputBlur(memberId: string, value: string) {
    if (value.trim()) {
      onNicknameChange(memberId, value.trim());
    }
    setInputValues((prev) => {
      const newMap = new Map(prev);
      newMap.delete(memberId); // Clear temporary value after committing
      return newMap;
    });
  }

  return sortedMembers.map((member) => {
    const isSelected = selectedMembers.has(member.id);
    const memberData = selectedMembers.get(member.id);
    const displayValue =
      inputValues.get(member.id) ??
      memberData?.nickname ??
      member.nickname ??
      member.username;

    return (
      <Card
        key={member.id}
        className={`p-4 w-full transition-colors ${
          isSelected ? "bg-green-900/50" : "bg-red-900/50"
        } hover:bg-gray-700`}
      >
        <div className="flex flex-col items-center">
          <div
            className="cursor-pointer mb-3"
            onClick={() => {
              onMemberToggle(member.id, member.nickname || member.username);
              if (isSelected) {
                onStatusChange(member.id, "Deceased");
              }
            }}
          >
            <Image
              src={member.avatarUrl}
              alt={`${member.username} avatar`}
              width={64}
              height={64}
              className="rounded-full"
            />
          </div>
          <Input
            value={displayValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(member.id, e.target.value)
            }
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleInputBlur(member.id, e.target.value)
            }
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              e.stopPropagation()
            }
            className="text-center bg-transparent border-b border-gray-500 text-white w-full mb-3 focus:outline-none focus:border-blue-500"
            type="text"
            disabled={!isSelected}
          />
          {isSelected && (
            <Dropdown size="sm">
              <DropdownTrigger>
                <button className="text-sm text-gray-300">
                  {memberData?.status || "Alive"}
                </button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem
                  key={`${member.id}-alive`}
                  onClick={() => onStatusChange(member.id, "Alive")}
                >
                  Alive
                </DropdownItem>
                <DropdownItem
                  key={`${member.id}-deceased`}
                  onClick={() => onStatusChange(member.id, "Deceased")}
                >
                  Deceased
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </div>
      </Card>
    );
  });
}
