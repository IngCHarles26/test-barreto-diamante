'use client'

import { useState } from 'react'

import { CircleCheckIcon } from 'lucide-react'
import { Button, Calendar, Card, CardContent, CardFooter, CardHeader, CardTitle, Input, Label, ScrollArea } from '../../ui'



export const CalendarReservation = () => {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 20))
  const [selectedTime, setSelectedTime] = useState<string | null>('10:00')

  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const totalMinutes = i * 30
    const hour = Math.floor(totalMinutes / 60)
    const minute = totalMinutes % 60

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
  })

  const bookedDates = Array.from({ length: 3 }, (_, i) => new Date(2025, 5, 17 + i))

  return (
    <div>
      <Card className='gap-0 p-0 w-full'>
        <CardHeader className='flex h-max justify-center border-b !p-4'>
          <CardTitle>Selecciona la fecha de la reservacion</CardTitle>
        </CardHeader>
        <CardContent className='relative p-0 md:pr-48'>
          <div className='p-6'>
            <Calendar
              mode='single'
              selected={date}
              onSelect={setDate}
              defaultMonth={date}
              disabled={bookedDates}
              showOutsideDays={false}
              modifiers={{
                booked: bookedDates
              }}
              modifiersClassNames={{
                booked: '[&>button]:line-through opacity-100'
              }}
              className='bg-transparent p-0 [--cell-size:--spacing(10)]'
              formatters={{
                formatWeekdayName: date => {
                  return date.toLocaleString('en-US', { weekday: 'short' })
                }
              }}
            />
          </div>
          <div className='inset-y-0 right-0 flex w-full flex-col gap-4 border-t max-md:h-60 md:absolute md:w-48 md:border-t-0 md:border-l'>
            <ScrollArea className='h-full'>
              <div className='flex flex-col gap-2 p-6'>
                {timeSlots.map(time => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    onClick={() => setSelectedTime(time)}
                    className='w-full shadow-none'
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-4 border-t px-6 py-5 '>
          <div className='w-full flex justify-between'>
            <Label className='w-1/3'>Separado Por:</Label>
            <Label className='w-2/3'>Julio Condori</Label>
          </div>
          <div className='w-full flex justify-between'>
            <Label className='w-1/3'>Cliente:</Label>
            <Input className='w-2/3' placeholder='Ej: Juan Perez'/>
          </div>
          <div className='w-full flex justify-between'>
            <Label className='w-1/3'>Adelanto:</Label>
            <Input className='w-2/3' placeholder='S/ 20'/>
          </div>
          <Button disabled={!date || !selectedTime} className='w-full md:ml-auto md:w-auto' variant='outline'>
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

