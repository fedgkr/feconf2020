export enum Track {
  A = 'A',
  B = 'B',
}

export interface Speaker {
  name: string;
  company: string;
  role: string;
}

export interface Session {
  title: string;
  speaker: Speaker;
  track: Track;
  startTime: string;
  endTime: string;
}
