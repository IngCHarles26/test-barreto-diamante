import { TuristReportCard, TuristReportCardProps } from "./components"


interface TuristGridProps {
  data: TuristReportCardProps[]
}

export const TuristGrid = ({data}:TuristGridProps) => {//! TODO:  Agregar las props del array de meses y enlaces
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-full lg:w-140 flex flex-wrap gap-4">
        {data.map((report,ix) => 
          <TuristReportCard
            key={ix}
            {...report}
          />
        )}
      </div>
    </div>
  )
}
