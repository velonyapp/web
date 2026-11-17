import * as z from "zod";

export const UserSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().optional(),
  avatar_url: z.string().optional(),
  createTime: z.date(),
});

export type User = z.infer<typeof UserSchema>;
