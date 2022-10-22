import clsx from "clsx";
import { TextBubblePosition } from "./textBubblePositions";

interface TextBubbleProps {
  text: string;
  position: TextBubblePosition;
}

const TextBubble = ({ text, position }: TextBubbleProps) => {
  return (
    <div
      className={clsx(
        "absolute bg-white p-4 text-black rounded-md max-w-[70%]",
        "text-lg font-bold"
      )}
      style={{
        top: `${position.top}%`,
        left: position.left ? `${position.left}%` : undefined,
        right: position.right ? `${position.right}%` : undefined,
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default TextBubble;
