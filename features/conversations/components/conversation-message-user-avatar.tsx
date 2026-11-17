import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import type { User } from "@/features/identity/types/user"
import { UserRoundXIcon } from "lucide-react"
import { cn } from "cn"

const UNKNOWN_AVATAR_COLOR = "bg-zinc-500/15 text-zinc-400"

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

type ConversationMessageUserAvatarProps = {
  user?: User
  isPending?: boolean
}

export function ConversationMessageUserAvatar({
  user,
  isPending = false,
}: ConversationMessageUserAvatarProps) {
  return (
    <Avatar>
      {isPending ? (
        <Skeleton className="size-full rounded-full" />
      ) : (
        <>
          <AvatarImage
            src={user?.avatarUrl ?? undefined}
            alt={user?.username}
          />
          <AvatarFallback
            className={cn(
              "font-medium",
              user ? avatarColor(user.id) : UNKNOWN_AVATAR_COLOR
            )}
          >
            {user ? (
              avatarInitials(user.username)
            ) : (
              <UserRoundXIcon className="size-4" />
            )}
          </AvatarFallback>
        </>
      )}
    </Avatar>
  )
}

function avatarInitials(username: string) {
  return username
    .trim()
    .split(/\s+/)
    .map((word) => word.match(/[\p{L}\p{N}]/u)?.[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function avatarColor(userId: string) {
  let hash = 0

  for (const char of userId) {
    hash = (hash * 31 + char.codePointAt(0)!) | 0
  }

  return AVATAR_COLORS[(hash >>> 0) % AVATAR_COLORS.length]
}
