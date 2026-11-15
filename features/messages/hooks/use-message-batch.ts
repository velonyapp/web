import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import { notifyManager, useQueryClient } from "@tanstack/react-query"
import { batchGetMessages } from "@/features/messages/api/batch-get-messages"
import type { Message } from "@/features/messages/schemas/message"

export function useMessageBatch(names: string[]) {
  const client = useQueryClient()
  const namesKey = JSON.stringify(names)

  const uniqueNames = useMemo(
    () => [...new Set(JSON.parse(namesKey) as string[])],
    [namesKey]
  )

  const snapshot = useRef(new Map<string, Message>())

  const subscribe = useCallback(
    (onChange: () => void) =>
      client.getQueryCache().subscribe(notifyManager.batchCalls(onChange)),
    [client]
  )

  const getSnapshot = useCallback(() => {
    const next = new Map<string, Message>()

    for (const name of uniqueNames) {
      const message = client.getQueryData<Message>([name])
      if (message !== undefined) next.set(name, message)
    }

    const previous = snapshot.current

    if (
      previous.size === next.size &&
      [...next].every(([name, message]) => previous.get(name) === message)
    ) {
      return previous
    }

    snapshot.current = next
    return next
  }, [client, uniqueNames])

  const cached = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const [failure, setFailure] = useState<{
    key: string
    error: Error
  } | null>(null)

  useEffect(() => {
    const missing = uniqueNames.filter(
      (name) => client.getQueryData([name]) === undefined
    )

    if (missing.length === 0) return

    let active = true

    void client
      .query({
        queryKey: ["message-batch", missing],
        queryFn: () => batchGetMessages(missing),
        staleTime: 0,
      })
      .then((messages) => {
        notifyManager.batch(() => {
          for (const message of messages) {
            client.setQueryData<Message>([message.name], message)
          }
        })

        const unresolved = missing.filter(
          (name) => client.getQueryData([name]) === undefined
        )

        if (active && unresolved.length) {
          setFailure({
            key: namesKey,
            error: new Error(`Missing messages: ${unresolved.join(", ")}`),
          })
        }
      })
      .catch((err) => {
        if (active) {
          setFailure({
            key: namesKey,
            error: err instanceof Error ? err : new Error(String(err)),
          })
        }
      })

    return () => {
      active = false
    }
  }, [client, namesKey, uniqueNames])

  const missing = uniqueNames.some((name) => !cached.has(name))

  const error = missing && failure?.key === namesKey ? failure.error : null

  return {
    data: cached.size > 0 || uniqueNames.length === 0 ? cached : undefined,
    error,
    isPending: missing && error === null,
    isError: error !== null,
  }
}
