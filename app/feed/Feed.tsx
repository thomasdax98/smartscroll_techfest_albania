import Course from "./Course";
import { CourseType } from "./feed.types";

interface FeedProps {
  courses: CourseType[];
}

const Feed = ({ courses }: FeedProps) => {
  return (
    <div className="snap-y snap-mandatory flex flex-col overflow-y-scroll w-screen h-screen">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Feed;
