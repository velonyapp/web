import { ConversationSchema } from "@/features/conversations/schemas/conversation"
import { MessageSchema } from "@/features/conversations/schemas/message"
import type { Conversation } from "@/features/conversations/types/conversation"
import type { Message } from "@/features/conversations/types/message"
import { resourceId } from "@/lib/api/resource-id"

export function toConversation(data: unknown): Conversation {
  const conversation = ConversationSchema.parse(data)
  return {
    id: resourceId(conversation.name),
    title: conversation.title,
    description: conversation.description ?? null,
    avatarUrl: conversation.avatarUrl ?? null,
    lastMessageId:
      conversation.lastMessage == null
        ? null
        : resourceId(conversation.lastMessage),
    createTime: conversation.createTime,
    updateTime: conversation.updateTime,
  }
}

export function toMessage(data: unknown): Message {
  const message = MessageSchema.parse(data)
  const match = /^conversations\/([^/]+)\/messages\/([^/]+)$/.exec(message.name)
  if (!match) throw new Error(`Invalid message resource name: ${message.name}`)
  return {
    id: match[2],
    conversationId: match[1],
    userId: message.user == null ? null : resourceId(message.user),
    content: message.content,
    createTime: message.createTime,
    updateTime: message.updateTime,
  }
}
