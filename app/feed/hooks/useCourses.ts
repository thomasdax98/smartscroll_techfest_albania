import { useQuery } from "@blitzjs/rpc";
import getCourses from "app/feed/queries/getCourses";

export const useCourses = () => {
  const [courses] = useQuery(getCourses, undefined);
  return courses;
};
