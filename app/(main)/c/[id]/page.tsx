"use client"

import * as React from "react"
import { ConversationMessageList } from "@/features/conversations/components/conversation-message-list"
import { ConversationHeader } from "@/features/conversations/components/conversation-header"
import { ConversationMessageInput } from "@/features/conversations/components/conversation-message-input"

type ConversationPageProps = {
  params: Promise<{ id: string }>
}

export default function ConversationPage({ params }: ConversationPageProps) {
  const { id } = React.use(params)

  return (
    <main className="flex h-dvh min-h-0 flex-col">
      <ConversationHeader name={`conversations/${id}`} />
      <ConversationMessageList name={`conversations/${id}`} />
      <ConversationMessageInput />
    </main>
  )
}
