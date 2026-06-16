import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  imports: [],
  template: ` <img src="{{ avatarUrl() }}" [alt]="'PROFILE-IMAGE'" class="profile__avatar" /> `,
})
export class ProfileAvatarComponent {
  public readonly gitHubUrl = input.required<string>();

  protected readonly avatarUrl = computed(() => {
    const url = this.gitHubUrl();
    return `${url}.png`;
  });
}
