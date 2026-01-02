import { ClientDetail, ClientSearch } from "@/core/components";

export default function ClientSearchPage() {
  return (
    <div className="flex flex-col lg:flex-row  items-center gap-4 w-full h-full">
      <ClientSearch/>
      <ClientDetail/>
    </div>
  );
}