import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreServiceComponent } from './padre-service/padre-service.component';
import { HijoServiceComponent } from './hijo-service/hijo-service.component';
import {RouterModule} from '@angular/router';
import {SERVICE_SHARED_ROUTES} from './service-shared.route';
import {SharedServiceService} from './shared-service.service';

@NgModule({
  declarations: [PadreServiceComponent, HijoServiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'service-shared', // prefijo de rutas
        children: SERVICE_SHARED_ROUTES
      }
    ])
  ],
  providers:[SharedServiceService]
})
export class ServiceSharedModule { }
