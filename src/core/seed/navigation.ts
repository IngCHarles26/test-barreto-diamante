import { Bed, CircleFadingPlus, Clipboard, ListOrdered, Users } from "lucide-react";


export const navOptions = [
  {
    title: 'Estadias',
    url: '/panel/estadias',
    isActive: true,
    Icon: Bed,
    items: [
      'registro',
      'reservas',
      'historial',
    ]
  },
  {
    title: 'Clientes',
    url: '/panel/clientes',
    Icon: Users ,
    isActive: false,
    items: [
      'buscar', // echo
      'nuevo', // echo
    ]
  },
  {
    title: 'Habitaciones',
    url: '/panel/habitaciones',
    Icon: ListOrdered ,
    isActive: false,
    items: [
      'configuracion',
      'activos',
    ]
  },
  {
    title: 'Reportes',
    url: '/panel/reportes',
    Icon: Clipboard ,
    isActive: false,
    items: [
      'turistas',
      'estadias',
      'ingresos',
    ]
  },
  {
    title: 'Extras',
    url: '/panel/extras',
    Icon: CircleFadingPlus ,
    isActive: false,
    items: [
      'usuarios',
      'paises',
      'tipos-activos',
      'tipos-habitaciones',
    ]
  },
]
