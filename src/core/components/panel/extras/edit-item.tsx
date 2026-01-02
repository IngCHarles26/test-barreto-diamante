import { AppTooltip, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Tooltip, TooltipContent, TooltipTrigger } from "@/core/components/ui"
import { Pen } from "lucide-react"

interface EditItemProps {
  title: string
  description: string
  children?: React.ReactNode
}



export const EditExtraItem = ({title,description,children}:EditItemProps) => {
  return (
    <Dialog>

      <DialogTrigger>
        <AppTooltip content="Editar" >
          <Pen className='size-6 p-1 cursor-pointer'/>
        </AppTooltip>
      </DialogTrigger>

      <DialogContent className='w-96'>
        
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className='flex flex-col gap-2' >
          {children}
        </div>
        
        <DialogFooter className='mt-2'>
          <DialogClose asChild>
            <Button>Guardar</Button>
          </DialogClose>
        </DialogFooter>
        
      </DialogContent>
    </Dialog>
  )
}
