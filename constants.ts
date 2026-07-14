export const TOTAL_QUIZ_QUESTIONS = 32;
export const STORAGE_KEY_SEEN = 'astroquiz_seen_ids';
export const STORAGE_KEY_WRONG = 'astroquiz_wrong_ids';

export interface QuizMode {
  key: 'FAST' | 'MID' | 'EXAM';
  label: string;
  description: string;
  count: number;
}

export const QUIZ_MODES: QuizMode[] = [
  { key: 'FAST', label: 'Fast', description: 'Ripasso veloce', count: 10 },
  { key: 'MID', label: 'Mid', description: 'Allenamento medio', count: 20 },
  { key: 'EXAM', label: 'Exam', description: 'Simulazione esame', count: 32 },
];
