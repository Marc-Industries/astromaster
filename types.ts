export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number; // 0-3 corresponding to a, b, c, d
  explanation?: string;
  translation?: {
    text: string;
    options: string[];
    explanation: string;
  };
}

export interface TranslationCache {
  [key: string]: {
    question: string;
    options: string[];
    explanation: string;
  };
}

export enum AppView {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  INFO = 'INFO'
}
