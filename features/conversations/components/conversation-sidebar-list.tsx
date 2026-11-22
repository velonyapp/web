"use client"

import * as React from "react"

import { useConversationList } from "@/features/conversations/hooks/use-conversation-list"
import {
  ConversationSidebarListItem,
  ConversationSidebarListItemSkeleton,
} from "@/features/conversations/components/conversation-sidebar-list-item"
import { useConversationLastMessagesLookup } from "@/features/conversations/hooks/use-conversation-last-messages-lookup"
import { useUserBatch } from "@/features/identity/hooks/use-user-batch"
import type { Message } from "@/features/conversations/types/message"
import type { User } from "@/features/identity/types/user"

export function ConversationSidebarList({
  ...props
}: React.ComponentProps<"div">) {
  const conversationList = useConversationList()
  const conversationLastMessagesLookup = useConversationLastMessagesLookup(
    conversationList.data?.map((conversation) => conversation.id) ?? []
  )
  const userBatch = useUserBatch(
    Array.from(conversationLastMessagesLookup.data?.values() ?? [])
      .map((message) => message.userId)
      .filter((user): user is string => user != null)
  )

  const isPending =
    conversationList.isPending ||
    (conversationList.data.length > 0 &&
      conversationLastMessagesLookup.isPending) ||
    userBatch.isPending

  if (conversationList.isError) {
    throw conversationList.error
  }
  if (conversationLastMessagesLookup.isError) {
    throw conversationLastMessagesLookup.error
  }
  if (userBatch.isError) {
    throw userBatch.error
  }

  if (isPending) {
    return (
      <div {...props}>
        {Array.from({ length: 25 }, (_, index) => (
          <ConversationSidebarListItemSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div {...props}>
      {conversationList.data?.map((conversation) => {
        let lastMessage: Message | undefined = undefined
        let lastMessageUser: User | undefined = undefined

        if (conversationLastMessagesLookup.data?.has(conversation.id)) {
          lastMessage = conversationLastMessagesLookup.data.get(conversation.id)

          if (lastMessage?.userId != null) {
            lastMessageUser = userBatch.data?.get(lastMessage.userId)
          }
        }

        return (
          <ConversationSidebarListItem
            key={conversation.id}
            conversation={conversation}
            lastMessage={lastMessage}
            lastMessageUser={lastMessageUser}
          />
        )
      })}
    </div>
  )
}
