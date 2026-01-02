import { AppDialog, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label, Popover, PopoverContent, PopoverTrigger, RadioGroup, RadioGroupItem } from '@/core/components/ui'
import { Contact } from 'lucide-react'

export const SearchClientByName = () => {
  return (
    <AppDialog
      tooltipChild={<p className='px-2 py-1 border rounded bg-gray-100 shadow cursor-pointer hover:bg'>Nombres</p>}
      title="Buscar usuario"
      description="Escribe el nombre y/o el apellido del cliente que desees buscar"
      buttonText="Buscar"
     >
      <Input placeholder='Nombres' className='mt-2'/>
      <Input placeholder='Apellidos' className='mt-2'/>
    </AppDialog>
  )
}
