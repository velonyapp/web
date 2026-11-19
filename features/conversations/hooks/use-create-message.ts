"use client"

import { useDbClient } from "@tanstack/react-db"
import { useCallback } from "react"
import { messagesCollection } from "@/features/conversations/collections/messages"

export function useCreateMessage(conversationId: string) {
  const userId = "0e276ae1-61d2-41d6-8293-d0be73112e85"
  const dbClient = useDbClient()
  const collection = dbClient.collection(messagesCollection)

  const mutate = useCallback(
    (content: string) => {
      const now = new Date()
      const transaction = collection.insert({
        id: crypto.randomUUID(),
        conversationId,
        userId,
        content,
        state: "creating",
        createTime: now,
        updateTime: now,
      })
      void transaction.when("settled").catch(() => undefined)
      return transaction
    },
    [collection, conversationId, userId]
  )

  const mutateAsync = useCallback(
    async (content: string) => mutate(content).when("settled"),
    [mutate]
  )

  return { mutate, mutateAsync }
}
