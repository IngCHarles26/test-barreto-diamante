import { AppDialog, AppTooltip, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, Tooltip, TooltipContent, TooltipTrigger } from "@/core/components/ui"
import { Ban } from "lucide-react"


interface DisableRoomProps {
  room:string
}

export const DisableRoom = ({room}:DisableRoomProps) => {
  return (
    <AppDialog
      tooltip="Desactivar"
      tooltipChild={<Ban className='size-6 p-1'/>}
      title={`Desactivar Habitacion ${room}`}
      description="Al desactivar la habitacion, todos los activos dentor de la habitacion pasan a estar disponibles y la habitacion ya no podra ser asignada a futuras estadias"
      buttonText="Desactivar"
      side="left"
    >

    </AppDialog>
  )
}
