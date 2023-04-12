import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  tickets: any[] = [];

  constructor(private httpService: ApiServiceService, private cdr: ChangeDetectorRef){
    this.httpService.ObtenerClientes().subscribe((data:any) => {
      for(let item of data.data){
        this.cliente.push(item.nombreClientes);
        this.tickets.push(item.cantidadTickets);
      }
      this.createChart();
    });
  }

  ngOnInit(): void {

  }

  actualizarComponente() {
    this.createChart();
    this.cdr.detectChanges();
  }

  createChart(){
    if((this.cliente !== undefined || this.cliente !== null) && (this.tickets !== undefined || this.tickets !== null)){
      this.chart = new Chart("MyChart", {
        type: 'line',
  
        data: {
          labels: this.cliente, 
           datasets: [
            {
              label: "Cant. Tickets",
              data: this.tickets,
              backgroundColor: '#A9CCE3',
              borderColor: '#1F618D',
              pointRadius: 5,  
              pointHoverRadius: 6,
              hoverBackgroundColor: '#1F618D',
              pointHoverBackgroundColor: '#1F618D',
              pointBorderColor: '#1F618D',
              pointHoverBorderColor: '#1F618D',
              tension: 0.3,
              fill: true,
              pointRotation: 20
            }
          ]
        },
        options: {
          aspectRatio:1.8,
          responsive: true,
          animations:{
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 0.5,
              to: 0,
              loop: true
            }
          },
          scales: {
            x: {
              min: 0,
              max: 20
            }
          }
        }
      });
    }
  }
}
