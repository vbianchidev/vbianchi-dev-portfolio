import { Component, computed, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-profile-avatar',
  imports: [TranslatePipe],
  templateUrl: './profile-avatar.component.html',
  styleUrl: './profile-avatar.component.scss',
})
export class ProfileAvatarComponent {
  public readonly gitHubUrl = input.required<string>();

  protected readonly avatarUrl = computed(() => {
    const url = this.gitHubUrl();
    return `${url}.png`;
  });
}
