"use client"

import * as React from "react"

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

export function ConversationMessageList({
  conversationId,
  ...props
}: ConversationMessageListProps) {
  const {
    data: messageList,
    error: messageListError,
    isPending: isMessageListPending,
    isError: isMessageListError,
  } = useMessageList(conversationId)

  const {
    data: userBatch,
    error: userBatchError,
    isError: isUserBatchError,
  } = useUserBatch(
    messageList
      ?.map((message) => message.userId)
      .filter((user) => user !== null) ?? []
  )

  if (isMessageListError) {
    throw messageListError
  }
  if (isUserBatchError) {
    throw userBatchError
  }

  return (
    <div className="flex h-dvh min-h-0 flex-col px-2" {...props}>
      {!isMessageListPending && (
        <MessageScrollerProvider autoScroll defaultScrollPosition="end">
          <MessageScroller className="min-h-0 flex-1">
            <MessageScrollerViewport>
              <MessageScrollerContent className="gap-1">
                {messageList?.map((message, index, messages) => {
                  const previousMessage = messages[index - 1]
                  const nextMessage = messages[index + 1]
                  const minute = Math.floor(
                    message.createTime.getTime() / 60000
                  )

                  return (
                    <ConversationMessageListItem
                      key={message.id}
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
      )}
    </div>
  )
}
