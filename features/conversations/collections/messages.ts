import {
  BasicIndex,
  collectionOptions,
  parseLoadSubsetOptions,
} from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"

import { batchGetMessages } from "@/features/conversations/api/batch-get-messages"
import { listMessages } from "@/features/conversations/api/list-messages"
import type { Message } from "@/features/conversations/types/message"

const api = { batchGetMessages, listMessages }

export const messagesCollection = collectionOptions("messages", (client) =>
  queryCollectionOptions<Message>({
    id: "messages",
    getKey: (row) => row.id,
    autoIndex: "eager",
    defaultIndexType: BasicIndex,
    syncMode: "on-demand",
    queryKey: ["messages"],
    queryClient: client.requireDependency<QueryClient>("queryClient"),
    queryFn: async ({ meta }): Promise<Message[]> => {
      const options = meta?.loadSubsetOptions
      const { filters } = parseLoadSubsetOptions(meta?.loadSubsetOptions)

      if (filters.length === 1 && filters[0].field.join(".") === "id") {
        const { operator, value } = filters[0]

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
          const conversationId: string = value

          return api.listMessages(conversationId)
        }
      }

      throw new Error("Unsupported query")
    },
  })
)
