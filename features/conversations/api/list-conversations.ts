import { sampleConversations } from "@/features/conversations/samples/conversations"

export async function listConversations() {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...sampleConversations.values()]
}
