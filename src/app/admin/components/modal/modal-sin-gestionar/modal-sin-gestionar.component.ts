import { Component, OnInit } from '@angular/core';
import { TicketsUnManaged } from '../../models/model';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-modal-sin-gestionar',
  templateUrl: './modal-sin-gestionar.component.html',
  styleUrls: ['./modal-sin-gestionar.component.scss']
})
export class ModalSinGestionarComponent implements OnInit {
  ticketsUnManaged: TicketsUnManaged[] = [];

  constructor(private httpService: ApiServiceService){}

  ngOnInit(): void {
    this.GetTicketsUnManaged();
  }

  GetTicketsUnManaged(){
    this.httpService.obtenerTicketsStatusUnManaged().subscribe((data:any) => {
      for(let item of data.data){
        this.ticketsUnManaged.push({
          idBug: item.idBug,
          cliente: item.cliente,
          proyecto: item.proyecto,
          descripcion: item.descripcion
        });
      }
    });
  }
}
