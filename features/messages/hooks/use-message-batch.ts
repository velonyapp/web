"use client"

import { useMemo } from "react"
import { inArray, useLiveQuery } from "@tanstack/react-db"
import { messagesCollection } from "@/features/messages/collections/messages"
import { databaseQueryState } from "@/lib/database/query-state"

export function useMessageBatch(names: string[]) {
  const uniqueNames = [...new Set(names)].sort()
  const query = useLiveQuery({
    query: (q) =>
      uniqueNames.length
        ? q
            .from({ message: messagesCollection })
            .where(({ message }) => inArray(message.name, uniqueNames))
        : undefined,
  })
  const data = useMemo(
    () => new Map(query.data?.map((message) => [message.name, message])),
    [query.data]
  )
  return {
    data,
    ...databaseQueryState(query, data.size === uniqueNames.length),
  }
}
