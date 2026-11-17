import {
  BasicIndex,
  collectionOptions,
  parseLoadSubsetOptions,
} from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"

import { batchGetUsers } from "@/features/identity/api/batch-get-users"
import { getUser } from "@/features/identity/api/get-user"
import type { User } from "@/features/identity/types/user"

const api = { batchGetUsers, getUser }

export const usersCollection = collectionOptions("users", (client) =>
  queryCollectionOptions<User>({
    id: "users",
    getKey: (row) => row.id,
    autoIndex: "eager",
    defaultIndexType: BasicIndex,
    syncMode: "on-demand",
    queryKey: ["users"],
    queryClient: client.requireDependency<QueryClient>("queryClient"),
    queryFn: async ({ meta }): Promise<User[]> => {
      const options = meta?.loadSubsetOptions
      const { filters } = parseLoadSubsetOptions(meta?.loadSubsetOptions)

      if (filters.length === 1 && filters[0].field.join(".") === "id") {
        const { operator, value } = filters[0]

        if (operator === "eq") {
          const id: string = value

          if (!options?.refetch) {
            const user = client.collection(usersCollection).get(id)
            if (user) {
              return [user]
            }
          }

          const user = await api.getUser(value)
          return [user]
        }

        if (operator === "in") {
          const ids: string[] = value

          const userMap = new Map<string, User>()

          if (!options?.refetch) {
            for (const id of ids) {
              const user = client.collection(usersCollection).get(id)
              if (user === undefined) {
                continue
              }

              userMap.set(id, user)
            }
          }

          const missingIds = Array.from(
            new Set(ids.filter((id) => !userMap.has(id)))
          )
          if (missingIds.length > 0) {
            const users = await api.batchGetUsers(missingIds)
            for (const user of users) {
              userMap.set(user.id, user)
            }
          }

          return ids.map((id) => {
            const user = userMap.get(id)
            if (user === undefined) {
              throw new Error("Unsupported query")
            }

            return user
          })
        }
      }

      throw new Error("Unsupported query")
    },
  })
)
