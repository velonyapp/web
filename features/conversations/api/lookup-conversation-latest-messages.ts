import { toMessage } from "@/features/conversations/api/mappers"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Message } from "@/features/conversations/types/message"

export async function lookupConversationLatestMessages(
  conversationIds: string[]
): Promise<Map<string, Message>> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const ids = new Set(conversationIds)
  const messageMap = new Map<string, Message>()

  for (const sample of sampleMessages.values()) {
    const message = toMessage(sample)

    if (!ids.has(message.conversationId)) {
      continue
    }

    const latest = messageMap.get(message.conversationId)

    if (
      latest === undefined ||
      message.createTime.getTime() > latest.createTime.getTime() ||
      (message.createTime.getTime() === latest.createTime.getTime() &&
        message.id.localeCompare(latest.id) > 0)
    ) {
      messageMap.set(message.conversationId, message)
    }
  }

  return messageMap
}
