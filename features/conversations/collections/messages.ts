import {
  BasicIndex,
  collectionOptions,
  parseLoadSubsetOptions,
} from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"

import { batchGetMessages } from "@/features/conversations/api/batch-get-messages"
import { createMessage } from "@/features/conversations/api/create-message"
import { listMessages } from "@/features/conversations/api/list-messages"
import type { Message } from "@/features/conversations/types/message"
import { getMessage } from "@/features/conversations/api/get-message"

const api = { getMessage, batchGetMessages, listMessages, createMessage }

export const messagesCollection = collectionOptions("messages", (client) =>
  queryCollectionOptions<Message>({
    id: "messages",
    getKey: (row) => row.id,
    autoIndex: "eager",
    defaultIndexType: BasicIndex,
    syncMode: "on-demand",
    queryKey: ["messages"],
    queryClient: client.requireDependency<QueryClient>("queryClient"),
    onInsert: async ({ transaction, collection }) => {
      await Promise.all(
        transaction.mutations.map(async ({ modified }) => {
          const message = await api.createMessage(
            modified.conversationId,
            modified.id,
            modified.userId!,
            modified.content
          )
          await collection.utils.writeUpsert(message)
        })
      )
    },
    queryFn: async ({ meta }): Promise<Message[]> => {
      const options = meta?.loadSubsetOptions
      const { filters } = parseLoadSubsetOptions(meta?.loadSubsetOptions)

      if (filters.length === 1 && filters[0].field.join(".") === "id") {
        const { operator, value } = filters[0]

        if (operator === "eq") {
          const id: string = value

          if (!options?.refetch) {
            const message = client.collection(messagesCollection).get(id)
            if (message) {
              return [message]
            }
          }

          const message = await api.getMessage(value)
          return [message]
        }

        if (operator === "in") {
          const ids: string[] = value

          const messageMap = new Map<string, Message>()

          if (!options?.refetch) {
            for (const id of ids) {
              const message = client.collection(messagesCollection).get(id)
              if (message === undefined) {
                continue
              }

              messageMap.set(id, message)
            }
          }

          const missingIds = Array.from(
            new Set(ids.filter((id) => !messageMap.has(id)))
          )
          if (missingIds.length > 0) {
            const messages = await api.batchGetMessages(missingIds)
            for (const message of messages) {
              messageMap.set(message.id, message)
            }
          }

          return ids.map((id) => {
            const message = messageMap.get(id)
            if (message === undefined) {
              throw new Error("Unsupported query")
            }

            return message
          })
        }
      }

      if (
        filters.length === 1 &&
        filters[0].field.join(".") === "conversationId"
      ) {
        const { operator, value } = filters[0]

        if (operator === "eq") {
          const collection = client.collection(messagesCollection)

          const conversationId: string = value

          const index = [...collection.indexes.values()].find((index) =>
            index.matchesField(["conversationId"])
          )

          if (index !== undefined) {
            const ids = [...index.lookup("eq", conversationId)]

            return ids
              .map((id) => collection.get(id))
              .filter((message) => message !== undefined)
          }

          return collection.toArray.filter(
            (message) => message.conversationId === conversationId
          )
        }

        if (operator === "in") {
          const collection = client.collection(messagesCollection)

          const conversationIds: string[] = value

          const index = [...collection.indexes.values()].find((index) =>
            index.matchesField(["conversationId"])
          )

          if (index !== undefined) {
            const ids = [...index.lookup("in", conversationIds)]

            return ids
              .map((id) => collection.get(id))
              .filter((message) => message !== undefined)
          }

          return collection.toArray.filter((message) =>
            conversationIds.includes(message.conversationId)
          )
        }
      }

      throw new Error("Unsupported query")
    },
  })
)
