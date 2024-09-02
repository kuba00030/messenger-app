import { useEffect } from "react";

export const useOnStateChange = (state: any, onStateChange: () => void) => {
  useEffect(() => {
    onStateChange();
  }, [state]);
};
