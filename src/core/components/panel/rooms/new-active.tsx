import { CirclePlus } from 'lucide-react'
import { AppDialog, AppSelect, Input, Label } from '../../ui'

export const NewRoomActive = () => {
  return (
    <AppDialog
      tooltip="Nuevo Activo"
      tooltipChild={<CirclePlus className='size-6 p-1'/>}
      title="Agregar Nuevo Activo"
      description="Selecciona el tipo de activo e ingresa su descripcion"
      buttonText="Agregar"
    >
      <div className='flex gap-2 justify-between '>
        <Label className='mr-2'>Tipo:</Label>
        <AppSelect
          name="Activos"
          placeholder="Selecciona el activo"
          options={['mesa','silla','lampara']}
          values={['0','1','2']}
          className='w-2/3'
        />
      </div>
      <Label className='mr-2 mt-5'>Descripcion:</Label>
      <Input className="w-full" placeholder='Ej. Silla de cahova color marron con blanco'/>

    </AppDialog>
  )
}
