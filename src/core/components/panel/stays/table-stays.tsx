import { Table, TableBody, TableHead, TableHeader, TableRow } from "../../ui";
import { TableRowStays } from "./componentes";


const headsTable = [
  'fecha','hora','dias','precio','puntuacion','habitacion','Atendido Por','clientes','comentarios'
]

const tableContent = [
  {date: '2024-01-15', time: '14:30', days: 3, price: 150, rating: 4, room: '101', clients: ['Juan Perez', 'Maria Gomez'], comments: 'Excelente estadia',user:'Luis Martinez'},
  {date: '2024-02-20', time: '16:00', days: 2, price: 100, rating: 5, room: '102', clients: ['Carlos Ruiz'], comments: 'Muy buen servicio',user:'Ana Lopez'},
  {date: '2024-03-05', time: '12:00', days: 5, price: 250, rating: 3, room: '103', clients: ['Ana Torres', 'Luis Fernandez'], comments: 'Habitacion limpia pero ruidosa',user:'Pedro Sanchez'},
]


export const TableStays = () => {
  return (
    <div className='overflow-hidden rounded-md border w-full'>
      <Table>
        <TableHeader className="w-full">
          <TableRow className="bg-muted/50 text-md">
            {headsTable.map( (value,ix) => (
              <TableHead key={`${value} ${ix}`} className="text-center font-bold capitalize">
                {value}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableContent.map( (row,ixRow) => (
            <TableRowStays key={'rowStays'+ixRow} {...row}/>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
