'use client'

import { useState } from 'react'
import { AppSelect, Button, Input, Label, Switch } from '../../ui'
import { SwitchMonthYear } from './components'
import { name_months } from '@/core/seed'

export const StayStatsInputs = () => {
  const [checked, setChecked] = useState<boolean>(true)
  
  return (
    <div className='w-full flex gap-4 lg:items-center flex-col lg:flex-row mb-4'>
      <p className='text-slate-700'>Buscar por: </p>

      <div className='flex items-center gap-2'>
        <div className='relative inline-grid h-8 grid-cols-[1fr_1fr] items-center text-sm font-medium'>
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
            className='peer data-[state=unchecked]:bg-input/50 absolute inset-0 h-[inherit] w-auto rounded-sm [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:rounded-sm [&_span]:transition-transform [&_span]:duration-200 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full [&_span]:data-[state=checked]:rtl:-translate-x-8.75'
            aria-label='Square switch with permanent text indicators'
          />
          <span className='pointer-events-none relative ml-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full peer-data-[state=unchecked]:rtl:-translate-x-full'>
            <span className='text-[10px] font-medium uppercase'>Mes</span>
          </span>
          <span className='peer-data-[state=checked]:text-background pointer-events-none relative mr-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:-translate-x-full peer-data-[state=unchecked]:invisible peer-data-[state=checked]:rtl:translate-x-full'>
            <span className='text-[10px] font-medium uppercase'>Año</span>
          </span>
        </div>

        <div className='flex gap-2'>
          <Label htmlFor='year-stays'>Ingresa Año: </Label>
          <Input id='year-stays' className='w-20' placeholder='Ej: 2025'/>
        </div>

        {!checked &&         
          <div className='flex gap-2 ml-2'>
            <Label htmlFor='month-stays'>Ingresa Mes: </Label>
            <AppSelect
              name='month-stays'
              options={name_months}
              values={['01','02','03','04','05','06','07','08','09','10','11','12']}
              placeholder='Mes'
            />
          </div>}
        
        <Button className='ml-4'>Buscar</Button>
      </div>
    </div>
  )
}
