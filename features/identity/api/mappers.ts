import { UserSchema } from "@/features/identity/schemas/user"
import type { User } from "@/features/identity/types/user"
import { userName } from "@/lib/api/resource-names"

export function toUser(data: unknown): User {
  const user = UserSchema.parse(data)
  return {
    id: userName.match(user.name).user.toString(),
    username: user.username,
    email: user.email ?? null,
    avatarUrl: user.avatarUrl ?? null,
    createTime: user.createTime,
  }
}
