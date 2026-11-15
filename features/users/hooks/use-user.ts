import { useQuery } from "@tanstack/react-query"
import { getUser } from "@/features/users/api/get-user"
import { User } from "@/features/users/schemas/user"

export function useUser(name: string) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: [name],
    queryFn: async ({ client }) => {
      const user = await getUser(name)

      client.setQueryData<User[]>(["users"], (old) =>
        old?.map((item) => (item.name === user.name ? user : item))
      )

      return user
    },
  })

  return { data, error, isPending, isError }
}
