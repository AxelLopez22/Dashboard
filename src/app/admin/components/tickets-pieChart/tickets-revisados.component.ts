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
  ticketsNotAcepted!: number;

  constructor(private httpService: ApiServiceService){
    this.httpService.ticketsResolved().subscribe((data:any) => {
      this.ticketsResolved = data.data
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted);
    });

    this.httpService.ticketsNotResolved().subscribe((data:any) => {
      this.ticketsNotResolved = data.data
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted);
    });

    this.httpService.ticketsUnManaged().subscribe((data:any) => {
      this.ticketsUnManaged = data.data
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted);
    });

    this.httpService.ticketsNotAcepted().subscribe((data:any) => {
      this.ticketsNotAcepted = data.data;
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted)
    });
  }

  ngOnInit(): void {

  }

  createChart(value1: number, value2:number, value3:number, value4:number){
    if(this.ticketsNotResolved !== undefined && this.ticketsResolved !== undefined && this.ticketsUnManaged !== undefined
      && this.ticketsNotAcepted !== undefined){
      this.chart = new Chart("pie-chart", {
        type: 'pie',
        data: {
          labels: ['Nuevos', 'Sin gestionar', 'Sin Resolver', 'No Aceptados'],
            datasets: [{
              label: 'Cantidad',
              data: [value1, value2, value3, value4],
              backgroundColor: ['#5499C7', '#922B21 ', '#D35400', '#212F3C'],
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
