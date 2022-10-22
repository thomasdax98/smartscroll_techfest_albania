import Lesson from "./Lesson";
import { CourseType } from "./feed.types";

interface FeedItemProps {
  course: CourseType;
}

const Course = ({ course }: FeedItemProps) => {
  return (
    <div className="snap-x snap-mandatory flex overflow-x-scroll w-screen min-h-full snap-start">
      {course.lessons.map((page) => (
        <Lesson key={page.id} lesson={page} />
      ))}
    </div>
  );
};

export default Course;
