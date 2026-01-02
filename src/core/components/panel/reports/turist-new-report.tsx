import { CirclePlus } from "lucide-react"
import { AppSelect, AppTooltip, Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../ui"


interface TuristNewReportProps {
  year: number
  month: string
}

export const TuristNewReport = ({year,month}:TuristNewReportProps) => {
  return (
    <Button variant='secondary'>
      <CirclePlus/>
      Nuevo Reporte 
      <span className="uppercase font-bold">{month}</span>
    </Button>
  )
}
