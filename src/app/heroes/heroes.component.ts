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
    this.hero.name = 'Pepe';
    this.hero.id = 0;
    this.heroes = [];
    this.heroes.push(new Hero(1, 'Juan'));
    // this.heroes.push(this.hero);
  }

  addHero() {
    this.heroes.push(this.hero);
    this.hero = new Hero();
  }
}
