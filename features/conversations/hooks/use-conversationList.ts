import { useQuery } from "@tanstack/react-query"
import { listConversations } from "@/features/conversations/api/list-conversations"
import { notifyManager } from "@tanstack/query-core"
import { Conversation } from "@/features/conversations/schemas/conversation"

export function useConversationList() {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["conversations"],
    queryFn: async ({ client }) => {
      const conversations = await listConversations()

      notifyManager.batch(() => {
        for (const conversation of conversations) {
          client.setQueryData<Conversation>([conversation.name], conversation)
        }
      })

      return conversations
    },
  })

  return { data, error, isPending, isError }
}
