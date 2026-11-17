"use client"

import { useLiveQuery } from "@tanstack/react-db"
import { conversationsCollection } from "@/features/conversations/collections/conversations"
import { databaseQueryState } from "@/lib/database/query-state"

export function useConversationList() {
  const query = useLiveQuery({
    query: (q) => q.from({ conversation: conversationsCollection }),
  })
  return {
    data: query.data,
    ...databaseQueryState(query, query.data.length > 0),
  }
}
