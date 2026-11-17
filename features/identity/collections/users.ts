import { BasicIndex, collectionOptions } from "@tanstack/react-db"
import { QueryClient } from "@tanstack/query-core"
import { queryCollectionOptions } from "@tanstack/query-db-collection"
import { loadNames, valuesFor } from "@/lib/database/load-subset"

import { batchGetUsers } from "@/features/identity/api/batch-get-users"
import { getUser } from "@/features/identity/api/get-user"
import { UserSchema, type User } from "@/features/identity/schemas/user"

const api = { batchGetUsers, getUser }
export type UsersApi = typeof api

export const usersCollection = collectionOptions("users", (client) =>
  queryCollectionOptions({
    id: "users",
    schema: UserSchema,
    getKey: (row) => row.name,
    autoIndex: "eager",
    defaultIndexType: BasicIndex,
    syncMode: "on-demand",
    queryKey: ["users"],
    queryClient: client.requireDependency<QueryClient>("queryClient"),
    queryFn: async ({ meta }): Promise<User[]> => {
      const source = client.getDependency<UsersApi>("usersApi") ?? api
      const options = meta?.loadSubsetOptions
      const names = valuesFor(options, "name")
      if (names === undefined) throw new Error("Users require resource names")
      return loadNames(
        names,
        client.collection(usersCollection),
        (missing) =>
          missing.length === 1
            ? source.getUser(missing[0]).then((user) => [user])
            : source.batchGetUsers(missing),
        options?.refetch
      )
    },
  })
)
