import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddTicket } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url='http://dashboardapi.us-east-1.elasticbeanstalk.com/api/'
  //url='https://localhost:7100/api/';

  constructor(private http: HttpClient) { }


  ObtenerClientes(){
    return this.http.get(this.url + 'Chart/clientes');
  }

  obtenerTicketsStatusNotResolved(){
    return this.http.get(this.url + 'TicketStatus/notResolved');
  }

  obtenerTicketsStatusUnManaged(){
    return this.http.get(this.url + 'TicketStatus/TicketsUnManaged');
  }

  ObtenerTicketsStatusNotAcepted(){
    return this.http.get(this.url + 'TicketStatus/TicketsNotAcepted');
  }

  ObtenerTicketsStatusNoGestionados(){
    return this.http.get(this.url + 'TicketStatus/noGestionados');
  }

  ObtenerTickets8DaysUnManaged(){
    return this.http.get(this.url + 'TicketStatus/tickets8DaysUnManaged');
  }

  ObtenerTicketsManagedToday(){
    return this.http.get(this.url + 'TicketStatus/ticketsResolvedToday');
  }

  //Diagrama pastel
  ticketsResolved(){
    return this.http.get(this.url + 'Chart/ticketsNuevos');
  }

  ticketsNotResolved(){
    return this.http.get(this.url + 'Chart/ticketsNotResolved');
  }

  ticketsUnManaged(){
    return this.http.get(this.url + 'Chart/ticketsUnManaged');
  }

  ticketsNotAcepted(){
    return this.http.get(this.url + 'Chart/ticketsNotAcepted');
  }

  tickets8DaysUnManaged(){
    return this.http.get(this.url + 'Chart/tickets8DaysNotResolved');
  }

  //Formulario para la creacion de tickets

  getUsers(){
    return this.http.get(this.url + 'AddTicket/listarUsuarios')
  }

  getProyects(idUsuario: number){
    return this.http.get(this.url + `AddTicket/listarProyectos?idUsuario=${idUsuario}`);
  }

  addTicket(ticket: AddTicket){
    return this.http.post(this.url + 'AddTicket/AgregarTicket', ticket);
  }
}
