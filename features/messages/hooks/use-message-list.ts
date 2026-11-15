import { useQuery } from "@tanstack/react-query"
import { listMessages } from "@/features/messages/api/list-messages"

export function useMessageList(conversationName: string) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: [`${conversationName}/messages`],
    queryFn: async () => {
      const messages = await listMessages(conversationName)

      return messages
    },
  })

  return { data, error, isPending, isError }
}
