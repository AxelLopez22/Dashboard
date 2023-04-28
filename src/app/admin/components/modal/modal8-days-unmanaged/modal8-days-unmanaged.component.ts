import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TicketsManagedToday } from '../../models/model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-modal8-days-unmanaged',
  templateUrl: './modal8-days-unmanaged.component.html',
  styleUrls: ['./modal8-days-unmanaged.component.scss']
})
export class Modal8DaysUnmanagedComponent implements OnInit, AfterViewInit  {

  ticketsManagedToday: TicketsManagedToday[] = [];
  displayedColumns: string[] = [
   'Id', 'Cliente', 'Fecha', 'Descripcion'
  ];

  dataSource = new MatTableDataSource<TicketsManagedToday>(this.ticketsManagedToday);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpService: ApiServiceService){}

  ngOnInit(): void {
    this.getTicketsManagedToday();
  }

  getTicketsManagedToday(){
    this.httpService.ObtenerTickets8DaysUnManaged().subscribe((data:any) => {
      this.dataSource.data = data.data;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator  = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Registros por pagina:';
    this.paginator._intl.nextPageLabel = 'Pagina siguiente';
    this.paginator._intl.previousPageLabel = 'Pagina anterior';
    this.paginator._intl.firstPageLabel = 'Primera pagina';
    this.paginator._intl.lastPageLabel = 'Ultima pagina';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
