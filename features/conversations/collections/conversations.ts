import {
  BasicIndex,
  collectionOptions,
  parseLoadSubsetOptions,
} from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"

import { lookupConversations } from "@/features/conversations/api/lookup-conversations"
import { getConversation } from "@/features/conversations/api/get-conversation"
import type { Conversation } from "@/features/conversations/types/conversation"

const api = { lookupConversations, getConversation }

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
          return client.collection(conversationsCollection).toArray
        }

        if (filters.length === 1 && filters[0].field.join(".") === "id") {
          const { operator, value } = filters[0]

          if (operator === "eq") {
            const id: string = value

            if (!options?.refetch) {
              const conversation = client
                .collection(conversationsCollection)
                .get(id)
              if (conversation) {
                return [conversation]
              }
            }

            const conversation = await api.getConversation(value)
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
              const conversations = await api.lookupConversations(missingIds)
              for (const conversation of conversations.values()) {
                conversationMap.set(conversation.id, conversation)
              }
            }

            return ids
              .map((id) => conversationMap.get(id))
              .filter((conversation) => conversation !== undefined)
          }
        }

        throw new Error("Unsupported query")
      },
    })
)
