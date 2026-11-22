"use client"

import * as React from "react"
import { ConversationAvatar } from "./conversation-avatar"
import { Skeleton } from "@/components/ui/skeleton"
import type { Conversation } from "@/features/conversations/types/conversation"
import type { Message } from "@/features/conversations/types/message"
import type { User } from "@/features/identity/types/user"
import { cn } from "cn"
import Link from "next/link"

type ConversationSidebarListItemProps = React.ComponentProps<"div"> & {
  conversation?: Conversation
  lastMessage?: Message
  lastMessageUser?: User
  isLastMessagePending?: boolean
}

export function ConversationSidebarListItem({
  conversation,
  lastMessage,
  lastMessageUser,
  isLastMessagePending = false,
  ...props
}: ConversationSidebarListItemProps) {
  const isUserPending =
    lastMessage?.userId != null && lastMessageUser === undefined

  const content = (
    <div
      className={cn(
        "flex w-full max-w-full min-w-0 items-start gap-2 overflow-hidden border-b p-4 text-sm leading-tight last:border-b-0",
        conversation &&
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
      {...props}
    >
      <ConversationAvatar conversation={conversation} />

      <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
        <div className="flex w-full min-w-0 items-start gap-2">
          {conversation ? (
            <p className="min-w-0 flex-1 truncate">{conversation.title}</p>
          ) : (
            <Skeleton className="h-4 w-3/4" />
          )}

          {conversation && lastMessage && !isUserPending && (
            <time
              dateTime={lastMessage.createTime.toISOString()}
              className="shrink-0 text-[10px] text-muted-foreground"
            >
              {formatLastMessageTime(lastMessage.createTime)}
            </time>
          )}
        </div>

        <div className="flex w-full min-w-0 items-end">
          {!conversation || isLastMessagePending || isUserPending ? (
            <Skeleton className="h-3 w-full" />
          ) : (
            <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
              {formatLastMessage(
                lastMessageUser?.username,
                lastMessage?.content
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  )

  if (!conversation) return content

  return (
    <Link href={`/c/${conversation.id}`} className="block">
      {content}
    </Link>
  )
}

function formatLastMessage(sender?: string, content?: string) {
  if (content === undefined) return "No messages yet."

  return `${sender ?? "Unknown"}: ${content}`
}

const timeFormatter = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "2-digit",
})

const weekdayFormatter = new Intl.DateTimeFormat("en", {
  weekday: "long",
})

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
})

const fullDateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
})

function formatLastMessageTime(date: Date) {
  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  const lastWeek = new Date(today)
  lastWeek.setDate(lastWeek.getDate() - 6)

  if (date >= today) return timeFormatter.format(date)
  if (date >= yesterday) return "Yesterday"
  if (date >= lastWeek) return weekdayFormatter.format(date)

  if (date.getFullYear() === now.getFullYear()) {
    return dateFormatter.format(date)
  }

  return fullDateFormatter.format(date)
}
