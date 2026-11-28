"use client"

import { useQuery } from "@tanstack/react-query"
import { useDbClient } from "@tanstack/react-db"

import { lookupUsers } from "@/features/identity/api/lookup-users"
import { usersCollection } from "@/features/identity/collections/users"

export function useSyncUsers(ids: string[]) {
  const client = useDbClient()
  const collection = client.collection(usersCollection)

  const userIds = [...new Set(ids)].sort()

  const { data, ...query } = useQuery({
    queryKey: ["users", "sync", userIds],
    queryFn: async () => {
      const missingIds = userIds.filter((id) => !collection.has(id))

      if (missingIds.length > 0) {
        const users = await lookupUsers(missingIds)

        collection.utils.applyPatches(
          Array.from(users.values(), (value) => ({
            type: "update",
            value,
          }))
        )
      }

      return null
    },
  })

  return query
}
