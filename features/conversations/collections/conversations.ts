import { BasicIndex, collectionOptions } from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"
import { loadNames, valuesFor } from "@/lib/database/load-subset"

import { getConversation } from "@/features/conversations/api/get-conversation"
import { listConversations } from "@/features/conversations/api/list-conversations"
import {
  ConversationSchema,
  type Conversation,
} from "@/features/conversations/schemas/conversation"

const api = { getConversation, listConversations }
export type ConversationsApi = typeof api

export const conversationsCollection = collectionOptions(
  "conversations",
  (client) =>
    queryCollectionOptions({
      id: "conversations",
      schema: ConversationSchema,
      getKey: (row) => row.name,
      autoIndex: "eager",
      defaultIndexType: BasicIndex,
      syncMode: "on-demand",
      queryKey: ["conversations"],
      queryClient: client.requireDependency<QueryClient>("queryClient"),
      queryFn: async ({ meta }): Promise<Conversation[]> => {
        const source =
          client.getDependency<ConversationsApi>("conversationsApi") ?? api
        const options = meta?.loadSubsetOptions
        const names = valuesFor(options, "name")
        if (names !== undefined) {
          return loadNames(
            names,
            client.collection(conversationsCollection),
            (missing) =>
              Promise.all(missing.map((name) => source.getConversation(name))),
            options?.refetch
          )
        }
        return source.listConversations()
      },
    })
)
