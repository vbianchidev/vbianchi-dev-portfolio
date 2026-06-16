export interface ProfileExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  mode: number;
  description: string;
  activities: string[];
}

export enum ExperienceMode {
  REMOTE = 1,
  HYBRID = 2,
  FACE_TO_FACE = 3,
}
