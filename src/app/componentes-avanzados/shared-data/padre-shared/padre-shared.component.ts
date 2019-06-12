import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-padre-shared',
  templateUrl: './padre-shared.component.html',
  styleUrls: ['./padre-shared.component.scss']
})
export class PadreSharedComponent implements OnInit {
  message: string;

  constructor() {
    this.message = '';
  }

  ngOnInit() {
  }
  receiveMessage($event) {
    this.message = $event;
  }

}
