import {
  TUseScrollbarPosition,
  useScrollPosition,
} from "../../hooks/scrollbar/useScrollbarPosition";

export const ScrollTrigger = ({
  children,
  containerClass,
  onTop,
  onBottom,
  offset,
}: {
  children: React.ReactNode;
  containerClass?: string;
} & TUseScrollbarPosition) => {
  const { containerRef } = useScrollPosition({
    onTop,
    onBottom,
    offset,
  });

  return (
    <div
      ref={containerRef}
      className={`${containerClass} overflow-auto position-relative`}
    >
      {children}
    </div>
  );
};
