import Lesson from "./lesson/Lesson";
import { CourseType } from "./feed.types";

interface FeedItemProps {
  course: CourseType;
}

const Course = ({ course }: FeedItemProps) => {
  const onAfterAnswer = (id: string) => {
    const currLessonIdx = course.lessons.findIndex((lesson) => lesson.id === id);

    if (currLessonIdx < course.lessons.length - 1) {
      const nextLesson = course.lessons[currLessonIdx + 1]!;
      setTimeout(() => {
        document.getElementById(`lesson-${nextLesson.id}`)?.scrollIntoView();
      }, 1000);
    }
  };

  return (
    <div className="snap-x snap-mandatory flex overflow-x-scroll w-screen min-h-full snap-start snap-always scroll-smooth">
      {course.lessons.map((lesson) => (
        <Lesson key={lesson.id} lesson={lesson} onAfterAnswer={() => onAfterAnswer(lesson.id)} />
      ))}
    </div>
  );
};

export default Course;
