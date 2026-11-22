"use client"

import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { ConversationSidebarList } from "@/features/conversations/components/conversation-sidebar-list"

export function ConversationSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const viewportRef = React.useRef<HTMLDivElement>(null)

  return (
    <Sidebar collapsible="none" className="min-w-0 flex-1" {...props}>
      <SidebarHeader className="gap-3.5 border-b p-4">
        <div className="flex w-full items-center justify-between">
          <div className="text-base font-medium text-foreground">
            Conversation
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent ref={viewportRef}>
        <SidebarGroup className="px-0">
          <SidebarGroupContent>
            <ConversationSidebarList viewportRef={viewportRef} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
