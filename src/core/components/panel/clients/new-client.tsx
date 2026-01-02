import { Button } from '@/core/components/ui'
import { ClientForm } from '../../global-simple'

export const NewClient = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h1 >Nuevo Cliente</h1>
      
      <ClientForm/>

      <Button variant='secondary' className='ml-auto'>Guardar Cliente</Button>
    </div>
  )
}
