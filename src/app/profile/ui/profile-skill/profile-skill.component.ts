import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-skill',
  templateUrl: './profile-skill.component.html',
  styleUrl: './profile-skill.component.scss',
})
export class ProfileSkillComponent {
  public readonly skills = input<string[]>([]);
}
