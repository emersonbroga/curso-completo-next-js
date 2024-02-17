export const getIntArray = (min: number, max: number) => {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

export const shuffleArray = (arr: any[]) => {
  // Fisher-Yates shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const getRandomIntArrayInRange = (min: number, max: number, count: number) => {
  const result = getIntArray(min, max);
  const shuffled = shuffleArray(result);
  return shuffled.slice(0, count);
};
