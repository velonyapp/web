import { sampleMessages } from "@/lib/samples/messages"

export async function listMessages(conversationName: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const collectionName = `${conversationName}/messages`

  return [...sampleMessages.values()]
    .filter((message) => message.name.startsWith(`${collectionName}/`))
    .sort(
      (a, b) =>
        a.createTime.getTime() - b.createTime.getTime() ||
        a.name.localeCompare(b.name)
    )
}
