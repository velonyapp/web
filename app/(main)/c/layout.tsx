import { cookies } from "next/headers"

import { SubSidebarProvider } from "@/components/ui/sub-sidebar"

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const identifier = "conversation-details"
  const cookieStore = await cookies()
  const defaultOpen =
    cookieStore.get(`sub_sidebar_${encodeURIComponent(identifier)}_state`)
      ?.value === "true"

  return (
    <SubSidebarProvider identifier={identifier} defaultOpen={defaultOpen}>
      {children}
    </SubSidebarProvider>
  )
}
