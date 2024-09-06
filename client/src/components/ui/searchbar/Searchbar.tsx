import { useRef } from "react";

type Searchbar = {
  containerClass?: string;
  iconClass?: string;
  inputClass?: string;
  delay: number;
  immediateAction?: (inputValue?: string) => void;
  delayedAction: (inputValue: string) => void;
};

export const Searchbar = ({
  containerClass,
  iconClass,
  inputClass,
  delay,
  immediateAction,
  delayedAction,
}: Searchbar) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onChange = (inputValue: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (immediateAction) immediateAction(inputValue);

    timeoutRef.current = setTimeout(() => {
      delayedAction(inputValue);
    }, delay);
  };

  return (
    <div
      className={
        containerClass
          ? containerClass
          : "d-flex flex-fill flex-row-reverse mx-4 p-2 rounded-2 bg-my-gray"
      }
    >
      <i
        className={`bi bi-search ${
          iconClass ? iconClass : "border-0 fc-my-gray shadow-none fs-sm"
        }`}
      />

      <input
        className={
          inputClass
            ? inputClass
            : "px-2 fc-my-gray bg-transparent fs-sm fw-semibold border-0 w-100"
        }
        placeholder="Search here..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
