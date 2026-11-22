import { toConversation } from "@/features/conversations/api/mappers"
import { sampleConversations } from "@/features/conversations/samples/conversations"
import type { Conversation } from "@/features/conversations/types/conversation"

export async function lookupConversations(
  ids: string[]
): Promise<Map<string, Conversation>> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const conversationMap = new Map<string, Conversation>()

  for (const id of ids) {
    const conversation =
      sampleConversations.get(id) ??
      sampleConversations.get(`conversations/${id}`)
    if (conversation === undefined) {
      continue
    }

    conversationMap.set(id, toConversation(conversation))
  }

  return conversationMap
}
