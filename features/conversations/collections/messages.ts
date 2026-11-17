import { BasicIndex, collectionOptions } from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"
import { loadIds, valuesFor } from "@/lib/database/load-subset"

import { batchGetMessages } from "@/features/conversations/api/batch-get-messages"
import { listMessages } from "@/features/conversations/api/list-messages"
import type { Message } from "@/features/conversations/types/message"

const api = { batchGetMessages, listMessages }
export type MessagesApi = typeof api

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
      const source = client.getDependency<MessagesApi>("messagesApi") ?? api
      const options = meta?.loadSubsetOptions
      const ids = valuesFor(options, "id")
      if (ids !== undefined) {
        return loadIds(
          ids,
          client.collection(messagesCollection),
          (missing) => source.batchGetMessages(missing),
          options?.refetch
        )
      }
      const conversationIds = valuesFor(options, "conversationId")
      if (conversationIds === undefined)
        throw new Error("Messages require IDs or a conversation ID")
      return (
        await Promise.all(conversationIds.map((id) => source.listMessages(id)))
      ).flat()
    },
  })
)
