import {PadreViewChildComponent} from './padre-view-child/padre-view-child.component';
import {HijoViewChildComponent} from './hijo-view-child/hijo-view-child.component';

export const VIEW_CHILD_SHARED_ROUTES = [
  { path : '', component: PadreViewChildComponent },
  { path : 'hijo', component: HijoViewChildComponent}
];
