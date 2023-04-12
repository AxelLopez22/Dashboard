import { Component, OnInit } from '@angular/core';
import { TicketsNotAcepted } from '../../models/model';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-modalno-aceptados',
  templateUrl: './modalno-aceptados.component.html',
  styleUrls: ['./modalno-aceptados.component.scss']
})
export class ModalnoAceptadosComponent implements OnInit{
  ticketsNotAcepted: TicketsNotAcepted[] = [];

  constructor(private httpService: ApiServiceService){}

  ngOnInit(): void {
    this.GetTicketsNotAcepted();
  }

  GetTicketsNotAcepted(){
    this.httpService.ObtenerTicketsStatusNotAcepted().subscribe((data: any) => {
      for(let item of data.data){
        this.ticketsNotAcepted.push({
          idBug: item.idBug,
          cliente: item.cliente,
          fecha: item.fecha,
          proyecto: item.proyecto,
          descripcion: item.descripcion
        });
      }
    });
  }
}
