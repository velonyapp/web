import * as z from "zod"

export const UserSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().optional(),
  avatarUrl: z.string().optional(),
  createTime: z.coerce.date(),
})
