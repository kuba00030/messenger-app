import { Button } from "react-bootstrap";
import "../buttons.css";

export type PrimaryButton = {
  onClick: () => void;
  type: "submit" | "button" | "reset";
  className?: string;
  textValue: string;
};

export const PrimaryButton = ({
  onClick,
  type,
  className,
  textValue,
}: PrimaryButton) => (
  <Button
    className={
      className
        ? className
        : "fs-sm fw-bold px-2 rounded-2 bg-default btn-h-primary border-0 tr-02"
    }
    onClick={onClick}
    type={type ? type : "button"}
  >
    {textValue ? textValue : "Button"}
  </Button>
);
