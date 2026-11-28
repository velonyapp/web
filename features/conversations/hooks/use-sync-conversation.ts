"use client"

import { useQuery } from "@tanstack/react-query"
import { useDbClient } from "@tanstack/react-db"

import { getConversation } from "@/features/conversations/api/get-conversation"
import { conversationsCollection } from "@/features/conversations/collections/conversations"

export function useSyncConversation(id: string) {
  const client = useDbClient()
  const collection = client.collection(conversationsCollection)

  const { data, ...query } = useQuery({
    queryKey: ["conversations", id],
    queryFn: async () => {
      if (!collection.has(id)) {
        const conversation = await getConversation(id)

        collection.utils.applyPatches([
          {
            type: "update",
            value: conversation,
          },
        ])
      }

      return null
    },
  })

  return query
}
