export const getIntArray = (min: number, max: number) => {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};

export const getRandomIntArrayInRange = (min: number, max: number, count: number) => {
  const result: number[] = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  // Fisher-Yates shuffle
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result.slice(0, count);
};
