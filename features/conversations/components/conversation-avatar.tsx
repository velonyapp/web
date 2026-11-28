import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import type { Conversation } from "@/features/conversations/types/conversation"
import { cn } from "cn"

const COLORS = [
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

const SIZES = {
  xs: { avatar: "size-6", fallback: "text-[10px]" },
  sm: { avatar: "size-8", fallback: "text-xs" },
  md: { avatar: "size-10", fallback: "text-sm" },
  lg: { avatar: "size-12", fallback: "text-lg" },
  xl: { avatar: "size-16", fallback: "text-2xl" },
  "2xl": { avatar: "size-20", fallback: "text-3xl" },
  "3xl": { avatar: "size-24", fallback: "text-4xl" },
}

type ConversationAvatarProps = Omit<
  React.ComponentProps<typeof Avatar>,
  "size"
> & {
  conversation: Conversation
  size?: keyof typeof SIZES
}

export function ConversationAvatar({
  conversation,
  size = "md",
  className,
  ...props
}: ConversationAvatarProps) {
  return (
    <Avatar className={cn(SIZES[size].avatar, className)} {...props}>
      <AvatarImage src={conversation.avatarUrl ?? undefined} alt="Avatar" />
      <AvatarFallback
        className={cn(
          "font-medium",
          SIZES[size].fallback,
          color(conversation.id)
        )}
      >
        {initials(conversation.title)}
      </AvatarFallback>
    </Avatar>
  )
}

type ConversationAvatarSkeletonProps = React.ComponentProps<typeof Skeleton> & {
  size?: keyof typeof SIZES
}

export function ConversationAvatarSkeleton({
  size = "md",
  className,
  ...props
}: ConversationAvatarSkeletonProps) {
  return (
    <Skeleton
      className={cn("shrink-0 rounded-full", SIZES[size].avatar, className)}
      {...props}
    />
  )
}

function initials(title: string) {
  return title
    .trim()
    .split(/\s+/)
    .map((word) => word.match(/[\p{L}\p{N}]/u)?.[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function color(conversationId: string) {
  let hash = 0

  for (const char of conversationId) {
    hash = (hash * 31 + char.codePointAt(0)!) | 0
  }

  return COLORS[(hash >>> 0) % COLORS.length]
}
