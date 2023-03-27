import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ApiServiceService } from '../services/api-service.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Component({
  selector: 'app-tickets-revisados',
  templateUrl: './tickets-revisados.component.html',
  styleUrls: ['./tickets-revisados.component.scss']
})
export class TicketsRevisadosComponent implements OnInit{
  public chart: any;
  ticketsNotResolved!: number;
  ticketsUnManaged!: number;
  ticketsResolved!: number;
  private connection: HubConnection;


  constructor(){
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7100/hub/notify')
      .build();

    this.connection.on('TicketsResolved', count => {
      this.ticketsResolved = count;
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved);
    });

    this.connection.on('TicketsNotResolved', count => {
      this.ticketsNotResolved = count;
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved);
    });

    this.connection.on('TicketsUnManaged', count => {
      this.ticketsUnManaged = count;
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved);
    });
  }

  ngOnInit(): void {
    this.connection.start()
      .then(_ => {
        console.log('Connection Started');
      }).catch(error => {
        return console.error(error);
      });
  }

  createChart(value1: number, value2:number, value3:number){
    if(this.ticketsNotResolved !== undefined && this.ticketsResolved !== undefined && this.ticketsUnManaged !== undefined){
      this.chart = new Chart("pie-chart", {
        type: 'pie',
        data: {
          labels: ['Resueltos', 'Sin gestionar', 'Sin Resolver'],
            datasets: [{
              label: 'Cantidad',
              data: [value1, value2, value3],
              backgroundColor: ['#5499C7', '#922B21 ', '#D35400'],
              hoverOffset: 4
            }]
        },
        options: {
          aspectRatio: 1.8,
          responsive: true
        }
      });
    } 
  }
}
