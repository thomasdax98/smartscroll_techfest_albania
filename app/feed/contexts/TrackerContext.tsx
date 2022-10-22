import React from "react";

interface CourseTrackerContextApi {
  currCourseId: number;
  currLessonId: number;
  changeCourseId: (newCourseId: number) => void;
  changeLessonId: (newLessonId: number) => void;
}

const CourseTrackerContext = React.createContext<CourseTrackerContextApi>({
  currCourseId: 0,
  currLessonId: 0,
  changeCourseId: () => {
    throw new Error("Missing Context Provider");
  },
  changeLessonId: () => {
    throw new Error("Missing Context Provider");
  },
});

export const useCourseTracker = () => React.useContext(CourseTrackerContext);

const CourseTrackerContextProvider = ({ children }) => {
  const [courseId, setCourseId] = React.useState<number>(0);
  const [lessonId, setLessonId] = React.useState<number>(0);

  // React.useEffect(() => {
  //   console.log("courseId ", courseId);
  //   console.log("lessonId ", lessonId);
  // }, [courseId, lessonId]);

  return (
    <CourseTrackerContext.Provider
      value={{
        currCourseId: courseId,
        changeCourseId: setCourseId,
        currLessonId: lessonId,
        changeLessonId: setLessonId,
      }}
    >
      {children}
    </CourseTrackerContext.Provider>
  );
};

export default CourseTrackerContextProvider;
