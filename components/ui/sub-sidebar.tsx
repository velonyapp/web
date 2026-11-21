"use client"

import * as React from "react"
import { cn } from "cn"

const SUB_SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

type SubSidebarContextProps = {
  identifier: string
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SubSidebarContext = React.createContext<SubSidebarContextProps | null>(
  null
)

function useSubSidebar() {
  const context = React.useContext(SubSidebarContext)
  if (!context) {
    throw new Error("useSubSidebar must be used within a SubSidebarProvider.")
  }

  return context
}

function SubSidebarProvider({
  identifier,
  defaultOpen = false,
  open: openProp,
  onOpenChange: setOpenProp,
  children,
}: {
  identifier: string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}) {
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: React.SetStateAction<boolean>) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      document.cookie = `sub_sidebar_${encodeURIComponent(identifier)}_state=${openState}; path=/; max-age=${SUB_SIDEBAR_COOKIE_MAX_AGE}`
    },
    [identifier, open, setOpenProp]
  )
  const state = open ? "expanded" : "collapsed"
  const contextValue = React.useMemo<SubSidebarContextProps>(
    () => ({ identifier, state, open, setOpen }),
    [identifier, state, open, setOpen]
  )

  return (
    <SubSidebarContext.Provider value={contextValue}>
      {children}
    </SubSidebarContext.Provider>
  )
}

type SubSidebarProps = React.ComponentProps<"aside"> & {
  side?: "left" | "right"
}

function SubSidebar({
  side = "right",
  className,
  style,
  children,
  ...props
}: SubSidebarProps) {
  const { identifier, state, open } = useSubSidebar()

  return (
    <aside
      data-slot="sub-sidebar"
      data-sub-sidebar={identifier}
      data-state={state}
      data-collapsible={open ? "" : "offcanvas"}
      data-side={side}
      aria-hidden={!open}
      inert={!open}
      className={cn(
        "group/sub-sidebar relative shrink-0 overflow-hidden text-sidebar-foreground",
        className
      )}
      style={{ "--sidebar-width": "16rem", ...style } as React.CSSProperties}
      {...props}
    >
      <div
        data-slot="sub-sidebar-gap"
        className="relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear group-data-[collapsible=offcanvas]/sub-sidebar:w-0 motion-reduce:transition-none"
      />
      <div
        data-slot="sub-sidebar-container"
        data-side={side}
        className="absolute inset-y-0 z-10 flex h-full w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear data-[side=left]:left-0 data-[side=left]:border-r data-[side=left]:group-data-[collapsible=offcanvas]/sub-sidebar:left-[calc(var(--sidebar-width)*-1)] data-[side=right]:right-0 data-[side=right]:border-l data-[side=right]:group-data-[collapsible=offcanvas]/sub-sidebar:right-[calc(var(--sidebar-width)*-1)] motion-reduce:transition-none"
      >
        <div
          data-slot="sub-sidebar-inner"
          data-sidebar="sidebar"
          className="flex size-full min-w-0 flex-col bg-sidebar"
        >
          {children}
        </div>
      </div>
    </aside>
  )
}

function SubSidebarHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sub-sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

function SubSidebarContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sub-sidebar-content"
      data-sidebar="content"
      className={cn(
        "no-scrollbar flex min-h-0 flex-1 flex-col gap-0 overflow-auto",
        className
      )}
      {...props}
    />
  )
}

function SubSidebarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sub-sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
}

export {
  SubSidebar,
  SubSidebarProvider,
  SubSidebarHeader,
  SubSidebarContent,
  SubSidebarFooter,
  useSubSidebar,
}
