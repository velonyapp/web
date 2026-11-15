import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "cn"
import { Skeleton } from "@/components/ui/skeleton"
import { useConversation } from "../hooks/use-conversation"

type ConversationHeaderProps = React.ComponentProps<"div"> & {
  name: string
}

export function ConversationHeader({
  name,
  className,
  ...props
}: ConversationHeaderProps) {
  const {
    data: conversation,
    error,
    isPending,
    isError,
  } = useConversation(name)

  if (isError) {
    throw error
  }

  return (
    <div
      className={cn(
        "flex w-full max-w-full min-w-0 items-start gap-2 overflow-hidden border-b px-8 py-4 text-sm leading-tight last:border-b-0",
        className
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
          {isPending ? (
            <Skeleton className="h-4 w-3/5" />
          ) : (
            <p className="min-w-0 flex-1 truncate">{conversation?.title}</p>
          )}
        </div>

        <div className="flex w-full min-w-0 items-end">
          {isPending ? (
            <Skeleton className="h-3 w-3/4" />
          ) : (
            <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
              {conversation?.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
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
