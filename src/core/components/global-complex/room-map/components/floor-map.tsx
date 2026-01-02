import Image from "next/image"
import { TabsContent } from "@/core/components/ui"
import { ConfigRoom, ConfigRoomProps } from "./config-room"
import { RegisterRoom, RegisterRoomProps } from "./register-room"

export interface FloorMapProps {
  src: string
  value: string
  configValues?: ConfigRoomProps[]
  registerValues?: RegisterRoomProps[]
}

export const FloorMap = ({value,configValues,registerValues,src}:FloorMapProps) => {
  return (
    <TabsContent value={value} className="w-full h-full flex justify-center items-center">
      <div className="relative aspect-2/3 h-165 lg:h-180 2xl:h-240">
        <Image 
          src={src}
          alt={`imagen fondo piso ${value}`} 
          fill 
          className='object-contain image-room-map'
        />
        {configValues &&
          configValues.map((room,ix) => (
            <ConfigRoom key={'configRoom'+ix} {...room}/>
        ))}

        {registerValues &&
          registerValues.map((room,ix) => (
            <RegisterRoom key={'configRoom'+ix} {...room}/>
        ))}
      </div>
    </TabsContent>
  )
}
