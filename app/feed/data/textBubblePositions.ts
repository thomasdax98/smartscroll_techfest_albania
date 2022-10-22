export interface TextBubblePosition {
  left?: number;
  right?: number;
  top: number;
}

export const textBubblePositions = [
  [
    { left: 5, top: 18 },
    { right: 5, top: 38 },
  ],
  [
    { left: 5, top: 45 },
    { right: 5, top: 60 },
  ],
  [
    { left: 5, top: 55 },
    { right: 5, top: 70 },
  ],
  [
    { right: 5, top: 18 },
    { left: 5, top: 38 },
  ],
  [
    { right: 5, top: 45 },
    { left: 5, top: 60 },
  ],
  [
    { right: 5, top: 55 },
    { left: 5, top: 70 },
  ],
];

const getRandomInt = (exklMax) => {
  return Math.floor(Math.random() * exklMax);
};

export const getRandomPositions = (): TextBubblePosition[] => {
  const index = getRandomInt(textBubblePositions.length);
  return textBubblePositions[index]!;
};
