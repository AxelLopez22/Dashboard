import { Component, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ModalPendientesComponent } from '../modal/modal-pendientes/modal-pendientes.component';
import { ModalSinGestionarComponent } from '../modal/modal-sin-gestionar/modal-sin-gestionar.component';
import { ModalnoAceptadosComponent } from '../modal/modalno-aceptados/modalno-aceptados.component';
import { ModalNoGestionadosComponent } from '../modal/modal-no-gestionados/modal-no-gestionados.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  @ViewChild("modalTitle") modalTitle!: ElementRef;
  @ViewChild("container", {read: ViewContainerRef, static: true}) 
  container!: ViewContainerRef;

  ticketsNotResolved: number = 0;
  ticketsUnManaged: number = 0;
  ticketsNuevos: number = 0;
  ticketsNotAcepted: number = 0;
  private connection: HubConnection;
  
  constructor(){
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7100/hub/notify')
      .build();

    this.connection.on('TicketsNuevos', count => {
      this.ticketsNuevos = count;
    });

    this.connection.on('TicketsNotResolved', count => {
      this.ticketsNotResolved = count;
    });

    this.connection.on('TicketsUnManaged', count => {
      this.ticketsUnManaged = count;
    });

    this.connection.on('TicketsNotAcepted', count => {
      this.ticketsNotAcepted = count;
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

  openModal(name: string){
    this.container.clear();
    let componentType!: Type<any>;
    if(name === 'pendientes'){
      componentType = ModalPendientesComponent;
      this.modalTitle.nativeElement.textContent = 'Tickets sin Resolver';
    }
    if(name === 'sinGestionar'){
      componentType = ModalSinGestionarComponent;
      this.modalTitle.nativeElement.textContent = 'Tickets Nuevos';
    }
    if(name === 'notAcepted'){
      componentType = ModalnoAceptadosComponent;
      this.modalTitle.nativeElement.textContent = 'Tickets no Aceptados';
    }
    if(name === 'NoGestionados'){
      componentType = ModalNoGestionadosComponent;
      this.modalTitle.nativeElement.textContent = 'Tickets no Gestionados'
    }
    this.container.createComponent(componentType);
  }
}
