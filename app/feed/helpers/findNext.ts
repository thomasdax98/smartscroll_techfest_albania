export const findNext = <Item extends { id: number }>(
  items: Item[],
  currId: number
): Item | null => {
  console.log("items ", items);
  console.log("currId ", currId);

  const currIdx = items.findIndex((item) => item.id === currId);
  console.log("currIdx ", currIdx);

  if (currIdx < items.length - 1) {
    console.log("nextId ", items[currIdx + 1]!.id);
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
