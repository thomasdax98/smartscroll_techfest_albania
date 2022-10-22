export const findNext = <Item extends { id: number }>(
  items: Item[],
  currId: number
): Item | null => {
  const currIdx = items.findIndex((item) => item.id === currId);

  if (currIdx < items.length - 1) {
    return items[currIdx + 1]!;
  }

  return null;
};

export const findPrevious = <Item extends { id: number }>(
  items: Item[],
  currId: number
): Item | null => {
  const currIdx = items.findIndex((item) => item.id === currId);

  if (currIdx > 0) {
    return items[currIdx - 1]!;
  }

  return null;
};
