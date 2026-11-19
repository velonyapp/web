import * as z from "zod"

import { toMessage } from "@/features/conversations/api/mappers"
import { sampleConversations } from "@/features/conversations/samples/conversations"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Message } from "@/features/conversations/types/message"
import { sampleUsers } from "@/features/identity/samples/users"
import {
  conversationName,
  messageName,
  userName,
} from "@/lib/api/resource-names"

export async function createMessage(
  conversationId: string,
  messageId: string,
  userId: string,
  content: string
): Promise<Message> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  z.uuid().parse(messageId)

  const parent = conversationName.render({ conversation: conversationId })
  if (!sampleConversations.has(parent)) {
    throw new Error(`Conversation not found: ${conversationId}`)
  }

  // userId represents the authenticated caller in this mock.
  const user = sampleUsers.get(userName.render({ user: userId }))
  if (!user) {
    throw new Error(`User not found: ${userId}`)
  }

  const contentLength = Array.from(content).length
  if (contentLength === 0 || contentLength > 65536) {
    throw new Error("Message content must be between 1 and 65536 characters")
  }

  const now = new Date().toISOString()
  const message = {
    name: messageName.render({
      conversation: conversationId,
      message: messageId,
    }),
    user: user.name,
    content,
    createTime: now,
    updateTime: now,
  }

  if (sampleMessages.has(message.name)) {
    throw new Error(`Message already exists: ${messageId}`)
  }

  const result = toMessage(message)
  sampleMessages.set(message.name, message)
  return result
}
