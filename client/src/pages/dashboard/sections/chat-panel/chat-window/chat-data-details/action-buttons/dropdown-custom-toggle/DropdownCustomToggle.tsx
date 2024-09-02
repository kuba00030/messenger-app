import React from "react";
import { Button } from "react-bootstrap";
import { iconsClassBootsrap } from "../../../../../../../../components/ui/icons/icons";

type CustomToggleProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DropdownCustomToggle = React.forwardRef<
  HTMLButtonElement,
  CustomToggleProps
>(({ onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e: any) => {
      e.preventDefault();
      onClick(e);
    }}
    className="user-info-action-button fc-my-gray border-0 shadow-none mx-auto"
  >
    <i className={iconsClassBootsrap.moreHorizontally}></i>
  </Button>
));
