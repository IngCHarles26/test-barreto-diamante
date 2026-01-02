import { AppPagination, AppTitle } from "@/core/components";
import { FilterStays, TableStays } from "@/core/components/panel/stays";

export default function HistoryStayPage() {
  return (
   <div className="h-full flex flex-col">
      <AppTitle title="Historial de Estadias" />

      <div className="h-full w-full flex flex-col items-center justify-between">
        <div className="w-full flex flex-col gap-4 items-center">
          <FilterStays/>

          <TableStays/>
        </div>

        <AppPagination length={4}/>
      </div>
    </div>
  );
}