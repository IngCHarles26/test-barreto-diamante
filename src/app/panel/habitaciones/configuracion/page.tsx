import { AppTitle, DisableRoom, EditRoom, RoomMap } from "@/core/components";
import { ListActivesRoom } from "@/core/components/panel/rooms/list-actives-room";

const roomMapData = [
  {
    src: '/plano_prueba.jpg',
    value: '1',
    configValues: [
      {roomNumber: 101, active: true, top: 20, left: 28},
      {roomNumber: 102, active: true, top: 33, left: 63},
      {roomNumber: 103, active: false, top: 58, left: 57},
      {roomNumber: 104, active: true, top: 77, left: 29},
      {roomNumber: 105, active: true, top: 80, left: 67},
    ],
  },
  {
    src: '/plano_prueba.jpg',
    value: '2',
    configValues: [
      {roomNumber: 201, active: false, top: 20, left: 28},
      {roomNumber: 202, active: true, top: 33, left: 63},
      {roomNumber: 203, active: true, top: 58, left: 57},
      {roomNumber: 204, active: true, top: 77, left: 29},
      {roomNumber: 205, active: false, top: 80, left: 67},
    ],
  },
]



export default function RoomActivesPage() {
  return (
   <div className="h-full flex flex-col">
      <AppTitle title="Configuracion de Habitaciones" />

      <div className="h-full flex flex-col lg:flex-row items-center justify-center">
        <RoomMap 
          values={roomMapData}
        />

        <div className="flex flex-col px-3 py-2 w-full max-w-130 gap-4">

          <div className="flex justify-between">
            <p className="text-neutral-700">Habitacion: <span className="font-bold text-lg">102</span></p>
            <DisableRoom room="102"/>
          </div>

          <div className="flex justify-between">
            <p className="text-neutral-700">Tipo: <span className="font-bold text-lg">Matrimonial</span></p>
            <p className="text-neutral-700">Precio: s/<span className="font-bold text-lg">150</span></p>
            <EditRoom room="102"/>
          </div>

          <ListActivesRoom/>

        </div>
      </div>
    </div>
  );
}