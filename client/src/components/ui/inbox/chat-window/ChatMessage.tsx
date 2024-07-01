type ChatMessage = {
  value: string;
  date: string;
  style?: {
    containerClass?: string;
    valueClass?: string;
    dateClass?: string;
  };
};
export const ChatMessage = ({ value, date, style }: ChatMessage) => {
  return (
    <div
      className={`${style?.containerClass ? style.containerClass : "me-auto"}`}
    >
      <p
        className={`${
          style?.valueClass
            ? style.valueClass
            : "border border-gray rounded-pill m-0 px-4 py-2 break fs-sm"
        }`}
      >
        {value}
      </p>
      <span className={`${style?.dateClass ? style.dateClass : "ms-1 fs-xs"}`}>
        {date}
      </span>
    </div>
  );
};
