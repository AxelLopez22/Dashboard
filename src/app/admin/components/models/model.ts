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
  