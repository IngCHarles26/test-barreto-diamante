import { Tabs, TabsList, TabsTrigger } from "../../ui"
import { FloorMap, FloorMapProps } from "./components"



interface RoomMapProps {
  values: FloorMapProps[]
}


export const RoomMap = ({values}:RoomMapProps) => {
  return (
    <div className="w-full lg:w-1/2 max-w-250 h-full bg-red-500m grid place-content-center">
      <Tabs className="" defaultValue="1">

        {values.map((floor,ix) => (
          <FloorMap key={'floorMap'+ix} {...floor} />
        ))}
        
        <TabsList className="mx-auto mt-2" >
          {values.map((floor,ix) => (
            <TabsTrigger key={'tabTrigger'+ix} value={floor.value}>
              Piso {floor.value}
            </TabsTrigger>
          ))}
        </TabsList>
        
      </Tabs>
    </div>
  )
}




