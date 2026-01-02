import { Button, Card, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/core/components/ui'
import clsx from 'clsx'

export const StaysClient = () => {
  return (
    <div className="w-full flex flex-col gap-2 border-t pt-2 items-center">
      <SelectInput label='Año' options={['2025','2024','2023']} className='w-1/3'/>
      
      <div className='flex gap-2 overflow-y-auto p-1 max-w-[40dvw] min-w-md'>
        <StayClient date='12/02/2024' room={101} rate='★★★★★'/>
        <StayClient date='12/02/2024' room={102} rate='★★★'/>
        <StayClient date='12/02/2024' room={103} rate='★★★★★'/>
        <StayClient date='12/02/2024' room={104} rate='★★'/>
        <StayClient date='12/02/2024' room={105} rate='★★★★★'/>
        <StayClient date='12/02/2024' room={106} rate='★★★'/>
        <StayClient date='12/02/2024' room={107} rate='★★★★'/>
        <StayClient date='12/02/2024' room={108} rate='★★★★'/>
        <StayClient date='12/02/2024' room={109} rate='★★★★★'/>
        <StayClient date='12/02/2024' room={110} rate='★★★★'/>
        <StayClient date='12/02/2024' room={111} rate='★★★★'/>
        <StayClient date='12/02/2024' room={112} rate='★★★★'/>
        <StayClient date='12/02/2024' room={113} rate='★★★★'/>
      </div>

      <div className='p-2 w-full grid grid-cols-2 flex-col gap-2 lg:gap-x-5 lg:gap-y-2'>
          <ItemContent label='Habitacion' content='105'/>
          <ItemContent label='Score' content='★★★★'/>
          <ItemContent label='Inicio' content='15/10/2025 14:34'/>
          <ItemContent label='Termino' content='15/10/2025 14:34'/>
          <ItemContent label='Cantidad Dias' content='10'/>
          <ItemContent label='Costo Diario' content='s/ 55'/>
          <ItemContent label='Motivo' content='Trabajo'/>
          <ItemContent label='Origen' content='Loreto'/>
          <ItemContent label='Atendido por' content='Carlos C.'/>
          <ItemContent label='Vehiculo' content='-'/>
          <div className='col-span-2'>
            <p className='text-md text-foreground font-bold' >Aconpañantes</p>
            <CompanionInfo dni='71799919' name='Carlos Rodrigo'/>
            <CompanionInfo dni='71799920' name='Ana Maria'/>
            <CompanionInfo dni='71799921' name='Luis Alberto'/>
          </div>
          <div className='col-span-2'>
            <p className='text-md text-foreground font-bold' >Comentarios</p>
            <p className='ml-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas harum nihil suscipit, inventore nesciunt consequuntur ipsam deleniti non aspernatur quibusdam unde excepturi tempore doloremque atque eligendi? Alias nulla vitae sequi.</p>
          </div>
      </div>

    </div>
  )
}


interface SelectInputProps {
  label: string
  options: string[]
  className?: string
}
const SelectInput = ({label,options,className}:SelectInputProps) => {

  return(
    <Select>
      <SelectTrigger id={`select_${label}`} className={clsx("w-full",className)}>
        <SelectValue placeholder='Ingresa el año: ' />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup >
          <SelectLabel>{label}</SelectLabel>
          {options.map((option,ix)=>(
            <SelectItem key={option+ix} value={option}>{option}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


interface StayClientProps {
  date: string;
  room: number
  rate: string;
}

const StayClient = ({date,room,rate}:StayClientProps) => {

  return (
    <div className='flex flex-col gap-1 border p-2 rounded-md items-center'>
      <p>{date}</p>
      <p>Hab: {room}</p>
      <p>{rate}</p>
    </div>
  )
}

interface ItemContentProps {
  label: string;
  content: string;
}
const ItemContent = ({label,content}:ItemContentProps) => {
  return (
    <div className='w-full flex  gap-2 justify-between'>
      <h1 className='text-md text-foreground font-bold'>{label}:</h1>
      <p className='text-accent-foreground'>{content}</p>
    </div>
  )
}

interface CompanionInfoProps {
  name: string;
  dni: string;
}

const CompanionInfo = ({dni,name}:CompanionInfoProps) => {

  return (
    <p className='text-accent-foreground ml-2'>
      <span className='font-semibold'>Nombre: </span>
      {name}
      <span className='font-semibold ml-2'>DNI:</span>
      {dni}
    </p>
  )
}