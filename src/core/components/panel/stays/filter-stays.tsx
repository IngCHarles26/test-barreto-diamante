import { AppSelect, Button } from '../../ui'

export const FilterStays = () => {
  return (
    <div className='flex justify-center items-center gap-3 w-full max-w-120'>
      <p className='text-gray-600'>Filtros: </p>

      <AppSelect
        name='Room'
        options={['101', '102', '103', '104']}
        values={['101','102','103','104']}
        placeholder='Habitacion'
      />

      <AppSelect
        name='Month'
        options={['enero', 'febrero', 'marzo', 'abril']}
        values={['enero', 'febrero', 'marzo', 'abril']}
        placeholder='Mes'
      />

      <AppSelect
        name='Year'
        options={['2022', '2023', '2024', '2025']}
        values={['2022', '2023', '2024', '2025']}
        placeholder='Año'
      />

      <Button variant='secondary'>Buscar</Button>
    </div>
  )
}
