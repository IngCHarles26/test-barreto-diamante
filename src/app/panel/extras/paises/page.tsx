import { AppTable, AppTitle, NewCountry, NewExtraItem } from "@/core/components";

const countries = [ 'Venezuela', 'USA', 'Chile' ];

export default function ExtraCitiesPage() {
  const tableCountries = countries.map( el => [el] );

  return (
    <div className="h-full flex flex-col">
      <AppTitle title="Control de Paises" />

      <div className="flex-1 flex items-center justify-center">
        <div className="table-extras-size lg:max-w-64">
          <AppTable name="Paises" 
          align={['left']}
          header={['Pais']} 
          data={ tableCountries} />

        <div className="w-full flex justify-end mt-4">
          
          <NewCountry/>

        </div>
        </div>
      </div>
    </div>
  );
}