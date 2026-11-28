"use client"

import * as React from "react"

import { Spinner } from "@/components/ui/spinner"
import { useIntersection } from "@/hooks/use-intersection"
import { useConversationList } from "@/features/conversations/hooks/use-conversation-list"
import { useSyncConversationList } from "@/features/conversations/hooks/use-sync-conversation-list"
import {
  ConversationSidebarListItem,
  ConversationSidebarListItemSkeleton,
} from "@/features/conversations/components/conversation-sidebar-list-item"
import { useConversationLatestMessages } from "@/features/conversations/hooks/use-conversation-latest-messages"
import { useSyncConversationLatestMessages } from "@/features/conversations/hooks/use-sync-conversation-latest-messages"
import { useUsers } from "@/features/identity/hooks/use-users"
import { useSyncUsers } from "@/features/identity/hooks/use-sync-users"
import type { Message } from "@/features/conversations/types/message"
import type { User } from "@/features/identity/types/user"

type ConversationSidebarListProps = React.ComponentProps<"div"> & {
  viewportRef: React.RefObject<HTMLDivElement | null>
}

export function ConversationSidebarList({
  viewportRef,
  ...props
}: ConversationSidebarListProps) {
  const conversationList = useConversationList()
  const conversationListSync = useSyncConversationList()

  const conversationIds = conversationList.data.map(
    (conversation) => conversation.id
  )

  const latestMessages = useConversationLatestMessages(conversationIds)
  const latestMessagesSync = useSyncConversationLatestMessages(conversationIds)

  const userIds =
    latestMessages.data
      ?.map(({ message }) => message?.userId)
      .filter((userId) => userId !== null && userId !== undefined) ?? []

  const users = useUsers(userIds)
  const usersSync = useSyncUsers(userIds)

  const lastConversationId =
    conversationList.data[conversationList.data.length - 1]?.id

  const lastConversationRef = useIntersection({
    viewportRef,
    targetId: lastConversationId,
    rootMargin: "0px 0px 750px 0px",
    onIntersection: ({ entry, wasIntersecting }) => {
      if (
        wasIntersecting === false &&
        entry.isIntersecting &&
        conversationListSync.hasNextPage &&
        !conversationListSync.isFetching
      ) {
        void conversationListSync.fetchNextPage({
          cancelRefetch: false,
        })
      }
    },
  })

  if (conversationListSync.isError) {
    throw conversationListSync.error
  }
  if (latestMessagesSync.isError) {
    throw latestMessagesSync.error
  }
  if (usersSync.isError) {
    throw usersSync.error
  }

  if (conversationListSync.isPending && conversationList.data.length === 0) {
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
        const lastMessage: Message | undefined = latestMessages.data?.find(
          (item) => item.conversationId === conversation.id
        )?.message

        let lastMessageUser: User | undefined = undefined

        if (lastMessage !== undefined && lastMessage.userId !== null) {
          lastMessageUser = users.data?.find(
            (user) => user.id === lastMessage.userId
          )
        }

        const isPreviewPending =
          (latestMessagesSync.isPending && !lastMessage) ||
          (usersSync.isPending &&
            lastMessage !== undefined &&
            lastMessage.userId !== null &&
            !lastMessageUser)

        return (
          <ConversationSidebarListItem
            key={conversation.id}
            ref={
              index === conversations.length - 1
                ? lastConversationRef
                : undefined
            }
            conversation={conversation}
            lastMessage={lastMessage}
            lastMessageUser={lastMessageUser}
            isPreviewPending={isPreviewPending}
          />
        )
      })}
      {conversationListSync.isFetchingNextPage && (
        <div className="flex justify-center p-4">
          <Spinner className="size-3 text-muted-foreground" />
        </div>
      )}
    </div>
  )
}
