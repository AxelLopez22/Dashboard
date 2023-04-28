import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';
import { AddTicket, Proyects, Usuarios } from '../models/model';
import { ObserversModule } from '@angular/cdk/observers';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit{
  breakpoint!: number;
  loader = false;
  TicketsForm: FormGroup;
  listUser: Usuarios[] = [];
  listProyect: Proyects[] = [];
  filteredOptions!: Observable<Usuarios[]> | undefined;
  selectedValue!: string;
  selectedClient: any;

  constructor(private route: Router, private fb:FormBuilder, private http: ApiServiceService, private toastr: ToastrService){
    this.TicketsForm = this.fb.group({
      idCliente: new FormControl('', Validators.required),
      idProyecto: new FormControl('', Validators.required),
      Resumen: new FormControl('', Validators.required),
      Descripcion: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    //this.TicketsForm = this.initForm();
    this.filteredOptions = this.TicketsForm.get('idCliente')?.valueChanges.pipe(
      startWith(''),     
      map(value => {
        const userName = typeof value === 'string' ? value : value?.userName;
        return userName ? this._filter(userName as string) : this.listUser.slice();
      })
    )

    this.getClientes();
    //this.getProyects();
    this.breakpoint = (window.innerWidth <= 600) ? 3 : 6;
    
  }

  agregarTicket(){
    this.loader = true

    let user: Usuarios = this.TicketsForm.get('idCliente')?.value;

    let ticket: AddTicket = {
      idCliente: user.id,
      idProyecto: this.TicketsForm.get('idProyecto')?.value,
      resumen: this.TicketsForm.get('Resumen')?.value,
      descripcion: this.TicketsForm.get('Descripcion')?.value
    }
    
    this.http.addTicket(ticket).subscribe({
      next: (res: any) => {
        setTimeout(() => {
          this.loader = false;
          this.showAlert(res.message,res.data)
          this.route.navigate(['dashboard/admin/inicio']);
        }, 2000);
      },
      error: (err: any) => {
        console.log(err);
        this.loader = false;
        this.showAlert("Error","Ocurruio un error al agregar ticket")
      },
    });
  }

  displayFn(user: Usuarios): string {
    return user && user.userName ? user.userName : '';
  }

  getClientes(){
    this.http.getUsers().subscribe((data: any) => {
      this.listUser = data.data;
    });
  }

  // getProyects(){
  //   this.http.getProyects(227).subscribe((data:any) => {
  //     this.listProyect = data.data;
  //   });
  // }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 3 : 6;
  }

  private _filter(name: string): Usuarios[] {
    const filterValue = name.toLowerCase();
    return this.listUser.filter(option => option.userName.toLowerCase().includes(filterValue));
  }

  onSelection(event: MatAutocompleteSelectedEvent){
    this.selectedClient =  event.option.value;

    this.http.getProyects(this.selectedClient.id).subscribe((data:any) => {
      this.listProyect = data.data;
    });
  }

  showAlert(status:string,mensaje:string){
    status === "Ok" ? this.toastr.success(`${mensaje}`,"",{
        timeOut: 2000,
        closeButton: true,
        progressBar: true,
        progressAnimation: 'decreasing',
        easing: 'ease-in',
        easeTime: 300
      } ): this.toastr.error(`${mensaje}`,"",{
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      progressAnimation: 'decreasing',
      easing: 'ease-in',
      easeTime: 300
    } )
  }
}
