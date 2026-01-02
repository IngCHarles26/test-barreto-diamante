import { AppTitle, SelectTuristYear, TuristGrid, TuristNewReport } from "@/core/components";


const data = [
  { month: "enero", year: 2025,
    linkSheet: "https://docs.google.com/spreadsheets/d/1K7KCS-gz8DdJjNqqv31uh7oRhTq3F5DTRSm3TenEPaM/edit?usp=sharing",
    linkPdf: "https://drive.google.com/file/d/1VKjHnqv7aQ-w-_sRlPoZfbqvBjpxoX22/view?usp=sharing"},
  { month: "febrero", year: 2025,
    linkSheet: "https://docs.google.com/spreadsheets/d/1K7KCS-gz8DdJjNqqv31uh7oRhTq3F5DTRSm3TenEPaM/edit?usp=sharing",
    linkPdf: "https://drive.google.com/file/d/1VKjHnqv7aQ-w-_sRlPoZfbqvBjpxoX22/view?usp=sharing"},
  { month: "marzo", year: 2025,
    linkSheet: "https://docs.google.com/spreadsheets/d/1K7KCS-gz8DdJjNqqv31uh7oRhTq3F5DTRSm3TenEPaM/edit?usp=sharing",
    linkPdf: "https://drive.google.com/file/d/1VKjHnqv7aQ-w-_sRlPoZfbqvBjpxoX22/view?usp=sharing"},
  { month: "abril", year: 2025,
    linkSheet: "https://docs.google.com/spreadsheets/d/1K7KCS-gz8DdJjNqqv31uh7oRhTq3F5DTRSm3TenEPaM/edit?usp=sharing",
    linkPdf: "https://drive.google.com/file/d/1VKjHnqv7aQ-w-_sRlPoZfbqvBjpxoX22/view?usp=sharing"},
  { month: "mayo", year: 2025,
    linkSheet: "https://docs.google.com/spreadsheets/d/1K7KCS-gz8DdJjNqqv31uh7oRhTq3F5DTRSm3TenEPaM/edit?usp=sharing",
    linkPdf: "https://drive.google.com/file/d/1VKjHnqv7aQ-w-_sRlPoZfbqvBjpxoX22/view?usp=sharing"},
  { month: "junio", year: 2025,
    linkSheet: "https://docs.google.com/spreadsheets/d/1K7KCS-gz8DdJjNqqv31uh7oRhTq3F5DTRSm3TenEPaM/edit?usp=sharing",
    linkPdf: "https://drive.google.com/file/d/1VKjHnqv7aQ-w-_sRlPoZfbqvBjpxoX22/view?usp=sharing"},
]


export default function ReportTouristPage() {
  return (
    <div className="h-full w-full flex flex-col">
      <AppTitle title="Registro de reportes" />

      <div className="h-full w-full p-4 flex flex-col">
        <div className="flex justify-between">
          <div className="flex justify-start items-center gap-3">
            <h2 className="font-semibold">Selecciona el año: </h2>
            <SelectTuristYear/>
          </div>
          <TuristNewReport year={2026} month="Enero"/>
        </div>

        <TuristGrid data={data}/>
      </div>
    </div>
  );
}