export interface Session {
  type: 'Sesión original' | 'Réplica';
  day: string;
  time: string;
  room: string;
}

export interface Course {
  id: string;
  title: string;
  sessions: Session[];
  objective: string;
  learnings: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  subtitle: string;
  objective: string;
  imageUrl: string;
  courses: Course[];
  totalHours: number;
  purpose: string;
  targetAudience: string[];
  capabilities: string[];
  modality: string;
  durationPerCourse: number;
}