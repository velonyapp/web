"use client"

import { useMemo } from "react"
import { inArray, useLiveQuery } from "@tanstack/react-db"
import { usersCollection } from "@/features/users/collections/users"
import { databaseQueryState } from "@/lib/database/query-state"

export function useUserBatch(names: string[]) {
  const uniqueNames = [...new Set(names)].sort()
  const query = useLiveQuery({
    query: (q) =>
      uniqueNames.length
        ? q
            .from({ user: usersCollection })
            .where(({ user }) => inArray(user.name, uniqueNames))
        : undefined,
  })
  const data = useMemo(
    () => new Map(query.data?.map((user) => [user.name, user])),
    [query.data]
  )
  return {
    data,
    ...databaseQueryState(query, data.size === uniqueNames.length),
  }
}
