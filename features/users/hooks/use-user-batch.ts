import { useEffect, useState } from "react"
import { batchGetUsers } from "@/features/users/api/batch-get-users"
import { notifyManager, useQueryClient } from "@tanstack/react-query"
import { User } from "@/features/users/schemas/user"

export function useUserBatch(names: string[]) {
  const queryClient = useQueryClient()

  const [data, setData] = useState<Map<string, User> | undefined>(undefined)
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
          const users = await batchGetUsers(staleNames)

          if (cancelled) {
            return
          }

          notifyManager.batch(() => {
            for (const user of users) {
              queryClient.setQueryData<User>([user.name], user)
            }
          })
        }

        const users = new Map(
          originalNames.map((name) => {
            const user = queryClient.getQueryData<User>([name])
            if (!user) throw new Error(`Missing user: ${name}`)
            return [name, user]
          })
        )

        if (!cancelled) {
          setData(users)
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
