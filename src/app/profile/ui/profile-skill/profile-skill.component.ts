import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-skill',
  imports: [],
  template: `
    <h2>{{ 'SKILLS' }}</h2>
    <div class="skills">
      <ul class="skills">
        @for (skill of skills(); track $index) {
          <li>{{ skill }}</li>
        } @empty {
          <li>{{ 'NO-CONTENT' }}</li>
        }
      </ul>
    </div>
  `,
})
export class ProfileSkillComponent {
  public readonly skills = input<string[]>([]);
}
