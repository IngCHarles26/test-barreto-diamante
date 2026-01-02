'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "..";

interface AppTableProps {
  name: string
  header: string[];
  data: string[][];
  align: ('left' | 'center' | 'right')[];
}

export const AppTable = ({name,header,data,align}:AppTableProps) => {
  return (
    <div className='overflow-hidden rounded-md border'>
      <Table>
        <TableHeader className="w-full">
          <TableRow className="bg-muted/50 text-lg">
            {header.map( (value,ix) => (
              <TableHead key={`${name} ${value} ${ix}`} className="text-center font-bold">
                {value}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map( (row,ixRow) => (
            <TableRow key={`${name} ${ixRow}`}>
              {row.map( (cell,ixCell) => (
                <TableCell key={`${name} ${ixRow} ${ixCell}`} className={`text-${align[ixCell]}`}>
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
