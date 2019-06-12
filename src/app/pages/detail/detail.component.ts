import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Partido} from '../partido';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  partido = new Partido();
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe((data) => {
      this.partido.nombre = data.id;
    });
    // console.log(this.partido);
  }
  volver() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
