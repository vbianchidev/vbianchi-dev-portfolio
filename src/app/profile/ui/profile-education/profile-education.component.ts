import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProfileEducation } from '../../model/profile-education.interface';

@Component({
  selector: 'app-profile-education',
  imports: [TranslatePipe, DatePipe],
  templateUrl: './profile-education.component.html',
  styleUrl: './profile-education.component.scss',
})
export class ProfileEducationComponent {
  public readonly education = input.required<ProfileEducation[]>();
}
