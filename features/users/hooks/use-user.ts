"use client"

import { eq, useLiveQuery } from "@tanstack/react-db"
import { usersCollection } from "@/features/users/collections/users"
import { databaseQueryState } from "@/lib/database/query-state"

export function useUser(name: string) {
  const query = useLiveQuery({
    query: (q) =>
      q
        .from({ user: usersCollection })
        .where(({ user }) => eq(user.name, name))
        .findOne(),
  })
  return {
    data: query.data,
    ...databaseQueryState(query, query.data !== undefined),
  }
}
