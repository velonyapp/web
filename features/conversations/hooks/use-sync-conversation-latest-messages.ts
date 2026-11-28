"use client"

import { useQuery } from "@tanstack/react-query"
import { useDbClient } from "@tanstack/react-db"

import { lookupConversationLatestMessages } from "@/features/conversations/api/lookup-conversation-latest-messages"
import { messagesCollection } from "@/features/conversations/collections/messages"

export function useSyncConversationLatestMessages(ids: string[]) {
  const client = useDbClient()
  const collection = client.collection(messagesCollection)

  const conversationIds = [...new Set(ids)].sort()

  const { data, ...query } = useQuery({
    queryKey: ["conversations", "latest-messages", conversationIds],
    queryFn: async () => {
      if (conversationIds.length > 0) {
        const messages = await lookupConversationLatestMessages(conversationIds)

        collection.utils.applyPatches(
          Array.from(messages.values(), (value) => ({
            type: "update",
            value,
          }))
        )
      }

      return null
    },
  })

  return query
}
