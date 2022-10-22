export interface AnswerType {
  text: string;
  correct: boolean;
}

export interface QuestionType {
  questionText: string;
  answers: Array<AnswerType>;
}

export interface LessonType {
  id: number;
  question?: QuestionType;
  text?: string[];
  backgroundImageUrl: string;
}

export interface CourseType {
  id: number;
  category: string;
  lessons: Array<LessonType>;
}
