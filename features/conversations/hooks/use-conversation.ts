"use client"

import { eq, useLiveQuery } from "@tanstack/react-db"
import { conversationsCollection } from "@/features/conversations/collections/conversations"
import { databaseQueryState } from "@/lib/database/query-state"

export function useConversation(id: string) {
  const query = useLiveQuery({
    query: (q) =>
      q
        .from({ conversation: conversationsCollection })
        .where(({ conversation }) => eq(conversation.id, id))
        .findOne(),
  })
  return {
    data: query.data,
    ...databaseQueryState(query, query.data !== undefined),
  }
}
