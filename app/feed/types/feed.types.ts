export interface AnswerType {
  id: number;
  text: string;
}

export interface QuestionType {
  id: number;
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
