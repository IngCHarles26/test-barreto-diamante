import { AppDialog, AppSelect } from "@/core/components/ui"
import { CirclePlus } from "lucide-react"


const data = [
  'Mesa de madera para 4 personas',
  'Silla de oficina ergonómica',
  'Lámpara de pie LED regulable',
]

export const AddActive = () => {
  return (
    <AppDialog
      tooltip="Agregar"
      tooltipChild={<CirclePlus className='size-6 p-1'/>}
      title="Agregar Activo"
      description="Selecciona el activo que quieras agregar a la habitacion"
      buttonText="Agregar"
    >
      <AppSelect
        name="Activos"
        placeholder="Selecciona el activo"
        options={data}
        values={data}
      />

    </AppDialog>

  )
}
