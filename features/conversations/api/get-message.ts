import { sampleMessages } from "@/features/conversations/samples/messages"

export async function getMessage(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const message = sampleMessages.get(name)
  if (!message) {
    throw new Error(`Message not found: ${name}`)
  }
  return message
}
