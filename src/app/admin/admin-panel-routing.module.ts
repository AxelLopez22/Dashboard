import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard/admin',pathMatch:'full'},
  {path:'', component:AdminComponent, children:[
    {path: 'inicio', component: InicioComponent},
    {path: 'addTicket', component: AddTicketComponent}
    // {path: 'tickets', component: TicketsComponent},
    // {path: 'ticketsPendientes', component: TicketsPendientesComponent},
    // {path: 'ticketsRevisados', component: TicketsRevisadosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
