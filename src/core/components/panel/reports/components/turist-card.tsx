import { AppTooltip } from "@/core/components/ui"
import { FileSpreadsheet, FileText } from "lucide-react"

export interface TuristReportCardProps {
  month: string
  year: number
  linkSheet: string
  linkPdf: string
}

export const TuristReportCard = ({month,year,linkSheet,linkPdf}:TuristReportCardProps) => {
  return (
    <div className="w-40 border rounded-lg shadow py-3 px-5 flex flex-col items-center gap-3">
      <p className="capitalize">
        <span className="text-neutral-600 font-bold">{month} </span> 
        - 
        <span className="text-neutral-800"> {year}</span> 
      </p>
      <div className="flex justify-between w-full">
        <AppTooltip
          content="Ver hoja de cálculo"
          children={<a href={linkSheet} target="_blank"><FileSpreadsheet/></a>}
        />
        <AppTooltip
          content="Ver hoja Pdf"
          children={<a href={linkPdf} target="_blank"><FileText/></a>}
        />
      </div>
    </div>
  )
}
