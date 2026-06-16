import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-skill',
  imports: [TranslatePipe],
  templateUrl: './profile-skill.component.html',
  styleUrl: './profile-skill.component.scss',
})
export class ProfileSkillComponent {
  public readonly skills = input<string[]>([]);
}
