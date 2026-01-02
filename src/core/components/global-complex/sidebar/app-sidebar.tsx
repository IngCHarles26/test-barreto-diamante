import * as React from "react"

import { SidebarRail, Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from '@/core/components'
import { NavMain, NavUser, HeaderNav } from "./components"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="min-h-dvh h-dvh">
      <SidebarHeader>
        <HeaderNav />
      </SidebarHeader>
      <SidebarContent> 
        <NavMain />
      </SidebarContent>
      <SidebarFooter >
        <NavUser/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
