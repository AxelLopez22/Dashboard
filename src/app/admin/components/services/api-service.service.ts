import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url='https://localhost:7100/api/'

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
}
