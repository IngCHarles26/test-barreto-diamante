import { AppDialog, AppSelect } from "@/core/components/ui"
import { UserCheck } from "lucide-react"

const users = [
  { id: 1, name: 'Juan Perez'},
  { id: 2, name: 'Maria Gomez'},
  { id: 3, name: 'Carlos Sanchez'},
]


export const EnableUser = () => {
  return (
    <AppDialog
      tooltip="Hahbilitar Usuario"
      tooltipChild={<UserCheck className='size-6 p-1'/>}
      title="Habilitar Usuario"
      description="Selecciona el usuario que deseas habilitar"
      buttonText="Habilitar"
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
