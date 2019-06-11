import { Component, OnInit } from '@angular/core';
import {MarvelService} from './marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  heroesObservable;
  heroesList;
  error;
  constructor(public marvelService: MarvelService) { }

  ngOnInit() {
    this.heroesObservable = this.marvelService.allHeroes();
    this.heroesObservable.subscribe(data => {
        console.log(data);
        this.heroesList = data.data.results;
        console.log(this.heroesList);
      },
      error => {
        console.log(error);
        this.error = error;
      });
  }

}
