"use client"

import { useMemo } from "react"
import { inArray, useLiveQuery } from "@tanstack/react-db"
import { usersCollection } from "@/features/identity/collections/users"
import { databaseQueryState } from "@/lib/database/query-state"

export function useUserBatch(ids: string[]) {
  const uniqueIds = [...new Set(ids)].sort()
  const query = useLiveQuery({
    query: (q) =>
      uniqueIds.length
        ? q
            .from({ user: usersCollection })
            .where(({ user }) => inArray(user.id, uniqueIds))
        : undefined,
  })
  const data = useMemo(
    () => new Map(query.data?.map((user) => [user.id, user])),
    [query.data]
  )
  return {
    data,
    ...databaseQueryState(query, data.size === uniqueIds.length),
  }
}
