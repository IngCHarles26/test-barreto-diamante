'use client'

import { useState } from "react";
import { Button, Calendar, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui";
import clsx from "clsx";
import { Cake, ChevronDownIcon } from "lucide-react";

export const ClientForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex gap-2">
        <SelectInput label="Tipo de documento" options={['DNI','Carnet Extranjeria','Pasaporte','Otros']} defaultOption='DNI' className="w-2/5"/>
        <Input type="text" placeholder="N Documento" onChange={()=>{}} value={'71799919'} className="w-3/5"/>
      </div>
      <div className="flex gap-2">
        <Input type='text' placeholder="Nombre" onChange={()=>{}} value={'Carlos Rodrigo'}/>
        <Input type='text' placeholder="Apellido" onChange={()=>{}} value={'Condori Llerena'}/>
      </div>
      <div className="flex gap-2">
        <Input type="text" placeholder="Direccion" onChange={()=>{}} value={'Los Zafiros 301'} className="w-2/3"/>
        <SelectInput label="Pais Origen" options={['PERU','CHILE','ARGENTINA']} defaultOption='PERU' className="w-1/3"/>
      </div>
      <div className="flex gap-2">
        <CalendarInput dateIn={new Date()}/>
        <SelectInput label="Estado Civil" options={['SOLTERO','CASADO']} defaultOption='SOLTERO' className="w-1/2"/>
      </div>
    </form>
  )
}




interface SelectInputProps {
  label: string
  options: string[]
  defaultOption: string
  className?: string
}
const SelectInput = ({label,options,defaultOption,className}:SelectInputProps) => {

  return(
    <Select value={defaultOption} >
      <SelectTrigger id={`select_${label}`} className={clsx("w-full",className)}>
        <SelectValue />
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

interface CalendarInputProps {
  dateIn: Date
}
export const CalendarInput = ({dateIn}:CalendarInputProps) => { //! hacer persistente el select de mes y año

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(dateIn)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' id='date' className='w-1/2 justify-between font-normal'>
          <span className='flex items-center'>
            <Cake className='mr-2' />
            {date ? date.toLocaleDateString() : 'Pick a date'}
          </span>
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
        <Calendar
          mode='single'
          captionLayout="dropdown"
          selected={date}
          onSelect={date => {
            setDate(date)
            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}