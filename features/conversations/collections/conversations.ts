import {
  BasicIndex,
  collectionOptions,
  parseLoadSubsetOptions,
} from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"

import { batchGetConversations } from "@/features/conversations/api/batch-get-conversations"
import { getConversation } from "@/features/conversations/api/get-conversation"
import { listConversations } from "@/features/conversations/api/list-conversations"
import type { Conversation } from "@/features/conversations/types/conversation"

const api = { batchGetConversations, getConversation, listConversations }

export const conversationsCollection = collectionOptions(
  "conversations",
  (client) =>
    queryCollectionOptions<Conversation>({
      id: "conversations",
      getKey: (row) => row.id,
      autoIndex: "eager",
      defaultIndexType: BasicIndex,
      syncMode: "on-demand",
      queryKey: ["conversations"],
      queryClient: client.requireDependency<QueryClient>("queryClient"),
      queryFn: async ({ meta }): Promise<Conversation[]> => {
        const options = meta?.loadSubsetOptions
        const { filters } = parseLoadSubsetOptions(meta?.loadSubsetOptions)

        if (filters.length === 0) {
          return api.listConversations()
        }

        if (filters.length === 1 && filters[0].field.join(".") === "id") {
          const { operator, value } = filters[0]

          if (operator === "eq") {
            const id: string = value

            const conversation = await api.getConversation(id)
            return [conversation]
          }

          if (operator === "in") {
            const ids: string[] = value

            const conversationMap = new Map<string, Conversation>()

            if (!options?.refetch) {
              for (const id of ids) {
                const conversation = client
                  .collection(conversationsCollection)
                  .get(id)
                if (conversation === undefined) {
                  continue
                }

                conversationMap.set(id, conversation)
              }
            }

            const missingIds = Array.from(
              new Set(ids.filter((id) => !conversationMap.has(id)))
            )
            if (missingIds.length > 0) {
              const conversations = await api.batchGetConversations(missingIds)
              for (const conversation of conversations) {
                conversationMap.set(conversation.id, conversation)
              }
            }

            return ids.map((id) => {
              const conversation = conversationMap.get(id)
              if (conversation === undefined) {
                throw new Error("Unsupported query")
              }

              return conversation
            })
          }
        }

        throw new Error("Unsupported query")
      },
    })
)
