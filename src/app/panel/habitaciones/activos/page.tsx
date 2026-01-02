import { AppTable, AppTitle, BanActive, EditRoomActive, NewRoomActive } from "@/core/components";

const data = [
  ['mesa','Mesa de madera para 4 personas'],
  ['silla','Silla de oficina ergonómica'],
  ['lampara','Lámpara de pie LED regulable'],
]

export default function RoomActivesPage() {
  return (
   <div className="h-full flex flex-col">
      <AppTitle title="Control de Objetos Inactivos" />

      <div className="h-full flex items-center justify-center">
        <div className="table-extras-size max-w-120">
          <AppTable name="Activos en habitaciones inactivos" 
            align={['center','center']}
            header={['Tipo','Descripcion']} 
            data={ data } />

          <div className="w-full flex justify-between mt-4">
            <BanActive/>
            
            <EditRoomActive/>

            <NewRoomActive/>
          </div>
        </div>
      </div>
    </div>
  );
}