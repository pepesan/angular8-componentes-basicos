import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-padre-service',
  templateUrl: './padre-service.component.html',
  styleUrls: ['./padre-service.component.scss']
})
export class PadreServiceComponent implements OnInit {
  data;

  constructor(private sharedService: SharedServiceService) {
    this.sharedService.currentMessage.subscribe(message => this.data = message);
  }

  ngOnInit() {
  }

  changeData() {
    console.log('cambia dato');
    this.sharedService.changeMessage('Hola desde el Padre');
  }
}
