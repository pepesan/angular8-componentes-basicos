import {Injectable} from '@angular/core';
import {Partido} from './partido';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  url = 'http://cursosdedesarrollo.com/pactometro/resultados.json';
  ELEMENT_DATA: Partido[];
  data: Observable<Partido[]>;
  constructor(private  http: HttpClient) {
    this.data = this.http.get<Observable<Partido[]>>(this.url)
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

  getData(): Observable<Partido[]> {
    return this.data;
  }


  addPartido(data) {
    this.ELEMENT_DATA.push(data);
  }

  deletePartido(index) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }

  dataLength() {
    return this.ELEMENT_DATA.length;
  }
}
