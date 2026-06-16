import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ProfileExperience } from '../../model/profile-experience.interface';

@Component({
  selector: 'app-profile-experience',
  imports: [DatePipe],
  templateUrl: './profile-experience.component.html',
  styleUrl: './profile-experience.component.scss',
})
export class ProfileExperienceComponent {
  public readonly experiences = input.required<ProfileExperience[]>();
}
