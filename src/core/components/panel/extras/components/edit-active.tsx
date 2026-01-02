import { AppDialog, AppSelect, Input, Label } from "@/core/components/ui"
import { Pen } from "lucide-react";


const tipos = [ 'Mesa', 'Cama', 'Ropero' ];


export const EditActiveType = () => {
  return (
    <AppDialog
      tooltip="Editar"
      tooltipChild={<Pen className='size-6 p-1'/>}
      title="Editar Tipo de Activo"
      description="Selecciona el tipo de activo y puedes escribir el nuevo nombre"
      buttonText="Guardar"
    >
      <AppSelect
        name="Tipos de Activos"
        placeholder="Selecciona el tipo de activo"
        options={tipos}
        values={tipos}
      />

      <div className='flex gap-2 items-center justify-between'>
        <Label className='mr-2'>Nuevo Nombre: </Label>
        <Input placeholder='Ej: Mesa Larga' className="w-2/3"/>
      </div>
    </AppDialog>
  )
}
