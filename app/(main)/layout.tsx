"use client"

import { usePathname } from "next/navigation"

import { AppSidebar } from "@/features/app/app-sidebar"
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ConversationSidebar } from "@/features/conversations/components/conversation-sidebar"
import { ModelSidebar } from "@/features/models/components/model-sidebar"
import { AgentSidebar } from "@/features/agents/components/agent-sidebar"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  const showConversationSidebar = pathname === "/" || pathname.startsWith("/c/")
  const showAgentSidebar = pathname === "/a" || pathname.startsWith("/a/")
  const showModelSidebar = pathname === "/m" || pathname.startsWith("/m/")

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      <Sidebar
        collapsible="icon"
        className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      >
        <AppSidebar />

        {showConversationSidebar && <ConversationSidebar />}
        {showAgentSidebar && <AgentSidebar />}
        {showModelSidebar && <ModelSidebar />}
      </Sidebar>
      <SidebarInset className="relative min-w-0">
        <SidebarTrigger className="absolute top-2 left-2 z-50 bg-background/80 backdrop-blur-sm" />

        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
