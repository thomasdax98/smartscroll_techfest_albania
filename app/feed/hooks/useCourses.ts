import { useQuery } from "@blitzjs/rpc";
import getCourses from "app/feed/queries/getCourses";

export const useCourses = (filter: { category: string } | undefined) => {
  const [courses] = useQuery(getCourses, filter);
  return courses;
};
