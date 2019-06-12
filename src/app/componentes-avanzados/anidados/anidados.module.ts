import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import {RouterModule} from '@angular/router';
import {ANIDADOS_ROUTES} from './anidados.route';

@NgModule({
  declarations: [PadreComponent, HijoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'anidados', // prefijo de rutas
        children: ANIDADOS_ROUTES
      }
    ])
  ],
  exports: [
    PadreComponent, HijoComponent
  ]

})
export class AnidadosModule { }
