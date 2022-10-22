import { useMutation } from "@blitzjs/rpc";
import subscribeToCategoryMutation from "app/discover/mutations/subscribeToCategory";

export const useSubscribeToCategory = () => {
  const [subscribeToCategory] = useMutation(subscribeToCategoryMutation);
  return subscribeToCategory;
};
