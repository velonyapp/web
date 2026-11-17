export type Conversation = {
  id: string
  title: string
  description: string
  avatarUrl: string | null
  lastMessageId: string | null
  createTime: Date
  updateTime: Date
}
