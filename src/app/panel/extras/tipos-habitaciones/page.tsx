import { AppTable, AppTitle, EditTypeRoom, NewTypeRoom } from "@/core/components";

const data = [ ['Matrimonial', 'S/ 200' ], ['Doble', 'S/ 300' ], ['Suite', 'S/ 500' ] ];

export default function ExtraUserPage() {
  return (
    <div className="h-full flex flex-col">
      <AppTitle title="Control de Tipos de Habitaciones" />

      <div className="h-full flex items-center justify-center">
        <div className="table-extras-size lg:max-w-96">
          <AppTable name="tipos de Habitaciones" 
              align={['center','right']}
              header={['Habitacion','Precio']} 
              data={ data} 
            />

          <div className="w-full flex justify-between mt-4">
            <EditTypeRoom/>

            <NewTypeRoom/>
          </div>
        </div>
      </div>
    </div>
  );
}