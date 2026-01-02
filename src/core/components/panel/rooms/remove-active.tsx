import { AppDialog, AppSelect } from "@/core/components/ui"
import { CircleMinus } from "lucide-react"


const data = [
  'Mesa de madera para 4 personas',
  'Silla de oficina ergonómica',
  'Lámpara de pie LED regulable',
]

export const RemoveActive = () => {
  return (
    <AppDialog
      tooltip="Remover"
      tooltipChild={<CircleMinus className='size-6 p-1'/>}
      title="Remover Activo"
      description="Selecciona el activo que quieras retirar de la habitacion"
      buttonText="Retirar"
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
