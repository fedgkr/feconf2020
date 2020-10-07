export enum Track {
  A = 'A',
  B = 'B',
}

export enum Grade {
  Diamond,
  Platinum,
  SpaceProvider,
}

export interface Speaker {
  name: string;
  company: string;
  role: string;
  imagePosition?: string;
}

export interface Session {
  title: string;
  description?: string;
  speaker: Speaker;
  track: Track;
  startTime: string;
  endTime: string;
}

export interface Sponsor {
  name: string;
  link: string;
  image: string;
  grade: Grade;
}
