import { ProfileEducation } from './profile-education.interface';
import { ProfileExperience } from './profile-experience.interface';

export interface Profile {
  name: string;
  bio: string;
  phone: string;
  email: string;
  linkedin: string;
  github: {
    url: string;
    username: string;
  };
  skills: string[];
  experiences: ProfileExperience[];
  education: ProfileEducation[];
}
