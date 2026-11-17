import { toMessage } from "@/features/conversations/api/mappers"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Message } from "@/features/conversations/types/message"
import { messageName } from "@/lib/api/resource-names"

export async function getMessage(id: string): Promise<Message> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const message = [...sampleMessages.values()].find(
    (message) => messageName.match(message.name).message.toString() === id
  )
  if (!message) throw new Error(`Message not found: ${id}`)
  return toMessage(message)
}
