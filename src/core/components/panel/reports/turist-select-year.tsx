import { AppSelect } from "../../ui"

export const SelectTuristYear = () => {
  return (
    <AppSelect
      name="turist-year"
      options={['2023','2024']}
      placeholder="Selecciona el año"
      values={['2023','2024']}
      className="w-48"
    />
  )
}
