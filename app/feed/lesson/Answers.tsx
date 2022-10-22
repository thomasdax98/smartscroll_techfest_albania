import { AnswerType } from "../feed.types";
import React from "react";
import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import CheckCircle from "../../icons/CheckCircle";
import XCircle from "../../icons/XCircle";

interface AnswersProps {
  answers: AnswerType[];
  onAfterAnswer: () => void;
}

const Answers = ({ answers, onAfterAnswer }: AnswersProps) => {
  const [selectedIdx, setSelectedIdx] = React.useState<number>();
  const answerChosen = selectedIdx !== undefined;

  return (
    <div>
      <div className="space-y-4">
        {answers.map((answer, idx) => (
          <button
            key={answer.text}
            className={clsx(
              selectedIdx === idx ? "bg-gray-100" : "bg-white",
              answer.correct && selectedIdx === idx && "border-2 border-green-300",
              !answer.correct && selectedIdx === idx && "border-2 border-red-300",
              !answerChosen && "hover:border-indigo-500",
              !answerChosen && "active:border-indigo-500 active:ring-2 active:ring-indigo-500",
              "w-full text-left",
              "flex justify-between items-center",
              "border-gray-300 relative block cursor-pointer rounded-lg border px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
            )}
            onClick={() => {
              setSelectedIdx(idx);
              onAfterAnswer();
            }}
            disabled={answerChosen}
          >
            <p>{answer.text}</p>
            <div>
              {selectedIdx === idx && answer.correct && (
                <div className="text-green-400">
                  <CheckCircle />
                </div>
              )}
              {selectedIdx !== undefined && selectedIdx !== idx && answer.correct && (
                <div>
                  <CheckCircle />
                </div>
              )}
              {selectedIdx === idx && !answer.correct && (
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
