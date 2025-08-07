export interface Course {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  icon: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  level: 'beginner' | 'level1' | 'level2';
  course: string;
}

export interface QuizResult {
  id?: number;
  student_name: string;
  course_id: string;
  selected_level: string;
  total_questions: number;
  correct_answers: number;
  score_percentage: number;
  completed_at: string;
}

export type QuizLevel = 'beginner' | 'level1' | 'level2';

export interface StudentInfo {
  name: string;
  level: QuizLevel;
}