import { cn } from "@/core/lib/utils"
import { Button, Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, Input } from "../ui"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Accede a tu cuenta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Ingrese su usuario y contraseña para acceder
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Usuario</FieldLabel>
          <Input id="email" type="text" placeholder="perico_palotes" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Contraseña</FieldLabel>
          </div>
          <Input id="password" type="password" required  placeholder="********"/>
        </Field>
        <Field>
          <Button type="submit">Ingresa</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
