import { AppTitle, StaysPieChart, StayStatsInputs } from "@/core/components";

const dataEdad = [
  { name: '0-18', value: 400 },
  { name: '18-25', value: 300 },
  { name: '25-30', value: 300 },
  { name: '30-40', value: 200 },
];

const dataMotivo = [
  { name: 'Vacaciones', value: 500 },
  { name: 'Negocios', value: 300 },
  { name: 'Visita Familiar', value: 200 },
  { name: 'Otros', value: 100 },
]

const dataPais = [
  { name: 'Argentina', value: 600 },
  { name: 'Brasil', value: 400 },
  { name: 'Chile', value: 300 },
  { name: 'Uruguay', value: 200 },
]

const dataDepartamento = [
  { name: 'Tacna', value: 700 },
  { name: 'Moquegua', value: 500 },
  { name: 'Arequipa', value: 400 },
  { name: 'Lima', value: 300 },
]

const dataConVehiculo = [
  { name: 'Con Vehículo', value: 800 },
  { name: 'Sin Vehículo', value: 600 },
]

export default function ReportStaysPage() {
  return (
    <div className="h-full w-full flex flex-col">
      <AppTitle title="Estadisticas de Estadias" />

      <div className="h-full w-full lg:p-4 flex flex-col">
        <StayStatsInputs/>

        <div className="h-full flex items-center flex-col">
          <div className="flex gap-5">
            <p className="text-lg text-slate-700">N Estadias: <span className="font-bold">24</span></p>
            <p className="text-lg text-slate-700">N Clientes: <span className="font-bold">255</span></p>
          </div>
          
          <div className="h-full flex flex-col lg:flex-row gap-6 flex-wrap justify-center items-center ">
            <StaysPieChart data={dataEdad} title="Estadias por rango de edad"/>
            <StaysPieChart data={dataMotivo} title="Motivos de estadias"/>
            <StaysPieChart data={dataPais} title="Paises de origen"/>
            <StaysPieChart data={dataDepartamento} title="Origen de departamentos"/>
            <StaysPieChart data={dataConVehiculo} title="Con o sin vehiculo"/>
          </div>

        </div>
      </div>
    </div>
  );
}