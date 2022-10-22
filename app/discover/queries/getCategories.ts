import { Ctx } from "blitz";
import db from "db";

export default async function getCategories(_, ctx: Ctx) {
  const courses = await db.category.findMany();

  return courses;
}
