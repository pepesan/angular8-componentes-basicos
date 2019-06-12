import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HijoViewChildComponent } from './hijo-view-child/hijo-view-child.component';
import { PadreViewChildComponent } from './padre-view-child/padre-view-child.component';
import {RouterModule} from '@angular/router';
import {VIEW_CHILD_SHARED_ROUTES} from './view-child-shared.route';

@NgModule({
  declarations: [HijoViewChildComponent, PadreViewChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'view-child', // prefijo de rutas
        children: VIEW_CHILD_SHARED_ROUTES
      }
    ])
  ]
})
export class ViewChildSharedModule { }
