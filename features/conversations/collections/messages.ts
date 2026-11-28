import {
  BasicIndex,
  collectionOptions,
  type SyncConfig,
} from "@tanstack/react-db"

import type { Message } from "@/features/conversations/types/message"

type Context = Parameters<SyncConfig<Message, string>["sync"]>[0]

export const messagesCollection = collectionOptions("messages", () => {
  let context: Context | undefined

  return {
    id: "messages",
    getKey: (row: Message) => row.id,
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
