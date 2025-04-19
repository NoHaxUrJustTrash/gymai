export interface Exercise {
  name: string;
  description: string;
  targetMuscles: string[];
  youtubeSearchQuery: string;
}

export interface ApiResponse {
  equipment: string;
  exercises: Exercise[];
}