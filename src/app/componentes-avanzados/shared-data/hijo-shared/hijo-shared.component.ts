import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo-shared',
  templateUrl: './hijo-shared.component.html',
  styleUrls: ['./hijo-shared.component.scss']
})
export class HijoSharedComponent implements OnInit {
  message = 'Hola Mundo!';
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }
  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
