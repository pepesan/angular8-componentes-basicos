import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {HijoViewChildComponent} from '../hijo-view-child/hijo-view-child.component';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-padre-view-child',
  templateUrl: './padre-view-child.component.html',
  styleUrls: ['./padre-view-child.component.scss']
})
export class PadreViewChildComponent implements AfterViewInit, OnInit {
  @ViewChild(HijoViewChildComponent, {static: false}) hijo: HijoViewChildComponent;
  private messageSource = new BehaviorSubject('default message');
  dato = this.messageSource.asObservable();
  constructor() {
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log('Valores ngAfterViewInit():');
    console.log(this.hijo.dato);
  }
  cambiaDato() {
    this.hijo.changeMessage("Dato Cambiado");
  }

}
