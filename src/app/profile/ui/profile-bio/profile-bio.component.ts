import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-bio',
  templateUrl: './profile-bio.component.html',
  styleUrl: './profile-bio.component.scss',
})
export class ProfileBioComponent {
  public readonly name = input.required<string>();
  public readonly bio = input.required<string>();
}
