import { BasicIndex, collectionOptions } from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"
import { loadNames, valuesFor } from "@/lib/database/load-subset"

import { z } from "zod"
import { batchGetMessages } from "@/features/messages/api/batch-get-messages"
import { listMessages } from "@/features/messages/api/list-messages"
import {
  MessageSchema,
  type Message,
} from "@/features/messages/schemas/message"

const api = { batchGetMessages, listMessages }
export type MessagesApi = typeof api

const MessageRecordSchema = MessageSchema.extend({ conversation: z.string() })
type MessageRecord = z.infer<typeof MessageRecordSchema>
const messageRecord = (message: Message): MessageRecord => ({
  ...message,
  conversation: message.name.slice(0, message.name.lastIndexOf("/messages/")),
})

export const messagesCollection = collectionOptions("messages", (client) =>
  queryCollectionOptions({
    id: "messages",
    schema: MessageRecordSchema,
    getKey: (row) => row.name,
    autoIndex: "eager",
    defaultIndexType: BasicIndex,
    syncMode: "on-demand",
    queryKey: ["messages"],
    queryClient: client.requireDependency<QueryClient>("queryClient"),
    queryFn: async ({ meta }): Promise<MessageRecord[]> => {
      const source = client.getDependency<MessagesApi>("messagesApi") ?? api
      const options = meta?.loadSubsetOptions
      const names = valuesFor(options, "name")
      if (names !== undefined) {
        return loadNames(
          names,
          client.collection(messagesCollection),
          async (missing) =>
            (await source.batchGetMessages(missing)).map(messageRecord),
          options?.refetch
        )
      }
      const conversations = valuesFor(options, "conversation")
      if (conversations === undefined)
        throw new Error("Messages require resource names or a conversation")
      return (
        await Promise.all(
          conversations.map((name) => source.listMessages(name))
        )
      )
        .flat()
        .map(messageRecord)
    },
  })
)
