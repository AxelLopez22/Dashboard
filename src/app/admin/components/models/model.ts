export interface TicketsNotResolved{
    idBug: number,
    cliente: string,
    proyecto: string,
    descripcion: string
}

export interface TicketsUnManaged{
    idBug: number,
    cliente: string,
    proyecto: string,
    descripcion: string
}

export interface Clientes{
    nombre: string
}