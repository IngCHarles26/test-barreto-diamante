import { BanClient, EditClient, InfoClient, StaysClient } from "./components"



export const ClientDetail = () => {
  return (
    <div className="w-full lg:w-1/2 lg:h-full flex flex-col gap-4">
      <div className="flex items-center w-full justify-between">
        <EditClient/>

        <BanClient/>
      </div>

      <InfoClient/>

      <StaysClient/>

    </div>
  )
}
