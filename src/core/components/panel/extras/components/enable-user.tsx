import { AppDialog, AppSelect} from "@/core/components/ui"
import { UserRoundX } from "lucide-react"

const users = [
  { id: 1, name: 'Juan Perez'},
  { id: 2, name: 'Maria Gomez'},
  { id: 3, name: 'Carlos Sanchez'},
]


export const DisableUser = () => {
  return (
    <AppDialog
      tooltip="Deshabilitar Usuario"
      tooltipChild={<UserRoundX className='size-6 p-1'/>}
      title="Deshabilitar Usuario"
      description="Selecciona el usuario que deseas deshabilitar"
      buttonText="Deshabilitar"
    >
      <AppSelect
        name="Usuarios"
        placeholder="Selecciona el usuario"
        options={users.map( user => user.name )}
        values={users.map( user => `${user.id}` )}
      />
     
    </AppDialog>  
  )
}
