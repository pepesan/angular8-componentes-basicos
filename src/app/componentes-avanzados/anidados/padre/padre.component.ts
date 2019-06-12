import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'mensaje desde el padre';
  }

  ngOnInit() {
  }

}
