import { Component, Inject, OnInit, ElementRef  } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit{
  displayedColumns: string[] = ['hora', 'mensaje']
  dataSource: message[] = []
  private connection: HubConnection;
  

  constructor(private toastr: ToastrService){
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7100/hub/notify')
      .build();

    this.connection.on('notify', message => {
      this.showAlert();
      this.message(message);
      //this.soundNotification();
    });
  }

  ngOnInit(): void {
    this.dataSource = JSON.parse(localStorage.getItem('notification') || '[]');

    this.connection.start()
      .then(_ => {
        console.log('Connection Started');
      }).catch(error => {
        return console.error(error);
      });
  }

  message(message: message){
    this.dataSource.push(message);
    this.addToLocalStorage(message);
  }

  addToLocalStorage(message: message){
    const currentArray = JSON.parse(localStorage.getItem('notification') || '[]');
    currentArray.push(message);
    localStorage.setItem('notification', JSON.stringify(currentArray));
  }

  showAlert(){
    this.toastr.info("Se ha agregado un nuevo ticket", "Notificacion",{
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      easing: 'ease-in',
      easeTime: 300
    });

    var sound = new Audio('assets/notificationSound/SD_ALERT_33.mp3');
    sound.load();
    sound.play()
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  }

}

interface message{
  fecha: Date,
  message: string
}