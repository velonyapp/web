"use client"

import { eq, useLiveQuery } from "@tanstack/react-db"

import { messagesCollection } from "@/features/conversations/collections/messages"

export function useMessageList(conversationId: string) {
  return useLiveQuery({
    query: (q) =>
      q
        .from({ message: messagesCollection })
        .where(({ message }) => eq(message.conversationId, conversationId))
        .orderBy(({ message }) => message.createTime, "asc")
        .orderBy(({ message }) => message.id, "asc"),
  })
}
