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
  tickets8DayUnManaged!: number;

  constructor(private httpService: ApiServiceService){
    this.httpService.ticketsResolved().subscribe((data:any) => {
      this.ticketsResolved = data.data
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted, this.tickets8DayUnManaged);
    });

    this.httpService.ticketsNotResolved().subscribe((data:any) => {
      this.ticketsNotResolved = data.data
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted, this.tickets8DayUnManaged);
    });

    this.httpService.ticketsUnManaged().subscribe((data:any) => {
      this.ticketsUnManaged = data.data
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted, this.tickets8DayUnManaged);
    });

    this.httpService.ticketsNotAcepted().subscribe((data:any) => {
      this.ticketsNotAcepted = data.data;
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted, this.tickets8DayUnManaged)
    });

    this.httpService.tickets8DaysUnManaged().subscribe((data:any) => {
      this.tickets8DayUnManaged = data.data;
      this.createChart(this.ticketsResolved, this.ticketsUnManaged, this.ticketsNotResolved, this.ticketsNotAcepted, this.tickets8DayUnManaged)
    });
  }

  ngOnInit(): void {

  }

  createChart(value1: number, value2:number, value3:number, value4:number, value5: number){
    if(this.ticketsNotResolved !== undefined && this.ticketsResolved !== undefined && this.ticketsUnManaged !== undefined
      && this.ticketsNotAcepted !== undefined && this.tickets8DayUnManaged !== undefined){
      this.chart = new Chart("pie-chart", {
        type: 'pie',
        data: {
          labels: ['Nuevos', 'Sin gestionar', 'Sin Resolver', 'No Aceptados', '8 dias son gestionar'],
            datasets: [{
              label: 'Cantidad',
              data: [value1, value2, value3, value4, value5],
              backgroundColor: ['#5499C7', '#922B21 ', '#D35400', '#D4AC0D', '#117A65'],
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
