"use client"

import { eq, useDbClient, useLiveQuery } from "@tanstack/react-db"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import { messagesCollection } from "@/features/conversations/collections/messages"
import { listMessages } from "@/features/conversations/api/list-messages"

export function useMessageList(conversationId: string) {
  const dbClient = useDbClient()
  const collection = dbClient.collection(messagesCollection)

  const query = useLiveQuery({
    query: (q) =>
      q
        .from({ message: messagesCollection })
        .where(({ message }) => eq(message.conversationId, conversationId))
        .orderBy(({ message }) => message.createTime, "asc")
        .orderBy(({ message }) => message.id, "asc"),
  })

  const pagination = useInfiniteQuery({
    queryKey: ["message-pages", conversationId],
    initialPageParam: "",
    queryFn: ({ pageParam }) =>
      listMessages(conversationId, { pageToken: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
  })

  const syncedPages = useRef(new WeakSet<object>())

  useEffect(() => {
    const pages = pagination.data?.pages
    if (!pages) {
      return
    }

    const pending = pages.filter((page) => !syncedPages.current.has(page))
    if (pending.length === 0) {
      return
    }

    for (const page of pending) {
      syncedPages.current.add(page)
    }

    void collection.utils
      .writeUpsert(pending.flatMap((page) => page.messages))
      .catch((error) => {
        for (const page of pending) {
          syncedPages.current.delete(page)
        }
        console.error("Failed to sync message pages", error)
      })
  }, [collection, pagination.data])

  return {
    data: query.data,

    fetchNextPage: pagination.fetchNextPage,
    hasNextPage: pagination.hasNextPage,
    isFetchingNextPage: pagination.isFetchingNextPage,
    isFetching: pagination.isFetching,

    isPending: pagination.isPending,
    isLoading: pagination.isLoading,
    isError: pagination.isError,
    error: pagination.error,
  }
}
