import { AppDialog, TableCell, TableRow } from '@/core/components/ui';
import { ListChevronsUpDown, MessageCircleWarning } from 'lucide-react';

interface TableRowStaysProps {
  date: string
  time: string
  days: number
  price: number
  rating: number
  room: string
  user: string
  clients: string[]
  comments: string
}

export const TableRowStays = ({date,time,days,price,rating,room,clients,comments,user}:TableRowStaysProps) => {
  return (
    <TableRow >
      <TableCell className='text-center'>
        {date}
      </TableCell>
      <TableCell className='text-center'>
        {time}
      </TableCell>
      <TableCell className='text-center'>
        {days}
      </TableCell>
      <TableCell className='text-center'>
        S/ {price}
      </TableCell>
      <TableCell className='text-center'>
        {'★'.repeat(rating)}
      </TableCell>
      <TableCell className='text-center'>
        {room}
      </TableCell>
      <TableCell className='text-center'>
        {user}
      </TableCell>
      <TableCell className='text-center'>
        <AppDialog
          tooltip='Ocupantes'
          title='Ocupantes'
          description='Relacion de ocupantes'
          tooltipChild={<ListChevronsUpDown className='size-6'/>}
        >
          {clients.map( (client,ix) => (
            <p key={`client ${ix}`} className='text-sm'>- {client}</p>
          ))}
        </AppDialog>
      </TableCell>
      <TableCell className='text-center'>
        <AppDialog
          side='left'
          tooltip='Comentarios'
          title='Comentarios'
          description={comments}
          tooltipChild={<MessageCircleWarning className='size-6'/>}
        />
      </TableCell>
    </TableRow>
  )
}
