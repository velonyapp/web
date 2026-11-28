"use client"

import * as React from "react"

import { Spinner } from "@/components/ui/spinner"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { useIntersection } from "@/hooks/use-intersection"
import { useMessageList } from "@/features/conversations/hooks/use-message-list"
import { useSyncMessageList } from "@/features/conversations/hooks/use-sync-message-list"
import { useUsers } from "@/features/identity/hooks/use-users"
import { useSyncUsers } from "@/features/identity/hooks/use-sync-users"
import { ConversationMessageListItem } from "./conversation-message-list-item"

type ConversationMessageListProps = React.ComponentProps<"div"> & {
  conversationId: string
}

function EarlierMessagesSpinner() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 400)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div
      role="status"
      className="pointer-events-none absolute inset-x-0 top-2 z-10 flex justify-center"
    >
      <span className="sr-only">Loading earlier messages</span>
      <Spinner className="size-3 text-muted-foreground" aria-hidden="true" />
    </div>
  )
}

export function ConversationMessageList({
  conversationId,
  ...props
}: ConversationMessageListProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null)

  const messageList = useMessageList(conversationId)
  const messageListSync = useSyncMessageList(conversationId)

  const userIds = messageList.data
    .map((message) => message.userId)
    .filter((userId) => userId !== null)

  const users = useUsers(userIds)
  const usersSync = useSyncUsers(userIds)

  const firstMessageId = messageList.data[0]?.id

  const firstMessageRef = useIntersection({
    viewportRef,
    targetId: firstMessageId,
    rootMargin: "750px 0px 0px 0px",
    onIntersection: ({ entry, wasIntersecting }) => {
      if (
        wasIntersecting === false &&
        entry.isIntersecting &&
        messageListSync.hasNextPage &&
        !messageListSync.isFetching
      ) {
        void messageListSync.fetchNextPage({
          cancelRefetch: false,
        })
      }
    },
  })

  if (messageListSync.isError) throw messageListSync.error
  if (usersSync.isError) throw usersSync.error

  return (
    <div className="flex h-dvh min-h-0 flex-col px-2" {...props}>
      <MessageScrollerProvider autoScroll defaultScrollPosition="end">
        <MessageScroller className="relative min-h-0 flex-1">
          {messageListSync.isFetchingNextPage && (
            <EarlierMessagesSpinner key={conversationId} />
          )}

          <MessageScrollerViewport ref={viewportRef} preserveScrollOnPrepend>
            <MessageScrollerContent className="gap-1">
              {messageList.data.map((message, index, messages) => {
                const previousMessage = messages[index - 1]
                const nextMessage = messages[index + 1]
                const minute = Math.floor(message.createTime.getTime() / 60000)

                return (
                  <ConversationMessageListItem
                    key={message.id}
                    ref={index === 0 ? firstMessageRef : undefined}
                    messageId={message.id}
                    message={message}
                    user={users.data?.find(
                      (user) => user.id === message.userId
                    )}
                    mergeWithPrevious={
                      message.userId != null &&
                      previousMessage?.userId === message.userId &&
                      Math.floor(
                        previousMessage.createTime.getTime() / 60000
                      ) === minute
                    }
                    mergeWithNext={
                      message.userId != null &&
                      nextMessage?.userId === message.userId &&
                      Math.floor(nextMessage.createTime.getTime() / 60000) ===
                        minute
                    }
                  />
                )
              })}
            </MessageScrollerContent>
          </MessageScrollerViewport>

          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </div>
  )
}
