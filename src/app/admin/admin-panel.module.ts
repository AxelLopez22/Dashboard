import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatMenuModule} from "@angular/material/menu";
import { AdminComponent } from './admin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketsPendientesComponent } from './components/tickets-chart/tickets-pendientes.component';
import { TicketsRevisadosComponent } from './components/tickets-pieChart/tickets-revisados.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalPendientesComponent } from './components/modal/modal-pendientes/modal-pendientes.component';
import { ModalSinGestionarComponent } from './components/modal/modal-sin-gestionar/modal-sin-gestionar.component';
import { ModalnoAceptadosComponent } from './components/modal/modalno-aceptados/modalno-aceptados.component';
import { ModalNoGestionadosComponent } from './components/modal/modal-no-gestionados/modal-no-gestionados.component';
import { Modal8DaysUnmanagedComponent } from './components/modal/modal8-days-unmanaged/modal8-days-unmanaged.component';
import { ManagedTodayComponent } from './components/modal/managed-today/managed-today.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SideNavComponent,
    InicioComponent,
    TicketsComponent,
    TicketsPendientesComponent,
    TicketsRevisadosComponent,
    ModalPendientesComponent,
    ModalSinGestionarComponent,
    ModalnoAceptadosComponent,
    ModalNoGestionadosComponent,
    Modal8DaysUnmanagedComponent,
    ManagedTodayComponent,
    AddTicketComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTooltipModule,
    FormsModule,
    MatChipsModule,
    DragDropModule,
    MatMenuModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [
  ], schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPanelModule { }
