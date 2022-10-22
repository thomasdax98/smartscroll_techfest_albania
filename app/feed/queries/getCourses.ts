import { Ctx } from "blitz";
import db from "db";
import { CourseType } from "../feed.types";

export default async function getCourses(_, ctx: Ctx) {
  const courses = await db.course.findMany({
    include: {
      lessons: {
        include: {
          quizPage: {
            include: {
              options: true,
            },
          },
          textPage: {
            include: {
              lines: true,
            },
          },
        },
      },
    },
  });

  return courses.map((course) => ({
    id: course.id,
    category: "GEOGRAPHY",
    lessons: course.lessons.map((lesson) => ({
      id: lesson.id,
      backgroundImageUrl: lesson.image,
      question: lesson.quizPage
        ? {
            questionText: lesson.quizPage.question,
            answers: lesson.quizPage.options.map((option) => ({
              text: option.option,
              correct: option.correct,
            })),
          }
        : undefined,
      text: lesson.textPage ? lesson.textPage.lines.map((line) => line.content) : undefined,
    })),
  }));
}
