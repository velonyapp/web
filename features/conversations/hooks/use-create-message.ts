"use client"

import { useDbClient } from "@tanstack/react-db"
import { useMutation } from "@tanstack/react-query"

import { createMessage } from "@/features/conversations/api/create-message"
import { messagesCollection } from "@/features/conversations/collections/messages"

export function useCreateMessage(conversationId: string) {
  const userId = "0e276ae1-61d2-41d6-8293-d0be73112e85"
  const client = useDbClient()
  const collection = client.collection(messagesCollection)

  return useMutation({
    mutationKey: ["conversations", conversationId, "messages", "create"],
    retry: false,
    mutationFn: async (content: string) => {
      const id = crypto.randomUUID()
      const now = new Date()

      collection.utils.applyPatches([
        {
          type: "insert",
          value: {
            id,
            conversationId,
            userId,
            content,
            state: "creating",
            createTime: now,
            updateTime: now,
          },
        },
      ])

      try {
        const message = await createMessage(conversationId, id, userId, content)

        collection.utils.applyPatches([
          {
            type: "update",
            value: {
              ...message,
              state: "ready",
            },
          },
        ])
      } catch (error) {
        collection.utils.applyPatches([
          {
            type: "delete",
            key: id,
          },
        ])

        throw error
      }
    },
  })
}
