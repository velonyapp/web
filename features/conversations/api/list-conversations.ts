import { toConversation, toMessage } from "@/features/conversations/api/mappers"
import { sampleConversations } from "@/features/conversations/samples/conversations"
import { sampleMessages } from "@/features/conversations/samples/messages"
import type { Conversation } from "@/features/conversations/types/conversation"

type Cursor = {
  time: string
  id: string
}

type Options = {
  pageSize?: number
  pageToken?: string
}

export async function listConversations({
  pageSize = 20,
  pageToken = "",
}: Options = {}): Promise<{
  conversations: Conversation[]
  nextPageToken: string
}> {
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
      throw new Error("Invalid conversation page token")
    }
  }

  const lastMessageCreateTimes = new Map<string, Date>()

  for (const message of [...sampleMessages.values()].map(toMessage)) {
    const createTime = lastMessageCreateTimes.get(message.conversationId)
    if (createTime === undefined || message.createTime > createTime) {
      lastMessageCreateTimes.set(message.conversationId, message.createTime)
    }
  }

  const rows = [...sampleConversations.values()]
    .map(toConversation)
    .filter((conversation) => {
      const createTime =
        lastMessageCreateTimes.get(conversation.id) ?? conversation.createTime

      return (
        !cursor ||
        createTime.getTime() < new Date(cursor.time).getTime() ||
        (createTime.getTime() === new Date(cursor.time).getTime() &&
          conversation.id < cursor.id)
      )
    })
    .sort(
      (a, b) =>
        (lastMessageCreateTimes.get(b.id) ?? b.createTime).getTime() -
          (lastMessageCreateTimes.get(a.id) ?? a.createTime).getTime() ||
        b.id.localeCompare(a.id)
    )
    .slice(0, pageSize + 1)

  const conversations = rows.slice(0, pageSize)

  let nextPageToken = ""

  if (rows.length > pageSize) {
    const last = conversations[conversations.length - 1]

    const nextCursor: Cursor = {
      time: (
        lastMessageCreateTimes.get(last.id) ?? last.createTime
      ).toISOString(),
      id: last.id,
    }

    nextPageToken = btoa(JSON.stringify(nextCursor))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")
  }

  return { conversations, nextPageToken }
}
