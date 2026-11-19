import { toMessage } from "@/features/conversations/api/mappers"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Message } from "@/features/conversations/types/message"
import { messageName } from "@/lib/api/resource-names"

type Cursor = {
  time: string
  id: string
}

type Options = {
  pageSize?: number
  pageToken?: string
}

export async function listMessages(
  conversationId: string,
  { pageSize = 25, pageToken = "" }: Options = {}
): Promise<{ messages: Message[]; nextPageToken: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  let cursor: Cursor | undefined

  if (pageToken) {
    try {
      cursor = JSON.parse(atob(pageToken.replace(/-/g, "+").replace(/_/g, "/")))

      if (
        typeof cursor?.time !== "string" ||
        typeof cursor?.id !== "string" ||
        Number.isNaN(Date.parse(cursor.time))
      ) {
        throw new Error("Invalid cursor")
      }
    } catch {
      throw new Error("Invalid message page token")
    }
  }

  const rows = [...sampleMessages.values()]
    .filter(
      (message) =>
        messageName.match(message.name).conversation.toString() ===
        conversationId
    )
    .map(toMessage)
    .filter(
      (message) =>
        !cursor ||
        message.createTime.getTime() < new Date(cursor.time).getTime() ||
        (message.createTime.getTime() === new Date(cursor.time).getTime() &&
          message.id < cursor.id)
    )
    .sort(
      (a, b) =>
        b.createTime.getTime() - a.createTime.getTime() ||
        b.id.localeCompare(a.id)
    )
    .slice(0, pageSize + 1)

  const messages = rows.slice(0, pageSize)

  let nextPageToken = ""

  if (rows.length > pageSize) {
    const last = messages[messages.length - 1]

    const nextCursor: Cursor = {
      time: last.createTime.toISOString(),
      id: last.id,
    }

    nextPageToken = btoa(JSON.stringify(nextCursor))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")
  }

  return { messages, nextPageToken }
}
