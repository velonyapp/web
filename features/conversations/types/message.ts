export type Message = {
  id: string
  conversationId: string
  userId: string | null
  content: string
  state: "creating" | "editing" | "deleting" | "ready"
  createTime: Date
  updateTime: Date
}
