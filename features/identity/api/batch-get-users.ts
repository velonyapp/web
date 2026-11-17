import { toUser } from "@/features/identity/api/mappers"
import { sampleUsers } from "@/features/identity/samples/users"
import type { User } from "@/features/identity/types/user"

export async function batchGetUsers(ids: string[]): Promise<User[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...new Set(ids)].map((id) => {
    const user = sampleUsers.get(`users/${id}`)
    if (!user) throw new Error(`User not found: ${id}`)
    return toUser(user)
  })
}
