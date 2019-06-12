import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  publicApiKey: string;
  privateApiKey: string;
  TimeStamp = new Date().getTime();
  hash;

  constructor(public http: HttpClient) {
    this.hash = Md5.hashStr(this.TimeStamp + this.privateApiKey + this.publicApiKey).toString()
  }
  allHeroes() {
    return this.http.get('http://gateway.marvel.com/v1/public/characters?ts='
      + this.TimeStamp + '&apikey='
      + this.publicApiKey + '&hash='
      + this.hash + '&limit=100');
  }
}
