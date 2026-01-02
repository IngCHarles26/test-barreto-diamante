import { AppDialog, Input, Label } from "@/core/components/ui"
import { CirclePlus } from "lucide-react"

export const NewUser = () => {
  return (
    <AppDialog
      tooltip="Nuevo Usuario"
      tooltipChild={<CirclePlus className='size-6 p-1'/>}
      title="Crear nuevo usuario"
      description="Escribe los siguientes datos para poder crear un nuevo usuario"
      buttonText="Guardar"
    >
      <div className='flex gap-2 justify-between items-center '>
        <Label className='w-1/3'>Nombre de Usuario:</Label>
        <Input className="w-2/3" placeholder='Ej: Cahecova' />
      </div>
      <div className='flex gap-2 justify-between items-center '>
        <Label className='w-1/3'>Contraseña:</Label>
        <Input className="w-2/3" placeholder='*******'/>
      </div>
      <div className='flex gap-2 justify-between items-center '>
        <Label className='w-1/3'>Confirmar Contraseña:</Label>
        <Input className="w-2/3" placeholder='*******' />
      </div>
      <div className='flex gap-2 justify-between items-center '>
        <Label className='w-1/3'>Nombres:</Label>
        <Input className="w-2/3" placeholder='Ej: Carlos' />
      </div>
      <div className='flex gap-2 justify-between items-center '>
        <Label className='w-1/3'>Apellidos:</Label>
        <Input className="w-2/3" placeholder='Ej: Condori' />
      </div>
    </AppDialog>
  )
}
