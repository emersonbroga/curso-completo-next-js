export const getIntArray = (min: number, max: number) => {
  const result: number[] = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
};
