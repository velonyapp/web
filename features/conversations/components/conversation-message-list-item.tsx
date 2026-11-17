"use client"

import * as React from "react"

import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"
import { MessageScrollerItem } from "@/components/ui/message-scroller"
import type { Message as MessageX } from "@/features/conversations/types/message"
import type { User } from "@/features/identity/types/user"
import { cn } from "cn"
import { ConversationMessageUserAvatar } from "./conversation-message-user-avatar"

type ConversationMessageListItemProps = React.ComponentProps<
  typeof MessageScrollerItem
> & {
  message: MessageX
  user?: User
  mergeWithNext?: boolean
  mergeWithPrevious?: boolean
}

export function ConversationMessageListItem({
  message,
  user,
  mergeWithNext = false,
  mergeWithPrevious = false,
  ...props
}: ConversationMessageListItemProps) {
  const isUserPending = message.userId != null && user === undefined

  return (
    <MessageScrollerItem {...props}>
      <Message>
        <MessageAvatar
          className={cn(
            "self-start group-has-data-[slot=message-footer]/message:translate-y-0",
            mergeWithPrevious
              ? "invisible mt-0 h-0 min-h-0 overflow-hidden"
              : "mt-2"
          )}
        >
          <ConversationMessageUserAvatar user={user} isPending={isUserPending} />
        </MessageAvatar>

        <MessageContent className="gap-0">
          <div className="flex flex-col gap-0.5">
            {!mergeWithPrevious && (
              <MessageHeader className="px-1">
                {isUserPending ? "..." : (user?.username ?? "Unknown")}
              </MessageHeader>
            )}

            <Bubble variant="secondary">
              <BubbleContent>{message.content}</BubbleContent>
            </Bubble>
          </div>

          {!mergeWithNext && (
            <MessageFooter className="px-2">
              <time dateTime={message.createTime.toISOString()}>
                {timeFormatter.format(message.createTime)}
              </time>
            </MessageFooter>
          )}
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  )
}

const timeFormatter = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "2-digit",
})
