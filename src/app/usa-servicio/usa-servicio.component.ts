import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs';
import {Partido} from '../entities/partido';

@Component({
  selector: 'app-usa-servicio',
  templateUrl: './usa-servicio.component.html',
  styleUrls: ['./usa-servicio.component.css']
})
export class UsaServicioComponent implements OnInit, OnDestroy {
  partidos: Observable<Partido[]>;
  partidosSinObserbable: Partido[] = [];
  constructor(private todoService: TodoService) {
    this.partidos = this.todoService.getData();
    console.log(this.partidos);
    this.partidos.subscribe((data) => {
      console.log(data);
      this.partidosSinObserbable = data;
    },
      error => {throw error});
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // Aquí deberíamos desubcribirnos
  }

}
