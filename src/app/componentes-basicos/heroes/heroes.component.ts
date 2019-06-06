import { Component, OnInit } from '@angular/core';
import {Hero} from '../entities/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public hero: Hero;
  public heroes: Hero[];

  constructor() {
  }

  ngOnInit() {
    this.hero = new Hero();
    this.hero.name = '';
    this.hero.id = 0;
    this.heroes = [];
    // this.heroes.push(this.hero);
    this.heroes.push(new Hero(1, 'Juan'));
    // this.hero = new Hero(0, '');
  }

  addHero() {
    this.heroes.push(this.hero);
    this.hero = new Hero();
  }

  borraHeroe(h: Hero) {
    this.heroes.splice(this.heroes.indexOf(h), 1);
    /*
    for ( let i = 0; i < this.heroes.length ; i++) {
      const hero = this.heroes[i];
      if ( h === hero) {
        this.heroes.splice(i, 1);
        break;
      }
    }
     */
  }
}
