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
import { useMessageList } from "@/features/conversations/hooks/use-message-list"
import { useUserBatch } from "@/features/identity/hooks/use-user-batch"
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
  const oldestMessageRef = React.useRef<HTMLDivElement>(null)

  const {
    data: messageList,
    error: messageListError,
    isError: isMessageListError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useMessageList(conversationId)

  const oldestMessageId = messageList[0]?.id

  const {
    data: userBatch,
    error: userBatchError,
    isError: isUserBatchError,
  } = useUserBatch(
    messageList.map((message) => message.userId).filter((user) => user !== null)
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
    const oldestMessage = oldestMessageRef.current
    if (!viewport || !oldestMessage) {
      return
    }

    let wasIntersecting: boolean | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (oldestMessageRef.current !== oldestMessage) return

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
        rootMargin: "750px 0px 0px 0px",
        threshold: 0,
      }
    )

    observer.observe(oldestMessage)

    return () => observer.disconnect()
  }, [conversationId, oldestMessageId])

  if (isMessageListError) throw messageListError
  if (isUserBatchError) throw userBatchError

  return (
    <div className="flex h-dvh min-h-0 flex-col px-2" {...props}>
      <MessageScrollerProvider autoScroll defaultScrollPosition="end">
        <MessageScroller className="relative min-h-0 flex-1">
          {isFetchingNextPage && (
            <EarlierMessagesSpinner key={conversationId} />
          )}

          <MessageScrollerViewport ref={viewportRef} preserveScrollOnPrepend>
            <MessageScrollerContent className="gap-1">
              {messageList.map((message, index, messages) => {
                const previousMessage = messages[index - 1]
                const nextMessage = messages[index + 1]
                const minute = Math.floor(message.createTime.getTime() / 60000)

                return (
                  <ConversationMessageListItem
                    key={message.id}
                    ref={index === 0 ? oldestMessageRef : undefined}
                    messageId={message.id}
                    message={message}
                    user={userBatch?.get(message.userId ?? "")}
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
