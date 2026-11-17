import { toMessage } from "@/features/conversations/api/mappers"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Message } from "@/features/conversations/types/message"
import { resourceId } from "@/lib/api/resource-id"

export async function batchGetMessages(ids: string[]): Promise<Message[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const messagesById = new Map(
    [...sampleMessages.values()].map((message) => [
      resourceId(message.name),
      message,
    ])
  )
  return [...new Set(ids)].map((id) => {
    const message = messagesById.get(id)
    if (!message) throw new Error(`Message not found: ${id}`)
    return toMessage(message)
  })
}
