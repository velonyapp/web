"use client"

import { eq, useLiveQuery } from "@tanstack/react-db"
import { messagesCollection } from "@/features/conversations/collections/messages"
import { databaseQueryState } from "@/lib/database/query-state"

export function useMessageList(conversationName: string) {
  const query = useLiveQuery({
    query: (q) =>
      q
        .from({ message: messagesCollection })
        .where(({ message }) => eq(message.conversation, conversationName))
        .orderBy(({ message }) => message.createTime, "asc")
        .orderBy(({ message }) => message.name, "asc"),
  })
  return {
    data: query.data,
    ...databaseQueryState(query, query.data.length > 0),
  }
}
