import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-bio',
  templateUrl: './profile-bio.component.html',
  styleUrl: './profile-bio.component.scss',
})
export class ProfileBioComponent {
  public readonly name = input.required<string>();
  public readonly email = input.required<string>();
  public readonly phone = input.required<string>();
  public readonly linkedin = input.required<string>();
  public readonly github = input.required<{ username: string; url: string }>();
  public readonly bio = input.required<string>();
}
