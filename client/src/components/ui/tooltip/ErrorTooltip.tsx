import { forwardRef } from "react";
import { Tooltip } from "react-bootstrap";

type TErrorTooltip = {
  error: string | undefined;
};

export const ErrorTooltip = forwardRef<HTMLDivElement, TErrorTooltip>(
  function ErrorTooltip({ error }, ref) {
    return (
      <Tooltip ref={ref} className="fc-my-white">
        {error}
      </Tooltip>
    );
  }
);
