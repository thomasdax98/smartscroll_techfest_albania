import { useMutation } from "@blitzjs/rpc";
import unsubscribeFromCategoryMutation from "app/discover/mutations/unsubscribeFromCategory";

export const useUnsubscribeFromCategory = () => {
  const [unsubscribeFromCategory] = useMutation(unsubscribeFromCategoryMutation);
  return unsubscribeFromCategory;
};
