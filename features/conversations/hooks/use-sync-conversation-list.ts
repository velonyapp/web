"use client"

import { useDbClient } from "@tanstack/react-db"
import { useInfiniteQuery } from "@tanstack/react-query"

import { conversationsCollection } from "@/features/conversations/collections/conversations"
import { listConversations } from "@/features/conversations/api/list-conversations"

export function useSyncConversationList() {
  const client = useDbClient()
  const collection = client.collection(conversationsCollection)

  const { data, ...query } = useInfiniteQuery({
    queryKey: ["conversations", "list"],
    initialPageParam: "",
    queryFn: async ({ pageParam }) => {
      const page = await listConversations({
        pageToken: pageParam,
      })

      collection.utils.applyPatches(
        page.conversations.map((value) => ({
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
