"use client"

import { inArray, useDbClient, useLiveQuery } from "@tanstack/react-db"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useMemo, useRef } from "react"
import { messagesCollection } from "@/features/conversations/collections/messages"
import { lookupMessages } from "@/features/conversations/api/lookup-messages"
import { messageName } from "@/lib/api/resource-names"

export function useConversationLastMessagesLookup(ids: string[]) {
  const dbClient = useDbClient()
  const collection = dbClient.collection(messagesCollection)

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

  const lookup = useQuery({
    queryKey: ["conversation-last-messages-lookup", uniqueIds],
    queryFn: () =>
      lookupMessages(
        uniqueIds.map((id) =>
          messageName.render({ conversation: id, message: "latest" })
        )
      ),
    enabled: uniqueIds.length > 0,
  })

  const syncedMessages = useRef(new WeakSet<object>())

  useEffect(() => {
    const messages = lookup.data
    if (!messages || syncedMessages.current.has(messages)) {
      return
    }

    syncedMessages.current.add(messages)

    void collection.utils
      .writeUpsert(Array.from(messages.values()))
      .catch((error) => {
        syncedMessages.current.delete(messages)
        console.error("Failed to sync conversation last messages", error)
      })
  }, [collection, lookup.data])

  const data = useMemo(
    () =>
      new Map(query.data?.map((message) => [message.conversationId, message])),
    [query.data]
  )
  return {
    data,

    refetch: lookup.refetch,
    isFetching: lookup.isFetching,
    isRefetching: lookup.isRefetching,

    isPending: lookup.isPending,
    isLoading: lookup.isLoading,
    isError: lookup.isError,
    error: lookup.error,
  }
}
