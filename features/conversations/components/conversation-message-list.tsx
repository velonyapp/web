"use client"

import * as React from "react"

import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import { useMessageList } from "@/features/messages/hooks/use-message-list"
import { useUserBatch } from "@/features/users/hooks/use-user-batch"
import { ConversationMessageListItem } from "./conversation-message-list-item"

type ConversationMessageListProps = React.ComponentProps<"div"> & {
  name: string
}

export function ConversationMessageList({
  name,
  ...props
}: ConversationMessageListProps) {
  const {
    data: messageList,
    error: messageListError,
    isPending: isMessageListPending,
    isError: isMessageListError,
  } = useMessageList(name)

  const {
    data: userBatch,
    error: userBatchError,
    isError: isUserBatchError,
  } = useUserBatch(
    messageList
      ?.map((message) => message.user)
      .filter((user) => user !== undefined) ?? []
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
                      key={message.name}
                      messageId={message.name}
                      message={message}
                      user={userBatch?.get(message.user ?? "")}
                      mergeWithPrevious={
                        message.user !== undefined &&
                        previousMessage?.user === message.user &&
                        Math.floor(
                          previousMessage.createTime.getTime() / 60000
                        ) === minute
                      }
                      mergeWithNext={
                        message.user !== undefined &&
                        nextMessage?.user === message.user &&
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
