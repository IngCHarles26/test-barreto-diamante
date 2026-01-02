import { AppDialog, AppSelect, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/core/components/ui"
import { Pen } from "lucide-react";


const habitaciones = [ 'Matrimonial', 'Simple', 'Personal' ];


export const EditTypeRoom = () => {
  return (
    <AppDialog
      tooltip="Editar"
      tooltipChild={<Pen className='size-6 p-1'/>}
      title="Editar Tipo de Habitacion"
      description="Selecciona el tipo de habitacion y puedes escribir el nuevo precio o el nuevo nombre"
      buttonText="Guardar"
    >
      <AppSelect
        name="Tipos de habitacioes"
        placeholder="Selecciona la habitacion"
        options={habitaciones}
        values={habitaciones}
      />
      
      <div className='flex gap-2 items-center justify-between'>
        <Label className='mr-2'>Nuevo Nombre: </Label>
        <Input placeholder='Ej: Matrimonial' className="w-2/3" />
      </div>
      <div className='flex gap-2 items-center justify-between'>
        <Label className='mr-2'>Nuevo Precio:</Label>
        <Input placeholder='Ej: S/ 200' className="w-2/3" />
      </div>

    </AppDialog>
  )
}


