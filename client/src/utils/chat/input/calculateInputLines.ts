export const calculateInputLines = (heightVal: any, lineHeightVal: any) => {
  let inputLines: number = 1;
  if (typeof heightVal == "string" && typeof lineHeightVal == "string") {
    inputLines = Math.floor(parseFloat(heightVal) / parseFloat(lineHeightVal));
  }

  return { inputLines };
};
