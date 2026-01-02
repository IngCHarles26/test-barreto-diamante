import { CirclePlus } from "lucide-react"
import { AppTooltip, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../ui"

interface NewItemProps {
  title: string
  description: string
  children?: React.ReactNode
}

export const NewExtraItem = ({title,description,children}:NewItemProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <AppTooltip content="Nuevo" >
          <CirclePlus className='size-7 rounded-full p-1 cursor-pointer '/>
        </AppTooltip>
      </DialogTrigger>

      <DialogContent className='w-100'>

        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <div className='flex flex-col gap-2' >
          {children}
        </div>

        <DialogFooter className='mt-2'>
          <DialogClose asChild>
            <Button>Crear</Button>
          </DialogClose>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
