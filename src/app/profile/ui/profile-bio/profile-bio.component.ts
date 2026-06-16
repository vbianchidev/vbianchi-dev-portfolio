import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-bio',
  imports: [],
  template: `
    <h1>{{ name() }}</h1>
    <p class="profile__bio">
      {{ bio() }}
    </p>
  `,
})
export class ProfileBioComponent {
  public readonly name = input.required<string>();
  public readonly bio = input.required<string>();
}
