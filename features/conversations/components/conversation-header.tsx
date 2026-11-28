import * as React from "react"

import { ConversationAvatar } from "./conversation-avatar"
import { cn } from "cn"
import { Skeleton } from "@/components/ui/skeleton"
import { useConversation } from "../hooks/use-conversation"
import { useSyncConversation } from "../hooks/use-sync-conversation"

type ConversationHeaderProps = React.ComponentProps<"div"> & {
  conversationId: string
}

export function ConversationHeader({
  conversationId,
  className,
  ...props
}: ConversationHeaderProps) {
  const { data: conversation } = useConversation(conversationId)
  const { error, isPending, isError } = useSyncConversation(conversationId)

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
      <ConversationAvatar conversation={conversation} />

      <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
        <div className="flex w-full min-w-0 items-start gap-2">
          {!conversation && isPending ? (
            <Skeleton className="h-4 w-3/5" />
          ) : (
            <p className="min-w-0 flex-1 truncate">{conversation?.title}</p>
          )}
        </div>

        <div className="flex w-full min-w-0 items-end">
          {!conversation && isPending ? (
            <Skeleton className="h-3 w-3/4" />
          ) : (
            <p className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
              {conversation?.description.trim()
                ? conversation.description
                : conversation &&
                  `Created at ${createTimeFormatter.format(conversation.createTime)}`}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

const createTimeFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeStyle: "short",
})
