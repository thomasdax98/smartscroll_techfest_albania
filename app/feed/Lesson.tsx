import { LessonType } from "./feed.types";

interface FeedPageProps {
  lesson: LessonType;
}

const Lesson = ({ lesson }: FeedPageProps) => {
  return (
    <section
      className="min-w-full h-screen snap-start relative bg-auto"
      style={{ backgroundImage: `url('${lesson.backgroundImageUrl}')` }}
    ></section>
  );
};

export default Lesson;
