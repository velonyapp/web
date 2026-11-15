import { sampleConversations } from "@/lib/samples/conversations"

export async function getConversation(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const conversation = sampleConversations.get(name)
  if (!conversation) {
    throw new Error(`Conversation not found: ${name}`)
  }
  return conversation
}
