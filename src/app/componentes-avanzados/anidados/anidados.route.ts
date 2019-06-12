import {PadreComponent} from './padre/padre.component';
import {HijoComponent} from './hijo/hijo.component';

export const ANIDADOS_ROUTES = [
  { path : '', component: PadreComponent },
  { path : 'hijo', component: HijoComponent}
];
