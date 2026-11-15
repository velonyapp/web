import * as z from "zod";

export const MessageSchema = z.object({
  name: z.string(),
  user: z.string().optional(),
  content: z.string(),
  createTime: z.date(),
  updateTime: z.date(),
});

export type Message = z.infer<typeof MessageSchema>;
