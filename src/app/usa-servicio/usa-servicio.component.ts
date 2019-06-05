import { Component, OnInit } from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-usa-servicio',
  templateUrl: './usa-servicio.component.html',
  styleUrls: ['./usa-servicio.component.css']
})
export class UsaServicioComponent implements OnInit {
  partidos;
  constructor(private todoService: TodoService) {
    this.partidos = this.todoService.getData();
  }

  ngOnInit() {
  }

}
