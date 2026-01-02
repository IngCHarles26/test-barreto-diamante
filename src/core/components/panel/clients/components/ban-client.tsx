import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, Input, Label, Popover, PopoverContent, PopoverTrigger, RadioGroup, RadioGroupItem, Textarea } from '@/core/components/ui'
import { Ban } from 'lucide-react'


export const BanClient = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='destructive'>
          <Ban/>
          Betar
        </Button>
      </DialogTrigger>
      <DialogContent className='w-96'>
        <DialogHeader>
          <DialogTitle>
            Estas segunro de Betar a:
          </DialogTitle>
          <DialogDescription>
            Perico de los palotes
          </DialogDescription>
        </DialogHeader>
        <Textarea  aria-invalid className='h-28' placeholder='Escribe los motivos'/>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>NO</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant='destructive'>SI</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
