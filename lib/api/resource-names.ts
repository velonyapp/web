import { PathTemplate } from "google-gax"

export const conversationName = new PathTemplate("conversations/{conversation}")
export const messageName = new PathTemplate(
  "conversations/{conversation}/messages/{message}"
)
export const userName = new PathTemplate("users/{user}")
