import { Button } from "react-bootstrap";

export type IconButton = {
  button: React.ButtonHTMLAttributes<HTMLButtonElement>;
  textValue?: string;
  icon?: string;
};

export const IconButton = ({ button, textValue, icon }: IconButton) => (
  <Button {...button}>
    {textValue && <span>{textValue}</span>}
    <i className={icon} />
  </Button>
);
