import { AppSelect, AppTable } from "../../ui"
import { NewExtraItem } from "../extras"
import { AddActive } from "./add-active"
import { RemoveActive } from "./remove-active"


const data = [
  ['mesa','Mesa de madera para 4 personas','2024-01-15','15-02-2025'],
  ['silla','Silla de oficina ergonómica','2024-02-20','15-02-2025'],
  ['lampara','Lámpara de pie LED regulable','2024-03-05','15-02-2025'],
]

export const ListActivesRoom = () => {
  return (
    <div className="flex flex-col gap-4">
      <AppTable
        name="Tabla de activos"
        header={['Tipo','Descripcion','Creado','Puesto']}
        align={['center','center','center','center']}
        data={data}
      />

      <div className="flex justify-between">
        <RemoveActive/>

        <AddActive/>
      </div>

    </div>
  )
}
