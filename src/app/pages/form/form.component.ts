import { Component, OnInit } from '@angular/core';
import {Partido} from '../partido';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  modelo: Partido;
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.modelo = new Partido();
  }

  ngOnInit() {
  }
  save() {
    // TODO: LLamar al API REST para guardar el dato
    console.log(this.modelo);
    // Volver al listado o al Detalle
    this.router.navigate(['/home']);
  }

}
