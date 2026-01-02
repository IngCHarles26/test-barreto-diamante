import { AppDialog, Button, Input, Label, Popover, PopoverContent, PopoverTrigger, RadioGroup, RadioGroupItem } from '@/core/components/ui'
import { CircleMinus } from 'lucide-react'

export const SearchClientByDni = () => {
  return (
    <AppDialog
      tooltipChild={<p className='px-2 py-1 border rounded bg-gray-100 shadow cursor-pointer hover:bg'>Documento</p>}
      title="Buscar por Documento"
      description="Selecciona el tipo de documento y el numero para realizar la busqueda"
      buttonText="Buscar"
     >
      <div className='flex justify-between'>
        <RadioGroup className='flex gap-3' >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="dni" id="r1" defaultChecked />
            <Label htmlFor="r1">DNI</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="passport" id="r2" />
            <Label htmlFor="r2">Pasaporte</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="CE" id="r3" />
            <Label htmlFor="r3">Carnet Extranjeria</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="others" id="r4" />
            <Label htmlFor="r4">Otros..</Label>
          </div>
        </RadioGroup>
      </div>
      <Input placeholder='Numero de Documento' className='mt-4'/>
    </AppDialog>
  )
}
