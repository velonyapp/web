import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import type { Conversation } from "@/features/conversations/types/conversation"
import { cn } from "cn"

const AVATAR_COLORS = [
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

type ConversationAvatarProps = {
  conversation?: Conversation
  size?: number
}

export function ConversationAvatar({
  conversation,
  size,
}: ConversationAvatarProps) {
  const dimensions =
    size === undefined ? undefined : { width: size, height: size }

  if (!conversation) {
    return (
      <Skeleton className="size-10 shrink-0 rounded-full" style={dimensions} />
    )
  }

  return (
    <Avatar size="lg" style={dimensions}>
      <AvatarImage src={conversation.avatarUrl ?? undefined} alt="Avatar" />
      <AvatarFallback
        className={cn("font-medium", avatarColor(conversation.id))}
        style={size === undefined ? undefined : { fontSize: size * 0.35 }}
      >
        {avatarInitials(conversation.title)}
      </AvatarFallback>
    </Avatar>
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

function avatarColor(conversationId: string) {
  let hash = 0

  for (const char of conversationId) {
    hash = (hash * 31 + char.codePointAt(0)!) | 0
  }

  return AVATAR_COLORS[(hash >>> 0) % AVATAR_COLORS.length]
}
