import { Banknote } from "lucide-react"
import { CalendarInput } from "../../global-simple"
import { AppDialog, AppSelect, AppTable, Button, Input, Label } from "../../ui"

export const RegisterStay = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-4">
      {/* inputs globales */}
      <p className="text-gray-800">Datos Generales: </p>
      <div className="w-full grid grid-cols-3 gap-3">
        <div className="flex gap-2 items-center justify-between">
          <Label>Incio:</Label>
          <Input placeholder="15/04/26"/>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Label>Hora:</Label>
          <Input placeholder="15:00"/>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Label>Motivo:</Label>
          <AppSelect
            name="Motivo"
            options={['trabajo','placer','visita familiar']}
            placeholder="Motivo"
            values={['trabajo','placer','visita']}
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Label>Precio:</Label>
          <Input placeholder="S/ 50.00"/>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Label>Origen:</Label>
          <AppSelect
            name="Motivo"
            options={['Piura, PE','Tacna, Pe','Juliaca, PE']}
            placeholder="Ciudad Origen"
            values={['trabajo','placer','visita']}
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Label>Placa Vehiculo:</Label>
          <Input placeholder=" ***-*** "/>
        </div>


      </div>

      <hr/>
      <div className="w-full flex justify-between items-center" >
        <div className="flex gap-2">
          <AppSelect
            name="Motivo"
            options={['dni','carnet','pasaporte']}
            placeholder="TIpo Documento"
            values={['trabajo','placer','visita']}
          />
          <Input placeholder="Nro Documento"/>
        </div>
        <Button>Buscar</Button>
      </div>


      <p className="text-gray-800">Ocupantes: </p>
      <AppTable
        name="Clientes Encontrados"
        header={['Inicio','Nombres','Documento','Edad','Fin']}
        data={[
          ['15/04/26','Carlos Condori','71799919','30 años','20/04/26'],
          ['10/03/26','Ana Perez','72345678','25 años',''],
          ['01/01/26','Luis Ramirez','70987654','40 años',''],
        ]}
        align={['center','center','center','center','center']}
      />

      <p className="text-gray-800">Pagos: </p>
      <div className="flex justify-between">
        <AppTable
          name="Clientes Encontrados"
          header={['15/02','16/02','17/02','18/02','19/02']}
          data={[
            ['✅','✅','❌','❌','❌'],
          ]}
          align={['center','center','center','center','center']}
        />
        <AppDialog
          tooltip="Guardar Pago"
          side="left"
          tooltipChild={<Banknote className="size-6"/>}
          title="Registrar Pago"
          description="Confirme que desea registrar el pago de la estadia del cliente seleccionado."
          buttonText="Confirmar Pago"
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-between">
              <Label>Monto:</Label>
              <Input placeholder="s/ 50.00"/>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <Label>Medio Pago:</Label>
              <AppSelect
                name="Motivo"
                options={['Efectovo','Billetera Digital','Transferencia']}
                placeholder="Metodo Pago"
                values={['trabajo','placer','visita']}
              />
            </div>
            <div className="flex gap-2 items-center justify-between">
              <Label>Quien Pago:</Label>
              <AppSelect
                name="Motivo"
                options={['Carlos C.','Ana P.','Luis R.']}
                placeholder="Cliente"
                values={['trabajo','placer','visita']}
              />
            </div>
            <div className="flex gap-2 items-center justify-between">
              <Label>N. Operacion:</Label>
              <Input placeholder="******"/>
            </div>
          </div>
        </AppDialog>
      </div>
      <Button variant='destructive' className="mx-auto mt-7">Finalizar</Button>
    </div>
  )
}
