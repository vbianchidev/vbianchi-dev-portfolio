import { Route } from '@angular/router';
import { ProfileStoreService } from './data/profile-store.service';

export const profileRoute: Route = {
  path: 'perfil',
  providers: [ProfileStoreService],
  loadComponent: () => import('./ui/profile.component').then((m) => m.ProfileComponent),
};
