import { useEffect, useState } from "react"
import { batchGetMessages } from "@/features/messages/api/batch-get-messages"
import { notifyManager, useQueryClient } from "@tanstack/react-query"
import { Message } from "@/features/messages/schemas/message"

export function useMessageBatch(names: string[]) {
  const queryClient = useQueryClient()

  const [data, setData] = useState<Map<string, Message> | undefined>(undefined)
  const [error, setError] = useState<Error | null>(null)
  const [isPending, setIsPending] = useState(true)

  const namesKey = JSON.stringify(names)

  useEffect(() => {
    let cancelled = false

    async function fetch() {
      setIsPending(true)
      setError(null)

      try {
        const originalNames = JSON.parse(namesKey) as string[]

        const staleNames = [...new Set(originalNames)].filter((name) => {
          const query = queryClient.getQueryCache().find({
            queryKey: [name],
            exact: true,
          })
          if (!query) {
            return true
          }
          if (query.getObserversCount() > 0) {
            return query.isStale()
          }

          const option = queryClient.defaultQueryOptions({
            queryKey: query.queryKey,
          }).staleTime

          return query.isStaleByTime(
            typeof option === "function" ? option(query) : option
          )
        })

        if (staleNames.length > 0) {
          const messages = await batchGetMessages(staleNames)

          if (cancelled) {
            return
          }

          notifyManager.batch(() => {
            for (const message of messages) {
              queryClient.setQueryData<Message>([message.name], message)
            }
          })
        }

        const messages = new Map(
          originalNames.map((name) => {
            const message = queryClient.getQueryData<Message>([name])
            if (!message) throw new Error(`Missing message: ${name}`)
            return [name, message]
          })
        )

        if (!cancelled) {
          setData(messages)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error(String(err)))
        }
      } finally {
        if (!cancelled) {
          setIsPending(false)
        }
      }
    }

    fetch()

    return () => {
      cancelled = true
    }
  }, [namesKey, queryClient])

  return {
    data,
    error,
    isPending,
    isError: error !== null,
  }
}
