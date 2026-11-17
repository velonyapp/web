import { toConversation } from "@/features/conversations/api/mappers"
import { sampleConversations } from "@/features/conversations/samples/conversations"
import type { Conversation } from "@/features/conversations/types/conversation"

export async function getConversation(id: string): Promise<Conversation> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const conversation = sampleConversations.get(`conversations/${id}`)
  if (!conversation) throw new Error(`Conversation not found: ${id}`)
  return toConversation(conversation)
}
