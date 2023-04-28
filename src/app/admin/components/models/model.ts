export interface TicketsNotResolved{
    idBug: number,
    cliente: string,
    fecha: Date, 
    proyecto: string,
    descripcion: string
}

export interface TicketsUnManaged{
    idBug: number,
    cliente: string,
    fecha: Date,
    proyecto: string,
    descripcion: string
}

export interface TicketsNotAcepted{
    idBug: number,
    cliente: string,
    fecha: Date,
    proyecto: string,
    descripcion: string
}

export interface TicketsNoGestionados{
    idBug: number,
    cliente: string,
    fecha: Date,
    proyecto: string,
    descripcion: string
}

export interface Tickets8DaysUnManaged{
    idBug: number,
    cliente: string,
    fecha: Date,
    proyecto: string,
    descripcion: string
}

export interface TicketsManagedToday{
    idBug: number,
    cliente: string,
    fecha: Date,
    proyecto: string,
    descripcion: string
}

export interface Clientes{
    nombre: string
}

export interface message{
    fecha: Date,
    message: string
  }

export interface Login{
    UserName: string,
    Password: string
}
  
export interface Usuarios{
    id: number,
    userName: string
}

export interface Proyects{
    idProyecto: number,
    nombre: string
}

export interface AddTicket{
    idProyecto: number,
    idCliente: number,
    resumen: string,
    descripcion: string
}