"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { BotIcon, CpuIcon, MessagesSquareIcon } from "lucide-react"
import Image from "next/image"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { setOpen } = useSidebar()

  return (
    <Sidebar
      collapsible="none"
      className="w-[calc(var(--sidebar-width-icon)+1px)]! shrink-0 overflow-hidden border-r"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex h-8 items-center gap-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                <Image
                  src="/images/velony-icon.png"
                  alt="VelonY"
                  width={32}
                  height={32}
                  className="size-8 object-contain"
                />
              </div>
              <span className="sr-only">VelonY</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={{
                    children: "Conversations",
                    hidden: false,
                  }}
                  render={<Link href="/" />}
                  onClick={() => {
                    setOpen(true)
                  }}
                  isActive={pathname === "/" || pathname.startsWith("/c/")}
                  className="px-2"
                >
                  <MessagesSquareIcon />
                  <span className="sr-only">Conversations</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={{
                    children: "Agents",
                    hidden: false,
                  }}
                  render={<Link href="/a" />}
                  onClick={() => {
                    setOpen(true)
                  }}
                  isActive={pathname === "/a" || pathname.startsWith("/a/")}
                  className="px-2"
                >
                  <BotIcon />
                  <span className="sr-only">Agents</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip={{
                    children: "Models",
                    hidden: false,
                  }}
                  render={<Link href="/m" />}
                  onClick={() => {
                    setOpen(true)
                  }}
                  isActive={pathname === "/m" || pathname.startsWith("/m/")}
                  className="px-2"
                >
                  <CpuIcon />
                  <span className="sr-only">Models</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  )
}
