import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketsPendientesComponent } from './components/tickets-chart/tickets-pendientes.component';
import { TicketsRevisadosComponent } from './components/tickets-pieChart/tickets-revisados.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard/admin',pathMatch:'full'},
  {path:'', component:AdminComponent, children:[
    {path: 'inicio', component: InicioComponent},
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
