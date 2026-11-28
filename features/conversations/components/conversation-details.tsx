"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SubSidebar,
  SubSidebarHeader,
  SubSidebarContent,
} from "@/components/ui/sub-sidebar"
import {
  ConversationDetailsContent,
  ConversationDetailsContentSkeleton,
} from "@/features/conversations/components/conversation-details-content"
import { useConversation } from "@/features/conversations/hooks/use-conversation"
import { useSyncConversation } from "@/features/conversations/hooks/use-sync-conversation"
import { cn } from "cn"

type ConversationDetailsProps = Omit<
  React.ComponentProps<typeof SubSidebar>,
  "side" | "onClose" | "children"
> & {
  conversationId: string
  onClose: () => void
}

export function ConversationDetails({
  conversationId,
  onClose,
  className,
  style,
  ...props
}: ConversationDetailsProps) {
  const { data: conversation } = useConversation(conversationId)
  const { error, isError, isPending } = useSyncConversation(conversationId)

  if (isError) throw error

  return (
    <SubSidebar
      side="right"
      className={cn("h-dvh", className)}
      style={
        {
          "--sidebar-width": "min(22.5rem,50cqw)",
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <SubSidebarHeader className="shrink-0 flex-row items-center gap-2 border-b p-4">
        <Button
          variant="ghost"
          size="icon-sm"
          className="cursor-pointer"
          onClick={onClose}
        >
          <XIcon />
        </Button>
        <h2 className="text-base font-medium text-foreground">Details</h2>
      </SubSidebarHeader>

      <SubSidebarContent className="p-6 text-center text-sm">
        {conversation ? (
          <ConversationDetailsContent conversation={conversation} />
        ) : isPending ? (
          <ConversationDetailsContentSkeleton />
        ) : null}
      </SubSidebarContent>
    </SubSidebar>
  )
}
