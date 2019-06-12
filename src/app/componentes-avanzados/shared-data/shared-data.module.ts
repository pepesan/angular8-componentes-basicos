import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreSharedComponent } from './padre-shared/padre-shared.component';
import { HijoSharedComponent } from './hijo-shared/hijo-shared.component';
import {RouterModule} from '@angular/router';
import {SHARED_ROUTES} from './shared-data.route';

@NgModule({
  declarations: [PadreSharedComponent, HijoSharedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'shared', // prefijo de rutas
        children: SHARED_ROUTES
      }
    ])
  ]
})
export class SharedDataModule { }
