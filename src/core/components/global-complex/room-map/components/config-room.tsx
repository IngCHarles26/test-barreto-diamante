'use client'

import clsx from "clsx"

export interface ConfigRoomProps {
  roomNumber: number
  top: number
  left: number
  active: boolean
  action?: () => void
}


export const ConfigRoom = ({roomNumber,top,left,active,action}:ConfigRoomProps) => {
  return (
    <div 
      onClick={() => action}
      style={{top:`${top}%`,left:`${left}%`}}
      className={clsx('children-room-map px-2.5 py-1 rounded',
        active 
          ? 'bg-green-400 cursor-pointer hover:opacity-90' 
          : 'bg-gray-400 cursor-not-allowed')}
    >
      <span>{roomNumber}</span>
    </div>
  )
}
