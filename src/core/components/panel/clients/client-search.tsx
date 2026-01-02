import { AppPagination } from '@/core/components/ui'
import { ClientsTable, SearchClientByDni, SearchClientByName } from './components'


export const ClientSearch = () => {
  return (
    <div className='w-full lg:h-full lg:w-1/2 flex flex-col justify-start gap-3 items-center'>
      <div className='flex gap-3 w-full items-center '>
        <p>Busqueda por : </p>
        <SearchClientByDni/>
        <SearchClientByName/>
      </div>
      <ClientsTable/>

    </div>
  )
}
