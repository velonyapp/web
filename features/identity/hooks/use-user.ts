"use client"

import { eq, useLiveQuery } from "@tanstack/react-db"
import { usersCollection } from "@/features/identity/collections/users"
import { databaseQueryState } from "@/lib/database/query-state"

export function useUser(id: string) {
  const query = useLiveQuery({
    query: (q) =>
      q
        .from({ user: usersCollection })
        .where(({ user }) => eq(user.id, id))
        .findOne(),
  })
  return {
    data: query.data,
    ...databaseQueryState(query, query.data !== undefined),
  }
}
