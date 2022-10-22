export interface TextBubblePosition {
  left?: number;
  right?: number;
  top: number;
}

export const textBubblePositions = [
  [
    { left: 5, top: 8 },
    { right: 5, top: 28 },
  ],
  [
    { left: 5, top: 35 },
    { right: 5, top: 50 },
  ],
  [
    { left: 5, top: 50 },
    { right: 5, top: 70 },
  ],
  [
    { right: 5, top: 8 },
    { left: 5, top: 28 },
  ],
  [
    { right: 5, top: 35 },
    { left: 5, top: 50 },
  ],
  [
    { right: 5, top: 50 },
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
