export interface FeedPageType {
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

export interface FeedItemType {
  id: string;
  category: "GEOGRAPHY";
  pages: Array<FeedPageType>;
}
