"use client"

import { eq, inArray, materialize, useLiveQuery } from "@tanstack/react-db"

import { conversationsCollection } from "@/features/conversations/collections/conversations"
import { messagesCollection } from "@/features/conversations/collections/messages"

export function useConversationLatestMessages(conversationIds: string[]) {
  return useLiveQuery({
    query: (q) =>
      q
        .from({ conversation: conversationsCollection })
        .where(({ conversation }) => inArray(conversation.id, conversationIds))
        .select(({ conversation }) => ({
          conversationId: conversation.id,
          message: materialize(
            q
              .from({ message: messagesCollection })
              .where(({ message }) =>
                eq(message.conversationId, conversation.id)
              )
              .orderBy(({ message }) => message.createTime, "desc")
              .orderBy(({ message }) => message.id, "desc")
              .limit(1)
              .findOne()
          ),
        })),
  })
}
