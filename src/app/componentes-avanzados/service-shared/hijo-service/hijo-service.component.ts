import { Component, OnInit } from '@angular/core';
import {SharedServiceService} from '../shared-service.service';

@Component({
  selector: 'app-hijo-service',
  templateUrl: './hijo-service.component.html',
  styleUrls: ['./hijo-service.component.scss']
})
export class HijoServiceComponent implements OnInit {
  data;
  constructor(private sharedService: SharedServiceService) {
    this.sharedService.currentMessage.subscribe(message => this.data = message);
  }

  ngOnInit() {
  }

}
