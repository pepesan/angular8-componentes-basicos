import { Component, OnInit } from '@angular/core';
import {Hero} from '../../../componentes-basicos/entities/hero';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ejemplo-formulario',
  templateUrl: './ejemplo-formulario.component.html',
  styleUrls: ['./ejemplo-formulario.component.css']
})
export class EjemploFormularioComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model = new Hero(18,
    'Dr IQ',
    this.powers[0],
    'Chuck Overstreet');
  heroes: Hero[] = [];
  private submitted = false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(heroForm: NgForm) {
    this.submitted = true;
    console.log(heroForm);
    if (heroForm.valid) {
      console.log(this.model);
      this.heroes.push(this.model);
      this.newHero();
      heroForm.resetForm();
    }
  }


  newHero() {
    this.model = new Hero(0, '', this.powers[0], '');
  }
  // Método que borra un elemento del listado
  deleteHero(heroe) {
    for ( let i = 0; i < this.heroes.length ; i++) {
      const hero = this.heroes[i];
      if ( heroe === hero) {
        this.heroes.splice(i, 1);
      }
    }
  }


}
