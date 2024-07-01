import { useState, useEffect } from "react";
import { useOpenOnClick as useOpenElement } from "../open-on-click/useOpenOnClick";

export const useOpenOnScroll = (initialState: boolean, threshold?: number) => {
  const { isOpened, setIsOpened } = useOpenElement(initialState);
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = threshold ?? 10;

      if (prevScrollpos - currentScrollPos > scrollThreshold) {
        setIsOpened(true);
      } else if (currentScrollPos - prevScrollpos > scrollThreshold) {
        setIsOpened(false);
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos, setIsOpened]);

  return { isOpened };
};
