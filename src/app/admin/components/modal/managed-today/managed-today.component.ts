import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Tickets8DaysUnManaged } from '../../models/model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-managed-today',
  templateUrl: './managed-today.component.html',
  styleUrls: ['./managed-today.component.scss']
})
export class ManagedTodayComponent implements OnInit, AfterViewInit {
  tickets8DaysUnManaged: Tickets8DaysUnManaged[] = [];
  displayedColumns: string[] = [
   'Id', 'Cliente', 'Fecha', 'Descripcion'
  ];

  dataSource = new MatTableDataSource<Tickets8DaysUnManaged>(this.tickets8DaysUnManaged);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private httpService: ApiServiceService){}

  ngOnInit(): void {
    this.Tickets8DaysNoGestionados();
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

  Tickets8DaysNoGestionados(){
    this.httpService.ObtenerTicketsManagedToday().subscribe((data: any) => {
      this.dataSource.data = data.data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
