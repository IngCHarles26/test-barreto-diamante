import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/core/components/ui'


const data = [
  {
    typeDoc: 'DNI',
    numberDoc: '12345678',
    fullName: 'Perez, Juan',
    nationality: 'Arequipa, PE',
    days: 20,
    score: 4,
  },
  {
    typeDoc: 'DNI',
    numberDoc: '87654321',
    fullName: 'García, María',
    nationality: 'Lima, PE',
    days: 5,
    score: 5,
  },
  {
    typeDoc: 'Pasaporte',
    numberDoc: 'P123456',
    fullName: 'Smith, John',
    nationality: 'New York, US',
    days: 12,
    score: 3,
  },
  {
    typeDoc: 'CE',
    numberDoc: '001234567',
    fullName: 'Rodriguez, Carlos',
    nationality: 'Buenos Aires, AR',
    days: 30,
    score: 2,
  },
  {
    typeDoc: 'DNI',
    numberDoc: '45678912',
    fullName: 'López, Ana',
    nationality: 'Cusco, PE',
    days: 3,
    score: 5,
  },
  {
    typeDoc: 'Pasaporte',
    numberDoc: 'B987654',
    fullName: 'Silva, Roberto',
    nationality: 'São Paulo, BR',
    days: 15,
    score: 4,
  },
  {
    typeDoc: 'DNI',
    numberDoc: '23456789',
    fullName: 'Mendoza, Carmen',
    nationality: 'Trujillo, PE',
    days: 8,
    score: 3,
  },
  {
    typeDoc: 'CE',
    numberDoc: '009876543',
    fullName: 'Gonzalez, Diego',
    nationality: 'Santiago, CL',
    days: 45,
    score: 1,
  },
  {
    typeDoc: 'Pasaporte',
    numberDoc: 'E456789',
    fullName: 'Johnson, Emma',
    nationality: 'London, UK',
    days: 7,
    score: 5,
  },
  {
    typeDoc: 'DNI',
    numberDoc: '78912345',
    fullName: 'Torres, Luis',
    nationality: 'Piura, PE',
    days: 2,
    score: 4,
  },
]


export const ClientsTable = () => {
  return (
    <Table className='w-full border'>
      <TableCaption>Resultados de Búsqueda</TableCaption>
      <TableHeader>
        <TableRow className='uppercase bg-sidebar-ring'>
          <TableHead className='text-center'>Tipo Doc</TableHead>
          <TableHead className='text-center'>N° Doc</TableHead>
          <TableHead className='text-center'>Apellidos, Nombres</TableHead>
          <TableHead className='text-center'>Oriundo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(({days, fullName, nationality, numberDoc, typeDoc, score}, ix) =>
          <TableRow key={numberDoc + ix}>
            <TableCell className='text-center'>{typeDoc}</TableCell>
            <TableCell className='text-center'>{numberDoc}</TableCell>
            <TableCell className='text-center'>{fullName}</TableCell>
            <TableCell className='text-center'>{nationality}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}