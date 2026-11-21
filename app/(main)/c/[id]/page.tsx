"use client"

import * as React from "react"
import { useSubSidebar } from "@/components/ui/sub-sidebar"
import { ConversationMessageList } from "@/features/conversations/components/conversation-message-list"
import { ConversationHeader } from "@/features/conversations/components/conversation-header"
import { ConversationMessageInput } from "@/features/conversations/components/conversation-message-input"
import { ConversationDetails } from "@/features/conversations/components/conversation-details"

type ConversationPageProps = {
  params: Promise<{ id: string }>
}

export default function ConversationPage({ params }: ConversationPageProps) {
  const { id } = React.use(params)
  const { setOpen: setDetailsOpen } = useSubSidebar()

  return (
    <div className="@container flex min-w-0">
      <main className="flex h-dvh min-h-0 min-w-0 flex-1 flex-col">
        <ConversationHeader
          conversationId={id}
          className="cursor-pointer"
          onClick={() => setDetailsOpen((open) => !open)}
        />
        <ConversationMessageList conversationId={id} />
        <ConversationMessageInput key={id} conversationId={id} />
      </main>

      <ConversationDetails
        key={id}
        conversationId={id}
        onClose={() => setDetailsOpen(false)}
      />
    </div>
  )
}
