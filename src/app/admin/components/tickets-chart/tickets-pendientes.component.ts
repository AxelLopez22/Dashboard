import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tickets-pendientes',
  templateUrl: './tickets-pendientes.component.html',
  styleUrls: ['./tickets-pendientes.component.scss']
})
export class TicketsPendientesComponent implements OnInit{
  public chart: any;
  constructor(){}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Enero', 'Febrero', 'Marzo','Abril',
								 'Mayo', 'Junio', 'Julio','Agosto', 
                 'Septiembre', 'Octubre', 'Noviembre','Diciembre'], 
	       datasets: [
          {
            label: "Cant. Tickets",
            data: ['25','30', '22', '35', '40',
								 '30', '35', '41', '33', '27', '21', '30'],
            backgroundColor: '#1F618D',
            borderColor: '#A9CCE3',
            pointRadius: 5,
            pointHoverRadius: 6
          },
          // {
          //   label: "Profit",
          //   data: ['542', '542', '536', '327', '17',
					// 				 '0.00', '538', '541'],
          //   backgroundColor: 'limegreen'
          // }  
        ]
      },
      options: {
        aspectRatio:1.8,
        responsive: true
      }
      
    });
  }
}
