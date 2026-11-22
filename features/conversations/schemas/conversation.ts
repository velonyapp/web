import * as z from "zod"

export const ConversationSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  avatarUrl: z.string().optional(),
  createTime: z.coerce.date(),
  updateTime: z.coerce.date(),
})
