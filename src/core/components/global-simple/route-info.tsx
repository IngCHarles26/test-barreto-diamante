import { AppTooltip, Button, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Tooltip, TooltipContent, TooltipTrigger } from '../ui'
import { Info } from 'lucide-react'

export const RouteHelpInfo = () => {
  return (
    <Sheet>
      <SheetTrigger >
        <AppTooltip 
          content='Ayuda'
          children={<Info className='mr-2'/>}
          side='left'/>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ayuda</SheetTitle>
          <SheetDescription>
            Informacion de apoyo para el uso de esta ruta
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, deleniti ducimus? Et expedita quasi commodi ut repudiandae recusandae iusto quaerat dignissimos sit voluptas alias delectus qui consequuntur aliquid, perferendis quo!</p>
        </div>
        <SheetFooter>
          <SheetClose asChild >
            <Button variant="outline" className='mr-auto'>Aceptar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
