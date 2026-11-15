"use client"

import * as React from "react"
import { ConversationMessageList } from "@/features/conversations/components/conversation-message-list"

type ConversationPageProps = {
  params: Promise<{ id: string }>
}

export default function ConversationPage({ params }: ConversationPageProps) {
  const { id } = React.use(params)

  return <ConversationMessageList name={`conversations/${id}`} />
}
