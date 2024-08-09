import { Button } from "react-bootstrap";

export type IconButton = {
  button: React.ButtonHTMLAttributes<HTMLButtonElement>;
  textValue?: string;
  icon?: React.ReactNode;
};

export const IconButton = ({ button, textValue, icon }: IconButton) => (
  <Button {...button}>
    {textValue && <span>{textValue}</span>}
    {icon}
  </Button>
);
