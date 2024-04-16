import { forwardRef } from "react";
import { Tooltip } from "react-bootstrap";

type ErrorTooltip = {
  error: string | undefined;
};

export const ErrorTooltip = forwardRef<HTMLDivElement, ErrorTooltip>(
  function ErrorTooltip({ error }, ref) {
    return (
      <Tooltip ref={ref} className="text-light">
        {error}
      </Tooltip>
    );
  }
);
