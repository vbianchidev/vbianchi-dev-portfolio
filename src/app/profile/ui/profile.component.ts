import { Component, inject, OnInit } from '@angular/core';
import { ProfileStoreService } from '../data/profile-store.service';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { ProfileBioComponent } from './profile-bio/profile-bio.component';
import { ProfileExperienceComponent } from './profile-experience/profile-experience.component';
import { ProfileSkillComponent } from './profile-skill/profile-skill.component';

@Component({
  imports: [
    ProfileSkillComponent,
    ProfileAvatarComponent,
    ProfileBioComponent,
    ProfileExperienceComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  private readonly profileStoreService: ProfileStoreService = inject(ProfileStoreService);

  protected readonly profileState = this.profileStoreService.state;

  public ngOnInit(): void {
    this.profileStoreService.init();
  }
}
