import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-hijo-view-child',
  templateUrl: './hijo-view-child.component.html',
  styleUrls: ['./hijo-view-child.component.scss']
})
export class HijoViewChildComponent implements OnInit {
  private messageSource = new BehaviorSubject('default message');
  dato = this.messageSource.asObservable();
  constructor() {
  }

  ngOnInit() {
  }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }


}
