import { toUser } from "@/features/identity/api/mappers"
import { sampleUsers } from "@/features/identity/samples/users"
import type { User } from "@/features/identity/types/user"

export async function lookupUsers(ids: string[]): Promise<Map<string, User>> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const userMap = new Map<string, User>()

  for (const id of ids) {
    const user = sampleUsers.get(id) ?? sampleUsers.get(`users/${id}`)
    if (user === undefined) {
      continue
    }

    userMap.set(user.name, toUser(user))
  }

  return userMap
}
