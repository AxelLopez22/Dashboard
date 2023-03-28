import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Clientes } from '../models/model';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-tickets-pendientes',
  templateUrl: './tickets-pendientes.component.html',
  styleUrls: ['./tickets-pendientes.component.scss']
})
export class TicketsPendientesComponent implements OnInit{
  public chart: any;
  cliente: any[] = [];
  constructor(private httpService: ApiServiceService){
    this.httpService.ObtenerClientes().subscribe((data:any) => {
      for(let item of data.data){
        this.cliente.push(item.nombre);
      }
    });
  }

  ngOnInit(): void {
    this.obtenerClientes();
    this.createChart();
  }

  obtenerClientes(){
    
  }

  createChart(){

    console.log(this.cliente);
    
    if(this.cliente !== undefined || this.cliente !== null){
      this.chart = new Chart("MyChart", {
        type: 'line', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: this.cliente, 
           datasets: [
            {
              label: "Cant. Tickets",
              data: [8,12,8,9,4,7,10,5,6,7,6,7,8,10,15,5,5,7,9,11],
              backgroundColor: '#1F618D',
              borderColor: '#A9CCE3',
              pointRadius: 5,
              pointHoverRadius: 6
            }
          ]
        },
        options: {
          aspectRatio:1.8,
          responsive: true
        }
        
      });
    }
  }
}
