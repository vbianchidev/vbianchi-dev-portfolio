import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavComponent } from './@shared/components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App {
  private translate: TranslateService = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['pt-br', 'en-us']);
  }
}
