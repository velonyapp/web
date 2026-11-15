import { sampleMessages } from "@/lib/samples/messages"

export async function listMessages(conversationName: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const collectionName = `${conversationName}/messages`

  return [...sampleMessages.values()]
    .filter((message) => message.name.startsWith(`${collectionName}/`))
    .sort(
      (a, b) =>
        b.createTime.getTime() - a.createTime.getTime() ||
        b.name.localeCompare(a.name)
    )
}
