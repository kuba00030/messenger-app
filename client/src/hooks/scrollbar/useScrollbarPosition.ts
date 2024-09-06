import { useEffect, useRef } from "react";

type Func = () => void;

export type TUseScrollbarPosition = {
  onTop?: Func;
  onBottom?: Func;
  offset: number;
};

export const useScrollPosition = ({
  onTop,
  onBottom,
  offset,
}: TUseScrollbarPosition) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

        if (scrollTop <= offset && onTop) {
          onTop();
        }

        if (scrollTop + clientHeight >= scrollHeight - offset && onBottom) {
          onBottom();
        }
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [onTop, onBottom, offset]);

  return { containerRef };
};
