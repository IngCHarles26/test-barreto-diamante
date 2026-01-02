'use client'

import { Card } from '@/core/components/ui'


export const InfoClient = () => {
  return (
    <div className="p-2 lg:p-5 flex flex-col gap-3 ">
      <ItemContent label='DNI' content='71799919'/>
      <ItemContent label='Pais Origen' content='PERU'/>
      <ItemContent label='Nombres' content='Carlos Rodrigo'/>
      <ItemContent label='Apellidos' content='Condori Llerena'/>
      <ItemContent label='Edad' content='55 años'/>
      <ItemContent label='Direccion' content='Los Zafiros 301'/>
      <ItemContent label='Estado Civil' content='Soltero'/>
      <ItemContent label='Calificacion' content='4.6 ★ de 10 estadias'/>
      <div>
        <p className='font-bold'>Motivo de Baneo</p>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maxime deserunt nostrum facere quidem. Fugiat architecto mollitia unde nobis. Perferendis ex nesciunt temporibus aspernatur quisquam magni ipsam expedita eum soluta?</p>
      </div>
    </div>
  )
}



interface ItemContentProps {
  label: string;
  content: string;
}
const ItemContent = ({label,content}:ItemContentProps) => {
  return (
    <div className='w-full flex flex-col md:flex-row gap-2 justify-between'>
      <h1 className='text-md text-foreground font-bold'>{label}:</h1>
      <p className='ml-4 lg:ml-0 text-accent-foreground'>{content}</p>
    </div>
  )
}