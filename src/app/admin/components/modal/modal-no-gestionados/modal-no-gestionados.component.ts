import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TicketsNoGestionados } from '../../models/model';
import { ApiServiceService } from '../../services/api-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-modal-no-gestionados',
  templateUrl: './modal-no-gestionados.component.html',
  styleUrls: ['./modal-no-gestionados.component.scss']
})
export class ModalNoGestionadosComponent implements OnInit, AfterViewInit{
  ticketsNoGestionados: TicketsNoGestionados[] = [];
  displayedColumns: string[] = [
    'Cliente', 'Fecha', 'Descripcion'
  ];
  dataSource = new MatTableDataSource<TicketsNoGestionados>(this.ticketsNoGestionados);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private httpService: ApiServiceService){}

  ngOnInit(): void {
    this.TicketsNoGestionados();
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

  TicketsNoGestionados(){
    this.httpService.ObtenerTicketsStatusNoGestionados().subscribe((data: any) => {
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
