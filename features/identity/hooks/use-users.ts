"use client"

import { inArray, useLiveQuery } from "@tanstack/react-db"

import { usersCollection } from "@/features/identity/collections/users"

export function useUsers(ids: string[]) {
  return useLiveQuery({
    query: (q) =>
      q
        .from({ user: usersCollection })
        .where(({ user }) => inArray(user.id, ids)),
  })
}
