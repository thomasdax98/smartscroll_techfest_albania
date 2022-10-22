import { Ctx } from "blitz";
import db from "db";
import { z } from "zod";
import { CourseType } from "../types/feed.types";

export default async function getCourses(filter, ctx: Ctx) {
  const userId = ctx.session.userId ? ctx.session.userId : undefined;
  const userCategories = await db.user.findFirst({
    where: { id: userId },
    include: { categories: true },
  });

  const courses = await db.course.findMany({
    where: {
      categories: {
        some: {
          id:
            !filter?.category && userCategories?.categories?.length
              ? {
                  in: userCategories?.categories.map((category) => category.id),
                }
              : undefined,
          slug: filter?.category
            ? {
                equals: filter?.category,
              }
            : undefined,
        },
      },
    },
    include: {
      lessons: {
        orderBy: {
          order: "asc",
        },
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
            id: lesson.quizPage.id,
            questionText: lesson.quizPage.question,
            answers: lesson.quizPage.options.map((option) => ({
              id: option.id,
              text: option.option,
              correct: option.correct,
            })),
          }
        : undefined,
      text: lesson.textPage ? lesson.textPage.lines.map((line) => line.content) : undefined,
    })),
  }));
}
