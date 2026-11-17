"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { type Conversation } from "@/features/conversations/schemas/conversation"
import { type Message } from "@/features/conversations/schemas/message"
import { type User } from "@/features/identity/schemas/user"
import { cn } from "cn"
import Link from "next/link"

type ConversationSidebarListItemProps = React.ComponentProps<"div"> & {
  conversation?: Conversation
  lastMessage?: Message
  lastMessageUser?: User
}

export function ConversationSidebarListItem({
  conversation,
  lastMessage,
  lastMessageUser,
  ...props
}: ConversationSidebarListItemProps) {
  const isMessagePending =
    conversation?.lastMessage !== undefined && lastMessage === undefined
  const isUserPending =
    lastMessage?.user !== undefined && lastMessageUser === undefined

  const content = (
    <div
      className={cn(
        "flex w-full max-w-full min-w-0 items-start gap-2 overflow-hidden border-b p-4 text-sm leading-tight last:border-b-0",
        conversation &&
          "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
      {...props}
    >
      {conversation ? (
        <Avatar size="lg">
          <AvatarImage src={conversation.avatar_url} alt="Avatar" />
          <AvatarFallback
            className={cn("font-medium", getAvatarColor(conversation.title))}
          >
            {avatarInitials(conversation.title)}
          </AvatarFallback>
        </Avatar>
      ) : (
        <Skeleton className="size-10 shrink-0 rounded-full" />
      )}

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
          {!conversation || isMessagePending || isUserPending ? (
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
    <Link href={`/c/${conversation.name.split("/").pop()}`} className="block">
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

function avatarInitials(title: string) {
  return title
    .trim()
    .split(/\s+/)
    .map((word) => word.match(/[\p{L}\p{N}]/u)?.[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

const avatarColors = [
  "bg-rose-500/15 text-rose-300",
  "bg-pink-500/15 text-pink-300",
  "bg-fuchsia-500/15 text-fuchsia-300",
  "bg-purple-500/15 text-purple-300",
  "bg-violet-500/15 text-violet-300",
  "bg-indigo-500/15 text-indigo-300",
  "bg-blue-500/15 text-blue-300",
  "bg-sky-500/15 text-sky-300",
  "bg-cyan-500/15 text-cyan-300",
  "bg-teal-500/15 text-teal-300",
  "bg-emerald-500/15 text-emerald-300",
  "bg-green-500/15 text-green-300",
  "bg-lime-500/15 text-lime-300",
  "bg-amber-500/15 text-amber-300",
  "bg-orange-500/15 text-orange-300",
  "bg-slate-500/15 text-slate-300",
]

function getAvatarColor(name: string) {
  let hash = 0

  for (const char of name) {
    hash = (hash * 31 + char.codePointAt(0)!) | 0
  }

  return avatarColors[(hash >>> 0) % avatarColors.length]
}
