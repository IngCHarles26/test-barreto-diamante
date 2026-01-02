'use client'

import { ChevronFirstIcon, ChevronLastIcon, ChevronLeftIcon, ChevronRightIcon,type LucideIcon } from 'lucide-react'
import { AppSelect, Pagination, PaginationContent, PaginationItem } from '..';
import { AppTooltip } from './app-tooltip';


interface AppPaginationProps {
  length: number;
  defaultPage?: string
}


export const AppPagination = ({length,defaultPage}:AppPaginationProps) => {
  const pages = Array.from({ length }, (_, i) => `${i + 1}`);

  return (
    <Pagination>
      <PaginationContent>

        <PagItem Icon={ChevronFirstIcon} tooltip='Primera pagina'/>
        <PagItem Icon={ChevronLeftIcon} tooltip='Pagina anterior'/>

        <PaginationItem>
          <AppSelect name='pagination' placeholder='Pagina' 
            values={pages} 
            options={pages.map(el => `Pagina ${el}`)} />
        </PaginationItem>

        <PagItem Icon={ChevronRightIcon} tooltip='Siguiente pagina'/>
        <PagItem Icon={ChevronLastIcon} tooltip='Pagina final'/>

      </PaginationContent>
    </Pagination>
  )
}

interface PagItemProps {
  Icon: LucideIcon
  tooltip: string
}

const PagItem = ({Icon,tooltip}:PagItemProps) => {
  return (
    <PaginationItem>
      <AppTooltip content={tooltip} side='bottom'>
        <div  className='p-2 rounded-full hover:bg-muted'>
          <Icon className='size-4 ' />
        </div>
      </AppTooltip>
    </PaginationItem>
  )
}
