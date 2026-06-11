import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './@shared/components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `
})
export class App {}
