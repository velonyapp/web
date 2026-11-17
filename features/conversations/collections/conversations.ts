import { BasicIndex, collectionOptions } from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"
import { loadIds, valuesFor } from "@/lib/database/load-subset"

import { batchGetConversations } from "@/features/conversations/api/batch-get-conversations"
import { getConversation } from "@/features/conversations/api/get-conversation"
import { listConversations } from "@/features/conversations/api/list-conversations"
import type { Conversation } from "@/features/conversations/types/conversation"

const api = { batchGetConversations, getConversation, listConversations }
export type ConversationsApi = typeof api

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
        const source =
          client.getDependency<ConversationsApi>("conversationsApi") ?? api
        const options = meta?.loadSubsetOptions

        const ids = valuesFor(options, "id")
        if (ids !== undefined) {
          return loadIds(
            ids,
            client.collection(conversationsCollection),
            (missing) =>
              missing.length === 1
                ? source
                    .getConversation(missing[0])
                    .then((conversation) => [conversation])
                : source.batchGetConversations(missing),
            options?.refetch
          )
        }

        return source.listConversations()
      },
    })
)
