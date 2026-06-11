import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/ui/home/home.component';
import { ProfileComponent } from './profile/ui/profile/profile.component';
import { BlogPostComponent } from './blog/ui/blog-post/blog-post.component';
import { BlogListComponent } from './blog/ui/blog-list/blog-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:slug', component: BlogPostComponent },
  { path: '**', redirectTo: '' },
];
