import { Pen } from 'lucide-react'
import { AppDialog, AppSelect, Input, Label } from '../../ui'

const data = [
  'Mesa de madera para 4 personas',
  'Silla de oficina ergonómica',
  'Lámpara de pie LED regulable',
]


export const EditRoomActive = () => {
  return (
    <AppDialog
      tooltip="Editar Descripcion"
      tooltipChild={<Pen className='size-6 p-1'/>}
      title="Editar Descripcion de Activo"
      description="Selecciona el activo y escribe la nueva descripcion"
      buttonText="Guardar"
    >
      <AppSelect
        name="Activos"
        placeholder="Selecciona el activo"
        options={data}
        values={data}
      />

      <Label className='mt-4'>Nueva descripcion:</Label>
      <Input className="w-full" placeholder='Ej: Silla de madera marron' />
    </AppDialog>  
  )
}
