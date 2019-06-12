import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
@Component({
  selector: 'app-partidos-table',
  templateUrl: './partidos-table.component.html',
  styleUrls: ['./partidos-table.component.css']
})
export class PartidosTableComponent implements OnInit {
  displayedColumns = ['nombre', 'dipu', 'imagen', 'actions'];
  resultsLength: number;
  isLoadingResults = true;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getData().subscribe( data => {
      // console.log(data);
      this.dataSource.data = data;
      this.resultsLength = data.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  createItem() {
    this.router.navigate(['/form']);
  }
  showItem(row) {
    console.log(row);
    this.router.navigate(['/listado/' + row.nombre]);
  }
  editItem(row) {
    this.router.navigate(['/form/' + row.nombre]);
    console.log(row);
  }
  deleteItem(row) {
    console.log(row);
  }
}




