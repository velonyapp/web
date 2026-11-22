"use client"

import {
  coalesce,
  eq,
  max,
  useDbClient,
  useLiveQuery,
} from "@tanstack/react-db"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import { conversationsCollection } from "@/features/conversations/collections/conversations"
import { messagesCollection } from "@/features/conversations/collections/messages"
import { listConversations } from "@/features/conversations/api/list-conversations"

export function useConversationList() {
  const dbClient = useDbClient()
  const collection = dbClient.collection(conversationsCollection)

  const query = useLiveQuery({
    query: (q) =>
      q
        .from({ conversation: conversationsCollection })
        .leftJoin(
          {
            lastMessage: q
              .from({ message: messagesCollection })
              .groupBy(({ message }) => message.conversationId)
              .select(({ message }) => ({
                conversationId: message.conversationId,
                createTime: max(message.createTime),
              })),
          },
          ({ conversation, lastMessage }) =>
            eq(conversation.id, lastMessage.conversationId)
        )
        .orderBy(
          ({ conversation, lastMessage }) =>
            coalesce(lastMessage.createTime, conversation.createTime),
          "desc"
        )
        .orderBy(({ conversation }) => conversation.id, "desc")
        .select(({ conversation }) => conversation),
  })

  const pagination = useInfiniteQuery({
    queryKey: ["conversation-pages"],
    initialPageParam: "",
    queryFn: ({ pageParam }) => listConversations({ pageToken: pageParam }),
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
      .writeUpsert(pending.flatMap((page) => page.conversations))
      .catch((error) => {
        for (const page of pending) {
          syncedPages.current.delete(page)
        }
        console.error("Failed to sync conversation pages", error)
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
