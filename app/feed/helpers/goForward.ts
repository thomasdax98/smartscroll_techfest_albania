export const goToCourse = (courseId: number) => {
  document.getElementById(`course-${courseId}`)?.scrollIntoView();
};

export const goToLesson = (lessonId: number) => {
  document.getElementById(`lesson-${lessonId}`)?.scrollIntoView();
};
