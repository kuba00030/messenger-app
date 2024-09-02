export type PropsTextSize = "xxs" | "xs" | "sm" | "m" | "l" | "xl";
export type PropsFontWeight = "bold" | "semibold" | "normal";
export type PropsColor = "white" | "gray";

export const Header = ({
  title,
  size,
  color,
  fontWeight,
}: {
  title: string;
  size: PropsTextSize;
  color: PropsColor;
  fontWeight: PropsFontWeight;
}) => {
  return (
    <div
      className={`${color === "white" && "fc-my-white"} ${
        color === "gray" && "fc-my-gray"
      }
       ${size === "xxs" && "fs-xxs"}
       ${size === "xs" && "fs-xs"}
       ${size === "sm" && "fs-sm"}
       ${size === "m" && "fs-m"}
       ${size === "l" && "fs-l"}
       ${size === "xl" && "fs-xl"}
       ${fontWeight === "bold" && "fw-bold"}
       ${fontWeight === "semibold" && "fw-semibold"}
       `}
    >
      {title}
    </div>
  );
};
