'use client'
import { RoomMap } from "@/core/components";
import { redirect } from "next/navigation";


export default function Page() {

  redirect('/panel/extras/usuarios')
  
  return (
    <div className="w-full h-full flex justify-center flex-col items-center gap-2 lg:gap-5 lg:flex-row">
      <RoomMap/>
      
      <div className="w-full lg:w-1/2 max-w-250 h-full bg-gray-200 min-h-150"
        onClick={()=> redirect('/panel/extras/usuarios')}></div>

    </div>
  )
}
