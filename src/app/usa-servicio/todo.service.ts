import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Partido} from '../entities/partido';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://cursosdedesarrollo.com/pactometro/resultados.json';

  constructor(private  http: HttpClient) {
    console.log('TodoService inicializado...');
  }
  getData() {
    return this.http.get<Observable<Partido[]>>(this.url)
      .pipe(catchError(this.handleError('get', [])));
  }
  private handleError(operation = 'operation', result?) {
    return (error: any): any[] => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return [];
    };
  }
}
