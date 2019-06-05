import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usa-eventos',
  templateUrl: './usa-eventos.component.html',
  styleUrls: ['./usa-eventos.component.css']
})
export class UsaEventosComponent implements OnInit {
  value = '';
  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    event.preventDefault();
    console.log(event);
    console.log('pulsado');
  }

  onEnter(value: string) { this.value = value; }
}
