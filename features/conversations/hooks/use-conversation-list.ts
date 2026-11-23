"use client"

import {
  coalesce,
  eq,
  max,
  useDbClient,
  useLiveQuery,
} from "@tanstack/react-db"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect, useLayoutEffect, useRef, type RefObject } from "react"
import { conversationsCollection } from "@/features/conversations/collections/conversations"
import { messagesCollection } from "@/features/conversations/collections/messages"
import { listConversations } from "@/features/conversations/api/list-conversations"

export function useConversationList(
  viewportRef: RefObject<HTMLDivElement | null>
) {
  const dbClient = useDbClient()
  const collection = dbClient.collection(conversationsCollection)
  const oldestConversationRef = useRef<HTMLDivElement>(null)

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

  const paginationRef = useRef(pagination)
  const oldestConversationId = query.data[query.data.length - 1]?.id

  useLayoutEffect(() => {
    paginationRef.current = pagination
  }, [pagination])

  useEffect(() => {
    const viewport = viewportRef.current
    const oldestConversation = oldestConversationRef.current
    if (!viewport || !oldestConversation) {
      return
    }

    let wasIntersecting: boolean | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (oldestConversationRef.current !== oldestConversation) return

        for (const entry of entries) {
          const enteredLoadingZone =
            wasIntersecting === false && entry.isIntersecting

          wasIntersecting = entry.isIntersecting

          if (!enteredLoadingZone) {
            continue
          }

          if (
            paginationRef.current.hasNextPage &&
            !paginationRef.current.isFetching
          ) {
            void paginationRef.current.fetchNextPage({
              cancelRefetch: false,
            })
          }
        }
      },
      {
        root: viewport,
        rootMargin: "0px 0px 750px 0px",
        threshold: 0,
      }
    )

    observer.observe(oldestConversation)

    return () => observer.disconnect()
  }, [viewportRef, oldestConversationId])

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
    oldestConversationRef,

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
