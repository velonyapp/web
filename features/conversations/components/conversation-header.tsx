import * as React from "react"

import {
  ConversationAvatar,
  ConversationAvatarSkeleton,
} from "@/features/conversations/components/conversation-avatar"
import { cn } from "cn"
import { Skeleton } from "@/components/ui/skeleton"
import type { Conversation } from "@/features/conversations/types/conversation"

type ConversationHeaderProps = React.ComponentProps<"div"> & {
  conversation: Conversation
}

export function ConversationHeader({
  conversation,
  className,
  ...props
}: ConversationHeaderProps) {
  const subtitle =
    conversation.description.trim() ||
    `Created at ${createTimeFormatter.format(conversation.createTime)}`

  return (
    <div
      className={cn(
        "flex w-full max-w-full min-w-0 items-start gap-2 overflow-hidden border-b px-8 py-4 text-sm leading-tight last:border-b-0",
        className
      )}
      {...props}
    >
      <ConversationAvatar conversation={conversation} />

      <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
        <div className="flex w-full min-w-0 items-start gap-2">
          <p className="min-w-0 flex-1 truncate">{conversation.title}</p>
        </div>

        <div className="flex w-full min-w-0 items-end">
          <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ConversationHeaderSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full max-w-full min-w-0 items-start gap-2 overflow-hidden border-b px-8 py-4 text-sm leading-tight last:border-b-0",
        className
      )}
      {...props}
    >
      <ConversationAvatarSkeleton />

      <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
        <div className="flex w-full min-w-0 items-start gap-2">
          <Skeleton className="h-4 w-3/5" />
        </div>

        <div className="flex w-full min-w-0 items-end">
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
    </div>
  )
}

const createTimeFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeStyle: "short",
})
