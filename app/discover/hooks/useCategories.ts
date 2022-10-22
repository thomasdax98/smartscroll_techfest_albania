import { useQuery } from "@blitzjs/rpc";
import getCategories from "../queries/getCategories";

export function useCategories() {
  const [categories] = useQuery(getCategories, null);

  return categories;
}
