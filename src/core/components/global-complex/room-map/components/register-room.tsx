'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from "@/core/components/ui"
import { DBRoomStatus } from "@/core/types"
import clsx from "clsx"

export interface RegisterRoomProps {
  top: number
  left: number
  active: boolean
  roomNumber: number
  status: DBRoomStatus
  roomType: string
  price: number
  action?: () => void
}

const styleStatus:Record<DBRoomStatus,string> = {
  free: 'bg-green-500',
  busy: 'bg-red-500',
  separate: 'bg-blue-500',
}

const spanishStatus:Record<DBRoomStatus,string> = {
  free: 'Libre',
  busy: 'Ocupado',
  separate: 'Reservado',
}

export const RegisterRoom = ({active,left,top,roomNumber,status,price,roomType,action}:RegisterRoomProps) => {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger 
          onClick={() => action}
          style={{top:`${top}%`,left:`${left}%`}}
          className={clsx('children-room-map px-2.5 py-1 rounded  ',
            !active 
              ? 'bg-gray-800 text-white hover:text-gray-200 cursor-not-allowed' 
              : `cursor-pointer hover:opacity-80 ${styleStatus[status]}`)}              
          >
            {roomNumber}
            <sup className='text-[60%]'> {roomType[0]}</sup>
        </TooltipTrigger>
        <TooltipContent>
          {active 
            ? <div className="text-center">              
                <p className='uppercase text-gray-200'>{roomType}</p> 
                <p className='text-neutral-400'>{spanishStatus[status]}</p> 
                <p className='text-green-500 text-xl'>S/ {price}.00</p>
              </div>
            : <p>No disponible</p>}
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
