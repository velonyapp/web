"use client"

import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/components/ui/message"
import { MessageScrollerItem } from "@/components/ui/message-scroller"
import { Skeleton } from "@/components/ui/skeleton"
import { type Message as MessageX } from "@/features/conversations/schemas/message"
import { type User } from "@/features/identity/schemas/user"
import { UserRoundIcon, UserRoundXIcon } from "lucide-react"
import { cn } from "cn"

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
  const isUserPending = message.user !== undefined && user === undefined

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
          <Avatar>
            {isUserPending ? (
              <Skeleton className="size-full rounded-full" />
            ) : (
              <>
                <AvatarImage src={user?.avatar_url} alt={user?.username} />
                <AvatarFallback
                  className={cn(
                    user
                      ? getAvatarColor(user.name)
                      : "bg-zinc-500/15 text-zinc-400"
                  )}
                >
                  {user ? (
                    <UserRoundIcon className="size-4" />
                  ) : (
                    <UserRoundXIcon className="size-4" />
                  )}
                </AvatarFallback>
              </>
            )}
          </Avatar>
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

const avatarColors = [
  "bg-rose-900/70 text-rose-100",
  "bg-orange-900/70 text-orange-100",
  "bg-amber-900/70 text-amber-100",
  "bg-emerald-900/70 text-emerald-100",
  "bg-teal-900/70 text-teal-100",
  "bg-sky-900/70 text-sky-100",
  "bg-indigo-900/70 text-indigo-100",
  "bg-purple-900/70 text-purple-100",
]

function getAvatarColor(name: string) {
  let hash = 0

  for (const char of name) {
    hash = (hash * 31 + char.codePointAt(0)!) | 0
  }

  return avatarColors[(hash >>> 0) % avatarColors.length]
}
