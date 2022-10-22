import Lesson from "./Lesson";
import { CourseType, LessonType } from "../types/feed.types";
import React from "react";
import { useProgressBarApi } from "../contexts/ProgressBarContext";
import { findNext, findPrevious } from "../helpers/findNext";
import { useCourseTracker } from "../contexts/TrackerContext";
import { goToLesson } from "../helpers/goForward";
import debounce from "lodash.debounce";

interface FeedItemProps {
  course: CourseType;
  onFinishedCourse: () => void;
}

const Course = ({ course, onFinishedCourse }: FeedItemProps) => {
  const lastScrollLeft = React.useRef(0);
  const progressBarApi = useProgressBarApi();
  const courseTracker = useCourseTracker();

  const onAfterAnswer = (lessonId: number) => {
    setTimeout(() => {
      const nextLesson = findNext(course.lessons, lessonId);

      if (nextLesson) {
        goToLesson(nextLesson.id);
      } else {
        onFinishedCourse();
      }
    }, 2000);
  };

  const scrollHandler = React.useCallback(
    (event: UIEvent) => {
      const scrollLeft = (event.target as HTMLDivElement).scrollLeft;

      let upcomingLesson: LessonType | null;
      if (scrollLeft > lastScrollLeft.current) {
        // forward
        upcomingLesson = findNext(course.lessons, courseTracker.currLessonId);
      } else {
        // back
        upcomingLesson = findPrevious(course.lessons, courseTracker.currLessonId);
      }

      courseTracker.changeLessonId(upcomingLesson?.id ?? courseTracker.currLessonId);
      progressBarApi.restart();
      lastScrollLeft.current = scrollLeft;
    },
    [courseTracker]
  );

  const debouncedScrollHandler = React.useMemo(() => debounce(scrollHandler, 100), [scrollHandler]);

  return (
    <div
      id={`course-${course.id}`}
      className="snap-x snap-mandatory flex overflow-x-scroll w-screen min-h-full snap-start snap-always scroll-smooth"
      onScroll={debouncedScrollHandler}
    >
      {course.lessons.map((lesson) => (
        <Lesson key={lesson.id} lesson={lesson} onAfterAnswer={() => onAfterAnswer(lesson.id)} />
      ))}
    </div>
  );
};

export default Course;
