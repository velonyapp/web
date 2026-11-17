import { sampleUsers } from "@/features/identity/samples/users"

export async function batchGetUsers(names: string[]) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [...new Set(names)].map((name) => {
    const user = sampleUsers.get(name)
    if (!user) {
      throw new Error(`User not found: ${name}`)
    }
    return user
  })
}
