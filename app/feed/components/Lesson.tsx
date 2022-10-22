import { LessonType } from "../types/feed.types";
import TextBubble from "./TextBubble";
import React from "react";
import { getRandomPositions } from "../data/textBubblePositions";
import Question from "./Question";

interface FeedPageProps {
  lesson: LessonType;
  onAfterAnswer: () => void;
}

const Lesson = ({ lesson, onAfterAnswer }: FeedPageProps) => {
  const positions = React.useRef(getRandomPositions());

  return (
    <section
      id={`lesson-${lesson.id}`}
      className="min-w-full h-screen snap-start relative bg-cover"
      style={{ backgroundImage: `url('${lesson.backgroundImageUrl}')` }}
    >
      {lesson.question && <Question question={lesson.question} onAfterAnswer={onAfterAnswer} />}
      {!lesson.question &&
        lesson.text?.map((text, idx) => {
          return <TextBubble key={text} text={text} position={positions.current[idx]!} />;
        })}
    </section>
  );
};

export default Lesson;
