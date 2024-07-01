import { Button, Spinner } from "react-bootstrap";
import { useLoading } from "../../../../hooks/loading/useLoading";
import { PrimaryButton } from "../primary-button/PrimaryButton";

type SubmitButton = Omit<PrimaryButton, "type">;

export const SubmitButton = ({
  className,
  textValue,
  onClick,
}: SubmitButton) => {
  const { loading, setLoading } = useLoading();

  return (
    <Button
      type="submit"
      className={
        className
          ? className
          : "fw-bold px-2 rounded-2 bg-default btn-h-primary border-0 tr-02"
      }
      onClick={onClick}
    >
      {loading ? <Spinner animation="border" /> : textValue}
    </Button>
  );
};
