import { AppDialog, AppSelect, Input, Label } from "@/core/components/ui"
import { Settings } from "lucide-react"


interface EditRoomProps {
  room:string
}

export const EditRoom = ({room}:EditRoomProps) => {
  return (
    <AppDialog
      tooltip="Editar"
      tooltipChild={<Settings className='size-6 p-1'/>}
      title={`Editar la habitacion ${room}`}
      description="Ingresa el nuevo tipo de habitacion y/o el nuevo costo referencial"
      buttonText="Guardar Cambios"
      side="left"
    >
      <div className='flex gap-2 justify-between items-center'>
        <Label>Nuevo Tipo:</Label>
        <AppSelect
          name="Tipo de Habitacion"
          placeholder="Selecciona el tipo"
          options={['matrimonial','simple','personal']}
          values={['0','1','2']}
          className='w-1/2'
        />
      </div>
      <div className='flex gap-2 justify-between items-center'>
        <Label>Nuevo Precio:</Label>
        <Input className="w-1/2" placeholder='Ej. S/ 50.00'/>
      </div>
    </AppDialog>
  )
}
