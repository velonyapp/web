"use client"

import { coalesce, eq, max, useLiveQuery } from "@tanstack/react-db"

import { conversationsCollection } from "@/features/conversations/collections/conversations"
import { messagesCollection } from "@/features/conversations/collections/messages"

export function useConversationList() {
  return useLiveQuery({
    query: (q) =>
      q
        .from({ conversation: conversationsCollection })
        .leftJoin(
          {
            lastMessage: q
              .from({ message: messagesCollection })
              .groupBy(({ message }) => message.conversationId)
              .select(({ message }) => ({
                conversationId: message.conversationId,
                createTime: max(message.createTime),
              })),
          },
          ({ conversation, lastMessage }) =>
            eq(conversation.id, lastMessage.conversationId)
        )
        .orderBy(
          ({ conversation, lastMessage }) =>
            coalesce(lastMessage.createTime, conversation.createTime),
          "desc"
        )
        .orderBy(({ conversation }) => conversation.id, "desc")
        .select(({ conversation }) => conversation),
  })
}
