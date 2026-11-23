"use client"

import * as React from "react"

import { Spinner } from "@/components/ui/spinner"
import { useConversationList } from "@/features/conversations/hooks/use-conversation-list"
import {
  ConversationSidebarListItem,
  ConversationSidebarListItemSkeleton,
} from "@/features/conversations/components/conversation-sidebar-list-item"
import { useConversationLastMessageBatch } from "@/features/conversations/hooks/use-conversation-last-message-batch"
import { useUserBatch } from "@/features/identity/hooks/use-user-batch"
import type { Message } from "@/features/conversations/types/message"
import type { User } from "@/features/identity/types/user"

type ConversationSidebarListProps = React.ComponentProps<"div"> & {
  viewportRef: React.RefObject<HTMLDivElement | null>
}

export function ConversationSidebarList({
  viewportRef,
  ...props
}: ConversationSidebarListProps) {
  const conversationList = useConversationList(viewportRef)
  const lastMessageBatch = useConversationLastMessageBatch(
    conversationList.data?.map((conversation) => conversation.id) ?? []
  )
  const userBatch = useUserBatch(
    Array.from(lastMessageBatch.data?.values() ?? [])
      .map((message) => message.userId)
      .filter((userId) => userId !== null)
  )

  if (conversationList.isError) {
    throw conversationList.error
  }
  if (lastMessageBatch.isError) {
    throw lastMessageBatch.error
  }
  if (userBatch.isError) {
    throw userBatch.error
  }

  if (conversationList.isPending && conversationList.data.length === 0) {
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
      {conversationList.data.map((conversation, index, conversations) => {
        let lastMessage: Message | undefined = undefined
        let lastMessageUser: User | undefined = undefined

        if (lastMessageBatch.data?.has(conversation.id)) {
          lastMessage = lastMessageBatch.data.get(conversation.id)

          if (lastMessage !== undefined && lastMessage.userId !== null) {
            lastMessageUser = userBatch.data?.get(lastMessage.userId)
          }
        }

        const isPreviewPending =
          (lastMessageBatch.isPending || userBatch.isPending) &&
          (!lastMessage || !lastMessageUser)

        return (
          <ConversationSidebarListItem
            key={conversation.id}
            ref={
              index === conversations.length - 1
                ? conversationList.oldestConversationRef
                : undefined
            }
            conversation={conversation}
            lastMessage={lastMessage}
            lastMessageUser={lastMessageUser}
            isPreviewPending={isPreviewPending}
          />
        )
      })}
      {conversationList.isFetchingNextPage && (
        <div className="flex justify-center p-4">
          <Spinner className="size-3 text-muted-foreground" />
        </div>
      )}
    </div>
  )
}
