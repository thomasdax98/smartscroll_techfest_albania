import { AnswerType, QuestionType } from "../types/feed.types";
import React from "react";
import clsx from "clsx";
import CheckCircle from "../../icons/CheckCircle";
import XCircle from "../../icons/XCircle";
import { useCheckAnswer } from "../hooks/useCheckAnswer";

interface AnswersProps {
  question: QuestionType;
  onAfterAnswer: () => void;
}

const Answers = ({ question, onAfterAnswer }: AnswersProps) => {
  const [selectedIdx, setSelectedIdx] = React.useState<number>();
  const [correct, setIsCorrect] = React.useState<{
    correct: boolean;
    correctId: number | undefined;
  }>();
  const answerChosen = selectedIdx !== undefined;
  const checkAnswer = useCheckAnswer();

  return (
    <div>
      <div className="space-y-4">
        {question.answers.map((answer, idx) => (
          <button
            key={answer.text}
            className={clsx(
              selectedIdx === idx ? "bg-gray-100" : "bg-white",
              correct?.correct && selectedIdx === idx && "border-2 border-green-300",
              !correct?.correct && selectedIdx === idx && "border-2 border-red-300",
              !answerChosen && "hover:border-primary",
              !answerChosen && "active:border-primary active:ring-2 active:ring-primary-500",
              "w-full text-left",
              "flex justify-between items-center",
              "border-gray-300 relative block cursor-pointer rounded-lg border px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
            )}
            onClick={async () => {
              const correct = await checkAnswer({ quizId: question.id, answerId: answer.id });
              setIsCorrect(correct);
              setSelectedIdx(idx);
              onAfterAnswer();
            }}
            disabled={answerChosen}
          >
            <p>{answer.text}</p>
            <div>
              {selectedIdx === idx && correct?.correct && (
                <div className="text-green-400">
                  <CheckCircle />
                </div>
              )}
              {selectedIdx !== undefined &&
                selectedIdx !== idx &&
                correct?.correctId === answer.id && (
                  <div>
                    <CheckCircle />
                  </div>
                )}
              {selectedIdx === idx && !correct?.correct && (
                <div className="text-red-400">
                  <XCircle />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Answers;
