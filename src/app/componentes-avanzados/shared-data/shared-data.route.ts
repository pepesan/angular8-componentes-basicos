import {PadreSharedComponent} from './padre-shared/padre-shared.component';
import {HijoSharedComponent} from './hijo-shared/hijo-shared.component';

export const SHARED_ROUTES = [
  { path : '', component: PadreSharedComponent },
  { path : 'hijo', component: HijoSharedComponent}
];
