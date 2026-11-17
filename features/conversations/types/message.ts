export type Message = {
  id: string
  conversationId: string
  userId: string | null
  content: string
  createTime: Date
  updateTime: Date
}
