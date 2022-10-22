import { resolver } from "@blitzjs/rpc";
import { Ctx } from "blitz";
import db from "db";
import { string, z } from "zod";

const Answer = z.object({
  quizId: z.number(),
  answerId: z.number(),
});

async function checkAnswer(rawQuizId: number, rawAnswerId: number) {
  const { quizId, answerId } = Answer.parse({ quizId: rawQuizId, answerId: rawAnswerId });

  const correctAnswer = await db.lessonPageQuizOptions.findFirst({
    where: {
      quizId,
      correct: true,
    },
  });

  return {
    correct: correctAnswer?.id === answerId,
    correctId: correctAnswer?.id,
  };
}

export default resolver.pipe(resolver.zod(Answer), async ({ quizId, answerId }, ctx) => {
  return await checkAnswer(quizId, answerId);
});
