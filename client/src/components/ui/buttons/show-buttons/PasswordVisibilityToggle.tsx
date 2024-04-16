import { Button } from "react-bootstrap";

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
      className="bg-transparent p-0 border-0 text-light me-2"
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
