import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  ocultaForm = true;
  ocultaListado = false;
  ocultaDetalle = true;
  constructor() { }

  ngOnInit() {
  }

  showForm() {
    this.ocultaForm = false;
    this.ocultaDetalle = true;
    this.ocultaListado = true;
  }
  showListado() {
    this.ocultaForm = true;
    this.ocultaDetalle = true;
    this.ocultaListado = false;
  }
  showDetalle() {
    this.ocultaForm = true;
    this.ocultaDetalle = false;
    this.ocultaListado = true;
  }
}
