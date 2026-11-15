import * as z from "zod";

export const ConversationSchema = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string().optional(),
  avatar_url: z.string().optional(),
  lastMessage: z.string().optional(),
  createTime: z.date(),
  updateTime: z.date(),
});

export type Conversation = z.infer<typeof ConversationSchema>;
