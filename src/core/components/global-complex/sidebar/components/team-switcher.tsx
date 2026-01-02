import { Hotel } from "lucide-react"

export function HeaderNav() {


  return (
    <div className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex gap-2">
      <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
        <Hotel className="size-5" strokeWidth={2} />
      </div>
      <div className="grid flex-1 text-left text-sm leading-tight [state=open]:bg-red-500">
        <span className="truncate font-medium">Hostal</span>
        <span className="truncate text-xs">Barreto-Diamante</span>
      </div>
    </div>

  )
}
