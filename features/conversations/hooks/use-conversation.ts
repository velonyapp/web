import { useQuery } from "@tanstack/react-query"
import { getConversation } from "@/features/conversations/api/get-conversation"
import { Conversation } from "@/features/conversations/schemas/conversation"

export function useConversation(name: string) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: [name],
    queryFn: async ({ client }) => {
      const conversation = await getConversation(name)

      client.setQueryData<Conversation[]>(["conversations"], (old) =>
        old?.map((item) =>
          item.name === conversation.name ? conversation : item
        )
      )

      return conversation
    },
  })

  return { data, error, isPending, isError }
}
