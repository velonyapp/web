"use client"

import * as React from "react"

import { useConversationList } from "@/features/conversations/hooks/use-conversationList"
import { ConversationSidebarListItem } from "@/features/conversations/components/conversation-sidebar-list-item"
import { useMessageBatch } from "@/features/conversations/hooks/use-message-batch"
import { useUserBatch } from "@/features/identity/hooks/use-user-batch"
import type { Message } from "@/features/conversations/types/message"
import type { User } from "@/features/identity/types/user"

export function ConversationSidebarList({
  ...props
}: React.ComponentProps<"div">) {
  const {
    data: conversationList,
    error: conversationListError,
    isPending: isConversationListPending,
    isError: isConversationListError,
  } = useConversationList()
  const {
    data: messageBatch,
    error: messageBatchError,
    isError: isMessageBatchError,
  } = useMessageBatch(
    conversationList
      ?.map((conversation) => conversation.lastMessageId)
      .filter((message) => message != null) ?? []
  )
  const {
    data: userBatch,
    error: userBatchError,
    isError: isUserBatchError,
  } = useUserBatch(
    Array.from(messageBatch?.values() ?? [])
      .map((message) => message.userId)
      .filter((user): user is string => user != null)
  )

  if (isConversationListError) {
    throw conversationListError
  }
  if (isMessageBatchError) {
    throw messageBatchError
  }
  if (isUserBatchError) {
    throw userBatchError
  }

  if (isConversationListPending) {
    return (
      <div {...props}>
        {Array.from({ length: 25 }, (_, index) => (
          <ConversationSidebarListItem key={index} />
        ))}
      </div>
    )
  }

  return (
    <div {...props}>
      {conversationList?.map((conversation) => {
        let lastMessage: Message | undefined = undefined
        let lastMessageUser: User | undefined = undefined

        if (conversation.lastMessageId != null) {
          lastMessage = messageBatch?.get(conversation.lastMessageId)

          if (lastMessage?.userId != null) {
            lastMessageUser = userBatch?.get(lastMessage.userId)
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
