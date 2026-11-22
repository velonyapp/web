import { toMessage } from "@/features/conversations/api/mappers"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Message } from "@/features/conversations/types/message"
import { messageName } from "@/lib/api/resource-names"

export async function lookupMessages(
  ids: string[]
): Promise<Map<string, Message>> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const messages = [...sampleMessages.values()]
    .map(toMessage)
    .sort(
      (a, b) =>
        a.createTime.getTime() - b.createTime.getTime() ||
        a.id.localeCompare(b.id)
    )
  const messagesById = new Map<string, Message>()
  const latestMessagesByName = new Map<string, Message>()

  for (const message of messages) {
    messagesById.set(message.id, message)
    messagesById.set(
      messageName.render({
        conversation: message.conversationId,
        message: message.id,
      }),
      message
    )
    latestMessagesByName.set(
      messageName.render({
        conversation: message.conversationId,
        message: "latest",
      }),
      message
    )
  }

  const messageMap = new Map<string, Message>()

  for (const id of ids) {
    let message = latestMessagesByName.get(id)
    if (message === undefined) {
      message = messagesById.get(id)
    }
    if (message === undefined) {
      continue
    }

    messageMap.set(id, message)
  }

  return messageMap
}
