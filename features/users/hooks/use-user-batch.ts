import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import { notifyManager, useQueryClient } from "@tanstack/react-query"
import { batchGetUsers } from "@/features/users/api/batch-get-users"
import type { User } from "@/features/users/schemas/user"

export function useUserBatch(names: string[]) {
  const client = useQueryClient()
  const namesKey = JSON.stringify(names)

  const uniqueNames = useMemo(
    () => [...new Set(JSON.parse(namesKey) as string[])],
    [namesKey]
  )

  const snapshot = useRef(new Map<string, User>())

  const subscribe = useCallback(
    (onChange: () => void) =>
      client.getQueryCache().subscribe(notifyManager.batchCalls(onChange)),
    [client]
  )

  const getSnapshot = useCallback(() => {
    const next = new Map<string, User>()

    for (const name of uniqueNames) {
      const user = client.getQueryData<User>([name])
      if (user !== undefined) next.set(name, user)
    }

    const previous = snapshot.current

    if (
      previous.size === next.size &&
      [...next].every(([name, user]) => previous.get(name) === user)
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
      .fetchQuery({
        queryKey: ["user-batch", missing],
        queryFn: () => batchGetUsers(missing),
        staleTime: 0,
      })
      .then((users) => {
        notifyManager.batch(() => {
          for (const user of users) {
            client.setQueryData<User>([user.name], user)
          }
        })

        const unresolved = missing.filter(
          (name) => client.getQueryData([name]) === undefined
        )

        if (active && unresolved.length) {
          setFailure({
            key: namesKey,
            error: new Error(`Missing users: ${unresolved.join(", ")}`),
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
