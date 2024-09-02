import "./msg-dropdown-menu.css";
import { Dropdown, ButtonGroup, DropdownMenu, Button } from "react-bootstrap";
import { DropdownItem } from "../../../../../../../components/ui/dropdown/DropdownItem";
import { iconsClassBootsrap } from "../../../../../../../components/ui/icons/icons";
import React from "react";

type CustomToggleProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const DropdownCustomToggle = React.forwardRef<
  HTMLButtonElement,
  CustomToggleProps
>(({ children, onClick }, ref) => (
  <Button
    ref={ref}
    onClick={(e: any) => {
      e.preventDefault();
      onClick(e);
    }}
    className="bg-transparent border-0 shadow-none my-msg-dropdown-toggle tr-02"
  >
    {children}
  </Button>
));

export const MsgDropdownMenu = () => {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle
        as={DropdownCustomToggle}
        id="dropdown-custom-components"
      >
        <i className={`${iconsClassBootsrap.moreVertically}`} />
      </Dropdown.Toggle>
      <DropdownMenu className="bg-my-dark tr-02">
        <DropdownItem
          text="Reply"
          onClick={() => {}}
          icon={<i className={iconsClassBootsrap.reply} />}
        />
        <DropdownItem
          text="Share"
          onClick={() => {}}
          icon={<i className={iconsClassBootsrap.share} />}
        />
        <DropdownItem
          text="Delete"
          onClick={() => {}}
          icon={<i className={iconsClassBootsrap.delete} />}
        />
      </DropdownMenu>
    </Dropdown>
  );
};
