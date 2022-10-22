import { useMutation } from "@blitzjs/rpc";
import checkAnswerMutation from "app/feed/mutations/checkAnswer";

export const useCheckAnswer = () => {
  const [checkAnswer] = useMutation(checkAnswerMutation);
  return checkAnswer;
};
