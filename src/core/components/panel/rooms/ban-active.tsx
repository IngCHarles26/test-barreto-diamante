import { AppDialog, AppSelect, AppTooltip, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Tooltip, TooltipContent, TooltipTrigger } from "@/core/components/ui"
import { Trash2 } from "lucide-react"


const data = [
  'Mesa de madera para 4 personas',
  'Silla de oficina ergonómica',
  'Lámpara de pie LED regulable',
]

export const BanActive = () => {
  return (
    <AppDialog
      tooltip="Dar de Baja"
      tooltipChild={<Trash2 className='size-6 p-1'/>}
      title="Dar de baja a Activo"
      description="Selecciona el activo que quieras dar de baja"
      buttonText="Dar de Baja"
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
