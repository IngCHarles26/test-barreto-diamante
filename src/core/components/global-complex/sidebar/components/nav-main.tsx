import Link from "next/link"
import { navOptions } from "@/core/seed"

import { ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/core/components/ui"
import { spaceSwitch } from "@/core/lib/utils"




export function NavMain() {

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarMenu >
        {navOptions.map(({title,url,items,Icon,isActive},ix) => (
          <Collapsible
            key={title+ix}
            // asChild 
            defaultOpen={isActive}
            className="group/collapsible">
            <SidebarMenuItem >
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={title} >
                  <Icon />
                  <span className="transition font-normal group-data-[state=open]/collapsible:font-bold">{title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent> 
                <SidebarMenuSub>
                  {items.map((item,ix) => (
                    <SidebarMenuSubItem key={item+ix}>
                      <SidebarMenuSubButton asChild>
                        <Link href={url+'/'+item} className="capitalize" >
                          {spaceSwitch(item)}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
