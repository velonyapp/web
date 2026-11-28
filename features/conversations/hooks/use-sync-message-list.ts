"use client"

import { useDbClient } from "@tanstack/react-db"
import { useInfiniteQuery } from "@tanstack/react-query"

import { messagesCollection } from "@/features/conversations/collections/messages"
import { listMessages } from "@/features/conversations/api/list-messages"

export function useSyncMessageList(conversationId: string) {
  const client = useDbClient()
  const collection = client.collection(messagesCollection)

  const { data, ...query } = useInfiniteQuery({
    queryKey: ["conversations", conversationId, "messages"],
    initialPageParam: "",
    queryFn: async ({ pageParam }) => {
      const page = await listMessages(conversationId, {
        pageToken: pageParam,
      })

      collection.utils.applyPatches(
        page.messages.map((value) => ({
          type: "update",
          value,
        }))
      )

      return { nextPageToken: page.nextPageToken }
    },
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  })

  return query
}
