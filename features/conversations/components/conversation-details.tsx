"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  SubSidebar,
  SubSidebarHeader,
  SubSidebarContent,
} from "@/components/ui/sub-sidebar"
import { useConversation } from "@/features/conversations/hooks/use-conversation"
import { ConversationAvatar } from "./conversation-avatar"

type ConversationDetailsProps = {
  conversationId: string
  onClose: () => void
}

export function ConversationDetails({
  conversationId,
  onClose,
}: ConversationDetailsProps) {
  const titleId = React.useId()
  const {
    data: conversation,
    error,
    isError,
    isPending,
  } = useConversation(conversationId)

  if (isError) throw error

  return (
    <SubSidebar
      side="right"
      aria-labelledby={titleId}
      className="h-dvh"
      style={{ "--sidebar-width": "min(22.5rem,50cqw)" } as React.CSSProperties}
    >
      <SubSidebarHeader className="shrink-0 flex-row items-center gap-2 border-b p-4">
        <Button
          variant="ghost"
          size="icon-sm"
          className="cursor-pointer"
          aria-label="Close conversation details"
          onClick={onClose}
        >
          <XIcon aria-hidden="true" />
        </Button>
        <h2 id={titleId} className="text-base font-medium text-foreground">
          Details
        </h2>
      </SubSidebarHeader>

      <SubSidebarContent className="p-6 text-center text-sm">
        <div className="flex flex-col items-center gap-4">
          <ConversationAvatar conversation={conversation} size={96} />

          <div className="w-full space-y-2">
            {isPending ? (
              <Skeleton className="mx-auto h-6 w-3/5" />
            ) : (
              <h3 className="text-lg font-semibold wrap-anywhere">
                {conversation?.title}
              </h3>
            )}

            {isPending ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mx-auto h-4 w-3/4" />
              </div>
            ) : (
              <p className="leading-relaxed wrap-anywhere whitespace-pre-wrap text-muted-foreground">
                {conversation?.description}
              </p>
            )}
          </div>
        </div>
      </SubSidebarContent>
    </SubSidebar>
  )
}
