"use client"

import * as React from "react"

import { Spinner } from "@/components/ui/spinner"
import { useConversationList } from "@/features/conversations/hooks/use-conversation-list"
import {
  ConversationSidebarListItem,
  ConversationSidebarListItemSkeleton,
} from "@/features/conversations/components/conversation-sidebar-list-item"
import { useConversationLastMessagesLookup } from "@/features/conversations/hooks/use-conversation-last-messages-lookup"
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
  const oldestConversationRef = React.useRef<HTMLDivElement>(null)
  const [isInitialPending, setIsInitialPending] = React.useState(true)

  const conversationList = useConversationList()
  const { hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
    conversationList
  const oldestConversationId =
    conversationList.data[conversationList.data.length - 1]?.id
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

  if (isInitialPending && !isPending) {
    setIsInitialPending(false)
  }

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
    if (!viewport || !oldestConversation || isInitialPending) {
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
  }, [viewportRef, oldestConversationId, isInitialPending])

  if (conversationList.isError) {
    throw conversationList.error
  }
  if (conversationLastMessagesLookup.isError) {
    throw conversationLastMessagesLookup.error
  }
  if (userBatch.isError) {
    throw userBatch.error
  }

  if (isInitialPending) {
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
      {conversationList.data?.map((conversation, index, conversations) => {
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
            ref={
              index === conversations.length - 1
                ? oldestConversationRef
                : undefined
            }
            conversation={conversation}
            lastMessage={lastMessage}
            lastMessageUser={lastMessageUser}
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
