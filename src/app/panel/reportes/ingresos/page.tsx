import { AppTitle, StaysBarChart, StayStatsInputs } from "@/core/components";

const dataRooms = [
  { name: '105', cant: 4200 },
  { name: '110', cant: 3000 },
  { name: '215', cant: 2000 },
  { name: '220', cant: 5000 },
  { name: '305', cant: 500  },
]

const dataMonth = [
  { name: 'Enero', cant: 4200 },
  { name: 'Febrero', cant: 3000 },
  { name: 'Marzo', cant: 2000 },
  { name: 'Abril', cant: 2780 },
  { name: 'Mayo', cant: 1890 },
  { name: 'Junio', cant: 2390 },
  { name: 'Julio', cant: 3490 },
]

export default function ExtraCitiesPage() {
  return (
    <div className="h-full w-full flex flex-col">
      <AppTitle title="Estadisticas de Ingresos" />

      <div className="h-full w-full lg:p-4 flex flex-col">
        <StayStatsInputs/>

        <div className="h-full flex items-center flex-col">
          <div className="flex gap-5">
            <p className="text-lg text-slate-700">Total de ingresos: s/<span className="font-bold">5000.00</span></p>
          </div>
          
          <div className="h-full w-full flex flex-col lg:flex-row gap-6 flex-wrap justify-center items-center ">
            <StaysBarChart data={dataRooms} title="Ingresos por habitaciones"/>
            <StaysBarChart data={dataMonth} title="Ingresos por mes"/>
          </div>

        </div>
      </div>
    </div>
  );
}