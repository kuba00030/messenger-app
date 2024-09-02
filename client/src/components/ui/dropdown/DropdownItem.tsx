import "./dropdown.css";
import { Dropdown } from "react-bootstrap";

export type DropdownItemT = {
  onClick: () => void;
  text: string;
  icon?: React.ReactNode;
};

export const DropdownItem = ({ onClick, text, icon }: DropdownItemT) => {
  return (
    <Dropdown.Item
      className="dropdown-item border-0 shadow-none fc-my-white d-block d-flex justify-content-between w-100 fs-sm"
      onClick={onClick}
    >
      <span className="fc-my-white me-auto">{text}</span>
      {icon}
    </Dropdown.Item>
  );
};
