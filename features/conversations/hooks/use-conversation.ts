"use client"

import { eq, useLiveQuery } from "@tanstack/react-db"
import { conversationsCollection } from "@/features/conversations/collections/conversations"

export function useConversation(id: string) {
  return useLiveQuery({
    query: (q) =>
      q
        .from({ conversation: conversationsCollection })
        .where(({ conversation }) => eq(conversation.id, id))
        .findOne(),
  })
}
