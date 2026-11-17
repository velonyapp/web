"use client"

import { useMemo } from "react"
import { inArray, useLiveQuery } from "@tanstack/react-db"
import { messagesCollection } from "@/features/conversations/collections/messages"
import { databaseQueryState } from "@/lib/database/query-state"

export function useMessageBatch(ids: string[]) {
  const uniqueIds = [...new Set(ids)].sort()
  const query = useLiveQuery({
    query: (q) =>
      uniqueIds.length
        ? q
            .from({ message: messagesCollection })
            .where(({ message }) => inArray(message.id, uniqueIds))
        : undefined,
  })
  const data = useMemo(
    () => new Map(query.data?.map((message) => [message.id, message])),
    [query.data]
  )
  return {
    data,
    ...databaseQueryState(query, data.size === uniqueIds.length),
  }
}
