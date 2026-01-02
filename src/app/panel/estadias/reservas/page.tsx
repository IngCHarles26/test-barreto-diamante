import { AppTitle, RoomMap } from "@/core/components";
import { FloorMapProps } from "@/core/components/global-complex/room-map/components";
import { CalendarReservation } from "@/core/components/panel/stays";

const roomMapData:FloorMapProps[] = [
  {
    src: '/plano_prueba.jpg',
    value: '1',
    registerValues: [
      {roomNumber: 101, active: true, top: 20, left: 28, status: 'free', roomType: 'Matrimonial', price: 150},
      {roomNumber: 102, active: true, top: 33, left: 63, status: 'busy', roomType: 'Doble', price: 200},
      {roomNumber: 103, active: false, top: 58, left: 57, status: 'separate', roomType: 'Suite', price: 300},
      {roomNumber: 104, active: true, top: 77, left: 29, status: 'free', roomType: 'Matrimonial', price: 150},
      {roomNumber: 105, active: true, top: 80, left: 67, status: 'separate', roomType: 'Doble', price: 200},
    ],
  },
  {
    src: '/plano_prueba.jpg',
    value: '2',
    registerValues: [
      {roomNumber: 201, active: true, top: 20, left: 28, status: 'free', roomType: 'Suite', price: 300},
      {roomNumber: 202, active: true, top: 33, left: 63, status: 'busy', roomType: 'Matrimonial', price: 150},
      {roomNumber: 203, active: true, top: 58, left: 57, status: 'free', roomType: 'Doble', price: 200},
      {roomNumber: 204, active: true, top: 77, left: 29, status: 'separate', roomType: 'Suite', price: 300},
      {roomNumber: 205, active: true, top: 80, left: 67, status: 'busy', roomType: 'Matrimonial', price: 150},
    ],
  },
]



export default function SeparateStayPage() {
  return (
    <div className="h-full flex flex-col">
      <AppTitle title="Reservaciones" />

      <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center gap-4">
        <RoomMap 
          values={roomMapData}
        />

        <CalendarReservation/>
      </div>
    </div>
  );
}