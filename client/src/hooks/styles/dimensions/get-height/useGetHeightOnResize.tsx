import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../window/useWindowWidth";

export const useGetHeightOnResize = (element: HTMLElement | null) => {
  const { windowWidth } = useWindowWidth();
  const [elementHeight, setElementHeight] = useState<number>();

  useEffect(() => {
    const handleResize = () => {
      if (element) {
        setElementHeight(element.clientHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [element, windowWidth]);

  return { elementHeight };
};
