import { AppTable, AppTitle, DisableUser, EditExtraItem, EnableUser, NewExtraItem, NewUser } from "@/core/components";

const data = [
  ['jdoe', 'Admin', 'John Doe', '✅' ],
  ['jdoe', 'Admin', 'John Doe', '❌' ],
  ['jdoe', 'Admin', 'John Doe', '✅' ],
]

export default function ExtraUserPage() {
  return (
    <div className="h-full flex flex-col">
      <AppTitle title="Control de Usuarios" />

      <div className="h-full flex items-center justify-center">
        <div className="table-extras-size max-w-150">
          <AppTable name="tipos de activos" 
            align={['center','center','left','center']}
            header={['Usuario','Rol','Nombres','Activo']} 
            data={ data } />

          <div className="w-full flex justify-between mt-4">
            <DisableUser/>

            
            <EnableUser/>
            
            <NewUser/>

          </div>
        </div>
      </div>
    </div>
  );
}
