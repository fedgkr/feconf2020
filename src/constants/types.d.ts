enum Track {
  A = 'A',
  B = 'B',
}

interface Speaker {
  name: string;
  company: string;
  role: string;
}

interface Session {
  title: string;
  speaker: Speaker;
  track: Track;
  startTime: string;
  endTime: string;
}
