import { resolver } from "@blitzjs/rpc";
import { Ctx } from "blitz";
import db from "db";
import { z } from "zod";

const Input = z.object({
  categoryId: z.number(),
});

async function subscribeToCategory(rawCategoryId, userId: number) {
  const { categoryId } = Input.parse({ categoryId: rawCategoryId });

  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      categories: {
        connect: {
          id: categoryId,
        },
      },
    },
  });
}

export default resolver.pipe(resolver.zod(Input), async ({ categoryId }, ctx: Ctx) => {
  ctx.session.$authorize();

  await subscribeToCategory(categoryId, ctx.session.userId);
});
