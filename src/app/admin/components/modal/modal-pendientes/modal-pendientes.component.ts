import { Component, OnInit } from '@angular/core';
import { TicketsNotResolved } from '../../models/model';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-modal-pendientes',
  templateUrl: './modal-pendientes.component.html',
  styleUrls: ['./modal-pendientes.component.scss']
})
export class ModalPendientesComponent implements OnInit {
  ticketsNotResolved: TicketsNotResolved[] = [];

  constructor(private httpService: ApiServiceService){}

  ngOnInit(): void {
    this.GetTicketsNotResolved();
  }

  GetTicketsNotResolved(){
    this.httpService.obtenerTicketsStatusNotResolved().subscribe((data:any) => {
      for(let item of data.data){
        this.ticketsNotResolved.push({
          idBug: item.idBug,
          cliente: item.cliente,
          fecha: item.fecha,
          proyecto: item.proyecto,
          descripcion: item.descripcion
        });
      }
      
    })
  }
}
