import { AppDialog, Input, Label } from '@/core/components/ui'
import { CirclePlus } from 'lucide-react'

export const NewActiveType = () => {
  return (
    <AppDialog
      tooltip="Nuevo"
      tooltipChild={<CirclePlus className='size-6 p-1'/>}
      title="Nuevo Tipo de Activo"
      description="Escribe el nuevo tipo de activo que deseas agregar"
      buttonText="Guardar"
    >
      <div className='flex gap-2 items-center justify-between'>
        <Label className='mr-2'>Nombre:</Label>
        <Input placeholder='Ej: Lampara' className='w-2/3' />
      </div>
    </AppDialog>
  )
}
