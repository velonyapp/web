"use client"

import { useMemo } from "react"
import { inArray, useLiveQuery } from "@tanstack/react-db"
import { messagesCollection } from "@/features/conversations/collections/messages"
import { databaseQueryState } from "@/lib/database/query-state"

export function useConversationLastMessageBatch(ids: string[]) {
  const uniqueIds = [...new Set(ids)].sort()
  const query = useLiveQuery({
    query: (q) =>
      uniqueIds.length
        ? q
            .from({ message: messagesCollection })
            .where(({ message }) => inArray(message.conversationId, uniqueIds))
            .orderBy(({ message }) => message.createTime, "asc")
            .orderBy(({ message }) => message.id, "asc")
        : undefined,
  })
  const data = useMemo(
    () =>
      new Map(query.data?.map((message) => [message.conversationId, message])),
    [query.data]
  )
  return {
    data,
    ...databaseQueryState(query, data.size === uniqueIds.length),
  }
}
