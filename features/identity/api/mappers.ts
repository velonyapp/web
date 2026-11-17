import { UserSchema } from "@/features/identity/schemas/user"
import type { User } from "@/features/identity/types/user"
import { resourceId } from "@/lib/api/resource-id"

export function toUser(data: unknown): User {
  const user = UserSchema.parse(data)
  return {
    id: resourceId(user.name),
    username: user.username,
    email: user.email ?? null,
    avatarUrl: user.avatarUrl ?? null,
    createTime: user.createTime,
  }
}
