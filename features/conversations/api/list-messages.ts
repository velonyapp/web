import { toMessage } from "@/features/conversations/api/mappers"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Message } from "@/features/conversations/types/message"

export async function listMessages(conversationId: string): Promise<Message[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const prefix = `conversations/${conversationId}/messages/`
  return [...sampleMessages.values()]
    .filter((message) => message.name.startsWith(prefix))
    .map(toMessage)
    .sort(
      (a, b) =>
        a.createTime.getTime() - b.createTime.getTime() ||
        a.id.localeCompare(b.id)
    )
}
