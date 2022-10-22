export interface LessonType {
  id: string;
  question?: {
    questionText: string;
    answers: Array<{
      text: string;
      correct: boolean;
    }>;
  };
  text?: string[];
  backgroundImageUrl: string;
}

export interface CourseType {
  id: string;
  category: "GEOGRAPHY";
  lessons: Array<LessonType>;
}
