import { ConversationSchema } from "@/features/conversations/schemas/conversation"
import { MessageSchema } from "@/features/conversations/schemas/message"
import type { Conversation } from "@/features/conversations/types/conversation"
import type { Message } from "@/features/conversations/types/message"
import {
  conversationName,
  messageName,
  userName,
} from "@/lib/api/resource-names"

export function toConversation(data: unknown): Conversation {
  const conversation = ConversationSchema.parse(data)
  return {
    id: conversationName.match(conversation.name).conversation.toString(),
    title: conversation.title,
    description: conversation.description,
    avatarUrl: conversation.avatarUrl ?? null,
    lastMessageId:
      conversation.lastMessage == null
        ? null
        : messageName.match(conversation.lastMessage).message.toString(),
    createTime: conversation.createTime,
    updateTime: conversation.updateTime,
  }
}

export function toMessage(data: unknown): Message {
  const message = MessageSchema.parse(data)
  const name = messageName.match(message.name)
  return {
    id: name.message.toString(),
    conversationId: name.conversation.toString(),
    userId:
      message.user == null
        ? null
        : userName.match(message.user).user.toString(),
    content: message.content,
    state: "ready",
    createTime: message.createTime,
    updateTime: message.updateTime,
  }
}
