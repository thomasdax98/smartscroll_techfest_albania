export interface AnswerType {
  text: string;
  correct: boolean;
}

export interface QuestionType {
  questionText: string;
  answers: Array<AnswerType>;
}

export interface LessonType {
  id: string;
  question?: QuestionType;
  text?: string[];
  backgroundImageUrl: string;
}

export interface CourseType {
  id: string;
  category: "GEOGRAPHY";
  lessons: Array<LessonType>;
}
