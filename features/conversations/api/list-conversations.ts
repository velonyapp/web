import { toConversation } from "@/features/conversations/api/mappers"
import { sampleConversations } from "@/features/conversations/samples/conversations"
import type { Conversation } from "@/features/conversations/types/conversation"

export async function listConversations(): Promise<Conversation[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...sampleConversations.values()].map(toConversation)
}
