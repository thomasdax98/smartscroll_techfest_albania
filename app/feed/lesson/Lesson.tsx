import { LessonType } from "../feed.types";
import TextBubble from "./TextBubble";
import React from "react";
import { getRandomPositions } from "./textBubblePositions";

interface FeedPageProps {
  lesson: LessonType;
}

const Lesson = ({ lesson }: FeedPageProps) => {
  const positions = React.useRef(getRandomPositions());

  return (
    <section
      className="min-w-full h-screen snap-start relative bg-cover"
      style={{ backgroundImage: `url('${lesson.backgroundImageUrl}')` }}
    >
      {lesson.text?.map((text, idx) => {
        return <TextBubble key={text} text={text} position={positions.current[idx]!} />;
      })}
    </section>
  );
};

export default Lesson;
