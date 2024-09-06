import { useState } from "react";
import "./buttons.css";
import { Button, Spinner } from "react-bootstrap";
import { iconsClassBootsrap } from "../icons/icons";

export type PrimaryButton = {
  onClick: (e?: any) => void;
  type: "submit" | "button" | "reset";
  className?: string;
  textValue?: string;
  children?: React.ReactNode;
};

export const PrimaryButton = ({
  onClick,
  type,
  className,
  textValue,
  children,
}: PrimaryButton) => (
  <Button
    className={
      className
        ? `btn-h-primary tr-02 ${className}`
        : "fs-sm px-2 rounded-2 bg-default btn-h-primary border-0 tr-02 fc-my-white shadow-none"
    }
    onClick={onClick}
    type={type ? type : "button"}
  >
    {textValue ? textValue : "Button"}
    {children}
  </Button>
);

type PasswordVisbilityToggle = {
  inputType: string;
  onClick: () => void;
};

export const PasswordVisbilityToggle = ({
  inputType,
  onClick,
}: PasswordVisbilityToggle) => {
  return (
    <Button
      className="bg-transparent p-0 border-0 fc-my-white me-2 shadow-none"
      onClick={onClick}
    >
      <i
        className={`bi ${
          inputType === "password" ? "bi-lock-fill" : "bi-unlock-fill"
        }`}
      />
    </Button>
  );
};

export type TIconButton = {
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
  textValue?: string;
  textClass?: string;
  icon?: React.ReactNode;
};

export const IconButton = ({
  buttonProps,
  textValue,
  textClass,
  icon,
}: TIconButton) => (
  <Button {...buttonProps}>
    {textValue && <span className={textClass}>{textValue}</span>}
    {icon}
  </Button>
);

type BackButton = {
  onClick: () => void;
  classname: string;
};

export const BackButton = ({ onClick, classname }: BackButton) => {
  return (
    <IconButton
      buttonProps={{ type: "button", onClick: onClick, className: classname }}
      icon={<i className={`${iconsClassBootsrap.arrowRight} fs-l`}></i>}
    />
  );
};

type AddButton = {
  className?: string;
  onClick: () => void;
};

export const AddButton = ({ className, onClick }: AddButton) => {
  return (
    <Button
      onClick={onClick}
      type="button"
      className={
        className
          ? className
          : "p-0 px-2 my-auto rounded-1 border-0 add-btn tr-02 shadow-none"
      }
    >
      +
    </Button>
  );
};

export const ShowButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      className="ms-auto border-0 shadow-none bg-transparent p-0 fw-semibold fs-xs show-button"
      onClick={onClick}
    >
      Show all
    </Button>
  );
};

type SubmitButton = Omit<PrimaryButton, "type">;

export const SubmitButton = ({
  className,
  textValue,
  onClick,
}: SubmitButton) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(!loading);
    setTimeout(() => {
      onClick();
      setLoading(!loading);
    }, 500);
  };

  return (
    <Button
      type="submit"
      className={
        className
          ? className
          : "fw-bold px-2 rounded-2 bg-default btn-h-primary border-0 tr-02 shadow-none"
      }
      onClick={handleClick}
    >
      {loading ? <Spinner animation="border" /> : textValue}
    </Button>
  );
};

export const HoverFillButton = ({
  className,
  onClick,
  textValue,
  children,
}: PrimaryButton) => {
  return (
    <Button
      className={`bg-transparent border-0 ${
        className ? className : "tr-02 btn-fill-h-primary shadow-none"
      }`}
      onClick={onClick}
    >
      {textValue}
      {children}
    </Button>
  );
};
