export const getArrayElements = <T>(
  numberOfElements: number,
  array: T[]
): T[] => {
  return array.slice(0, numberOfElements);
};
