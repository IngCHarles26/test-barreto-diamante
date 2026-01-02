import { ClientForm } from '@/core/components/global-simple'
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Textarea } from '@/core/components/ui'
import { UserPen } from 'lucide-react'

export const EditClient = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <UserPen/>
          Editar
        </Button>
      </DialogTrigger>
      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle>
            Edita la informacion de:
          </DialogTitle>
          <DialogDescription>
            Perico de los palotes
          </DialogDescription>
        </DialogHeader>
        <div className=' w-full'>
          <ClientForm/>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Aceptar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
