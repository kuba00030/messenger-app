import { useEffect, useState } from "react";
import { calculateInputLines } from "../../../../utils/chat/input/calculateInputLines";

export const useCalculateInputLines = (
  inputRef: React.RefObject<HTMLParagraphElement>,
  inputMessage: string
) => {
  const [inputLines, setInputLines] = useState<number>(1);
  useEffect(() => {
    const input = inputRef.current;
    if (input) {
      const heightVal = getComputedStyle(input).height;
      const lineHeightVal = getComputedStyle(input).lineHeight;
      const { inputLines } = calculateInputLines(heightVal, lineHeightVal);
      setInputLines(inputLines);
    }
  }, [inputMessage]);
  return { inputLines };
};
