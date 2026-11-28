import * as React from "react"

import { Skeleton } from "@/components/ui/skeleton"
import {
  ConversationAvatar,
  ConversationAvatarSkeleton,
} from "@/features/conversations/components/conversation-avatar"
import type { Conversation } from "@/features/conversations/types/conversation"
import { cn } from "cn"

type ConversationDetailsContentProps = React.ComponentProps<"div"> & {
  conversation: Conversation
}

export function ConversationDetailsContent({
  conversation,
  className,
  ...props
}: ConversationDetailsContentProps) {
  return (
    <div
      className={cn("flex flex-col items-center gap-4", className)}
      {...props}
    >
      <ConversationAvatar conversation={conversation} size="3xl" />

      <div className="w-full space-y-2">
        <h3 className="text-lg font-semibold wrap-anywhere">
          {conversation.title}
        </h3>

        <p className="leading-relaxed wrap-anywhere whitespace-pre-wrap text-muted-foreground">
          {conversation.description}
        </p>
      </div>
    </div>
  )
}

export function ConversationDetailsContentSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col items-center gap-4", className)}
      {...props}
    >
      <ConversationAvatarSkeleton size="3xl" />

      <div className="w-full space-y-2">
        <Skeleton className="mx-auto h-6 w-3/5" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mx-auto h-4 w-3/4" />
        </div>
      </div>
    </div>
  )
}
