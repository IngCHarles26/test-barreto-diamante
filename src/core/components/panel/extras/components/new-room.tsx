import { AppDialog, Input, Label } from "@/core/components/ui"
import { CirclePlus } from "lucide-react"

export const NewTypeRoom = () => {
  return (
    <AppDialog
      tooltip="Nuevo"
      tooltipChild={<CirclePlus className='size-6 p-1'/>}
      title="Agregar Tipo de Habitacion"
      description="Escribe el tipo de habitacion y puedes escribir el precio referencial"
      buttonText="Guardar"
    >
      <div className='flex gap-2 items-center justify-between'>
        <Label className='mr-2'>Nombre:</Label>
        <Input placeholder='Ej: Matrimonial' className="w-2/3"/>
      </div>
      <div className='flex gap-2 items-center justify-between'>
        <Label className='mr-2'>Precio:</Label>
        <Input placeholder='Ej: S/ 200' className="w-2/3" />
      </div>

    </AppDialog>
  )
}
