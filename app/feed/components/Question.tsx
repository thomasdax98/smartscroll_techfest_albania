import clsx from "clsx";
import { QuestionType } from "../types/feed.types";
import React from "react";
import Answers from "./Answers";

interface QuestionProps {
  question: QuestionType;
  onAfterAnswer: () => void;
}

const Question = ({ question, onAfterAnswer }: QuestionProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className={clsx("", "bg-white p-4 text-black rounded-md max-w-[70%]", "text-lg font-bold")}
      >
        <h1 className="text-lg font-bold mb-6">{question.questionText}</h1>
        <Answers answers={question.answers} onAfterAnswer={onAfterAnswer} />
      </div>
    </div>
  );
};

export default Question;
