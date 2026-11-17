import { sampleUsers } from "@/features/identity/samples/users"

export async function getUser(name: string) {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user = sampleUsers.get(name)
  if (!user) {
    throw new Error(`User not found: ${name}`)
  }
  return user
}
