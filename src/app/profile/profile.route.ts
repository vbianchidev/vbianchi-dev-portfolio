import { Route } from '@angular/router';
import { ProfileStoreService } from './data/profile-store.service';

export const profileRoute: Route = {
  path: 'profile',
  providers: [ProfileStoreService],
  loadComponent: () => import('./ui/profile.component').then((m) => m.ProfileComponent),
};
