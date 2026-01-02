import { AppTable, AppTitle, DisableUser, EditActiveType, EditExtraItem, NewActiveType, NewExtraItem, NewUser } from "@/core/components";

const data = [ 'Mesa', 'Cama', 'Ropero' ];


export default function ExtraUserPage() {
  const tableData = data.map( el => [el] );
  
  return (
    <div className="h-full flex flex-col">
      <AppTitle title="Control de Tipos de Activos" />

      <div className="flex-1 flex items-center justify-center">
        <div className="table-extras-size lg:max-w-64">
          <AppTable name="tipos de activos" 
            align={['left']}
            header={['Tipos de Activos']} 
            data={ tableData} />
  
          <div className="w-full flex justify-between mt-4 items-center ">
            <EditActiveType/>

            <NewActiveType/>
          </div>
        </div>
      </div>
    </div>
  );
}