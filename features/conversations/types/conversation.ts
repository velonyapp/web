export type Conversation = {
  id: string
  title: string
  description: string | null
  avatarUrl: string | null
  lastMessageId: string | null
  createTime: Date
  updateTime: Date
}
