'use client'

import clsx from "clsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from ".."

interface AppSelectProps {
  name: string
  placeholder: string
  options: string[]
  values: string[]
  className?: string
}


export const AppSelect = ({placeholder,options,name,values,className}:AppSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={clsx('w-full',className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option,ix) => (
          <SelectItem key={name+ix} value={values[ix]} className="capitalize">
            {option}
          </SelectItem>))}
      </SelectContent>
    </Select>
  )
}
