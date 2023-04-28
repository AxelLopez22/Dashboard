import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TicketsUnManaged } from '../../models/model';
import { ApiServiceService } from '../../services/api-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-modal-sin-gestionar',
  templateUrl: './modal-sin-gestionar.component.html',
  styleUrls: ['./modal-sin-gestionar.component.scss']
})
export class ModalSinGestionarComponent implements OnInit, AfterViewInit {
  ticketsUnManaged: TicketsUnManaged[] = [];
  displayedColumns: string[] = [
    'Id', 'Cliente', 'Fecha', 'Descripcion'
  ];
  dataSource = new MatTableDataSource<TicketsUnManaged>(this.ticketsUnManaged);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpService: ApiServiceService){}

  ngOnInit(): void {
    this.GetTicketsUnManaged();
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

  GetTicketsUnManaged(){
    this.httpService.obtenerTicketsStatusUnManaged().subscribe((data:any) => {
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
