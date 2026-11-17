import { sampleMessages } from "@/features/conversations/samples/messages"

export async function batchGetMessages(names: string[]) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...new Set(names)].map((name) => {
    const message = sampleMessages.get(name)
    if (!message) {
      throw new Error(`Message not found: ${name}`)
    }
    return message
  })
}
