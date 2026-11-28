import {
  BasicIndex,
  collectionOptions,
  type SyncConfig,
} from "@tanstack/react-db"

import type { User } from "@/features/identity/types/user"

type Context = Parameters<SyncConfig<User, string>["sync"]>[0]

export const usersCollection = collectionOptions("users", () => {
  let context: Context | undefined

  return {
    id: "users",
    getKey: (row: User) => row.id,
    autoIndex: "eager",
    defaultIndexType: BasicIndex,
    startSync: true,
    gcTime: Infinity,

    sync: {
      sync(params: Context) {
        context = params

        return () => {
          context = undefined
        }
      },
    },

    utils: {
      applyPatches(patches: Parameters<Context["write"]>[0][]) {
        if (!context) {
          throw new Error("Sync not initialized")
        }

        const { begin, write, commit } = context

        begin()

        for (const patch of patches) {
          write(patch)
        }

        commit()
      },

      markReady() {
        context?.markReady()
      },
    },
  }
})
