import { ProfileExperience } from './profile-experience.interface';

export interface Profile {
  name: string;
  bio: string;
  github: {
    url: string;
    username: string;
  };
  skills: string[];
  experiences: ProfileExperience[];
}
