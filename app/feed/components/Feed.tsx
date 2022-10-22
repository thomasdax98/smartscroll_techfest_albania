import Course from "./Course";
import { CourseType, LessonType } from "../types/feed.types";
import React from "react";
import { useProgressBarApi } from "../contexts/ProgressBarContext";
import { useCourseTracker } from "../contexts/TrackerContext";
import { findNext, findPrevious } from "../helpers/findNext";
import { goToCourse, goToLesson } from "../helpers/goForward";
import debounce from "lodash.debounce";

interface FeedProps {
  courses: CourseType[];
}

const Feed = ({ courses }: FeedProps) => {
  const lastScrollTop = React.useRef(0);
  const progressBarApi = useProgressBarApi();
  const courseTracker = useCourseTracker();

  const onFinishedCourse = () => {
    const nextCourse = findNext(courses, courseTracker.currCourseId);
    if (nextCourse) {
      goToCourse(nextCourse.id);
    }
  };

  React.useEffect(() => {
    progressBarApi.start();

    courseTracker.changeCourseId(courses[0]!.id);
    courseTracker.changeLessonId(courses[0]!.lessons[0]!.id);
  }, []);

  React.useEffect(() => {
    if (progressBarApi.progress === 100) {
      const currCourse = courses.find((course) => course.id === courseTracker.currCourseId)!;

      const nextLesson = findNext(currCourse.lessons, courseTracker.currLessonId);

      if (nextLesson) {
        goToLesson(nextLesson.id);
      } else {
        const nextCourse = findNext(courses, courseTracker.currCourseId);

        if (nextCourse) {
          goToCourse(nextCourse.id);
        }
      }
    }
  }, [courseTracker.currCourseId, courseTracker.currLessonId, courses, progressBarApi.progress]);

  const scrollHandler = React.useCallback(
    (event: UIEvent) => {
      const scrollTop = (event.target as HTMLDivElement).scrollTop;

      let upcomingCourse: CourseType | null;
      if (scrollTop > lastScrollTop.current) {
        // down
        upcomingCourse = findNext(courses, courseTracker.currCourseId);
      } else {
        // up
        upcomingCourse = findPrevious(courses, courseTracker.currCourseId);
      }

      if (upcomingCourse === null) {
        // stay at the same course if it is the last one
        upcomingCourse = courses.find((course) => course.id === courseTracker.currCourseId)!;
      }

      courseTracker.changeCourseId(upcomingCourse.id);
      courseTracker.changeLessonId(upcomingCourse.lessons[0]!.id);
      progressBarApi.restart();
      lastScrollTop.current = scrollTop;
    },
    [courseTracker]
  );

  const debouncedScrollHandler = React.useMemo(() => debounce(scrollHandler, 100), [scrollHandler]);

  return (
    <div
      className="snap-y snap-mandatory snap-always scroll-smooth flex flex-col overflow-y-scroll w-screen h-screen"
      onScroll={debouncedScrollHandler}
    >
      {courses.map((course) => (
        <Course key={course.id} course={course} onFinishedCourse={onFinishedCourse} />
      ))}
    </div>
  );
};

export default Feed;
