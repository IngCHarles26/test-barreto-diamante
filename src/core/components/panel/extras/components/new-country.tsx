import { AppDialog, AppSelect } from "@/core/components/ui";
import { CirclePlus } from "lucide-react";

const countries = [ 'Venezuela', 'USA', 'Chile' ];
const values = [ 've', 'us', 'cl' ];

export const NewCountry = () => {
  return (
    <AppDialog
      tooltip="Nuevo"
      tooltipChild={<CirclePlus className='size-6 p-1'/>}
      title="Agregar nuevo Pais"
      description="Selecciona el pais del cual desesa agregar todos sus departamentos al sistema"
      buttonText="Guardar"
    >

      <AppSelect name="countries" options={countries} values={values} placeholder="Pais" />
      
    </AppDialog>
  )
}
