import {PadreServiceComponent} from './padre-service/padre-service.component';
import {HijoServiceComponent} from './hijo-service/hijo-service.component';

export const SERVICE_SHARED_ROUTES = [
  { path : '', component: PadreServiceComponent },
  { path : 'hijo', component: HijoServiceComponent}
];
