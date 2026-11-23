"use client"

import * as React from "react"

import { Spinner } from "@/components/ui/spinner"
import { useConversationList } from "@/features/conversations/hooks/use-conversation-list"
import { ConversationSidebarListItem } from "@/features/conversations/components/conversation-sidebar-list-item"
import { useConversationLastMessageBatch } from "@/features/conversations/hooks/use-conversation-last-message-batch"
import { useUserBatch } from "@/features/identity/hooks/use-user-batch"
import type { Conversation } from "@/features/conversations/types/conversation"
import type { Message } from "@/features/conversations/types/message"
import type { User } from "@/features/identity/types/user"

type ConversationSidebarListProps = React.ComponentProps<"div"> & {
  viewportRef: React.RefObject<HTMLDivElement | null>
}

export function ConversationSidebarList({
  viewportRef,
  ...props
}: ConversationSidebarListProps) {
  const oldestConversationRef = React.useRef<HTMLDivElement>(null)

  const conversationList = useConversationList()
  const { hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
    conversationList
  const oldestConversationId =
    conversationList.data[conversationList.data.length - 1]?.id
  const conversationLastMessageBatch = useConversationLastMessageBatch(
    conversationList.data?.map((conversation) => conversation.id) ?? []
  )
  const userBatch = useUserBatch(
    Array.from(conversationLastMessageBatch.data?.values() ?? [])
      .map((message) => message.userId)
      .filter((user): user is string => user != null)
  )

  const paginationRef = React.useRef({
    hasNextPage,
    isFetching,
    fetchNextPage,
  })

  React.useLayoutEffect(() => {
    paginationRef.current = { hasNextPage, isFetching, fetchNextPage }
  }, [hasNextPage, isFetching, fetchNextPage])

  React.useEffect(() => {
    const viewport = viewportRef.current
    const oldestConversation = oldestConversationRef.current
    if (!viewport || !oldestConversation) {
      return
    }

    let wasIntersecting: boolean | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (oldestConversationRef.current !== oldestConversation) return

        for (const entry of entries) {
          const enteredLoadingZone =
            wasIntersecting === false && entry.isIntersecting

          wasIntersecting = entry.isIntersecting

          if (!enteredLoadingZone) {
            continue
          }

          const pagination = paginationRef.current
          if (pagination.hasNextPage && !pagination.isFetching) {
            void pagination.fetchNextPage({ cancelRefetch: false })
          }
        }
      },
      {
        root: viewport,
        rootMargin: "0px 0px 750px 0px",
        threshold: 0,
      }
    )

    observer.observe(oldestConversation)

    return () => observer.disconnect()
  }, [viewportRef, oldestConversationId])

  if (conversationList.isError) {
    throw conversationList.error
  }
  if (conversationLastMessageBatch.isError) {
    throw conversationLastMessageBatch.error
  }
  if (userBatch.isError) {
    throw userBatch.error
  }

  const conversations: (Conversation | undefined)[] =
    conversationList.isPending && conversationList.data.length === 0
      ? Array.from({ length: 25 })
      : conversationList.data

  return (
    <div {...props}>
      {conversations.map((conversation, index) => {
        let lastMessage: Message | undefined = undefined
        let lastMessageUser: User | undefined = undefined

        if (
          conversation &&
          conversationLastMessageBatch.data?.has(conversation.id)
        ) {
          lastMessage = conversationLastMessageBatch.data.get(conversation.id)

          if (lastMessage?.userId != null) {
            lastMessageUser = userBatch.data?.get(lastMessage.userId)
          }
        }

        const isConversationPending =
          conversationList.isPending && !conversation
        const isPreviewPending =
          (conversationLastMessageBatch.isPending || userBatch.isPending) &&
          (!lastMessage || !lastMessageUser)

        return (
          <ConversationSidebarListItem
            key={conversation?.id ?? index}
            ref={
              conversation && index === conversations.length - 1
                ? oldestConversationRef
                : undefined
            }
            conversation={conversation}
            lastMessage={lastMessage}
            lastMessageUser={lastMessageUser}
            isConversationPending={isConversationPending}
            isPreviewPending={isPreviewPending}
          />
        )
      })}
      {isFetchingNextPage && (
        <div className="flex justify-center p-4">
          <Spinner className="size-3 text-muted-foreground" />
        </div>
      )}
    </div>
  )
}
