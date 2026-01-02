'use client'

import { usePathname } from "next/navigation"

import { spaceSwitch } from "@/core/lib/utils"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from ".."

export const AppBreadCrump = () => {
  const route = usePathname().split('/')

  if(route.length <= 3) return null

  const ruta = route.at(-2) as string
  const subRuta = route.at(-1) as string
  

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block capitalize">
          {spaceSwitch(ruta)}
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage className="capitalize">
            {spaceSwitch(subRuta)}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
