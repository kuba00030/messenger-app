import { Button, Spinner } from "react-bootstrap";
import { useLoading } from "../../../../hooks/loading/useLoading";

type SubmitButton = {
  buttonClass: string;
  value: string | number;
  onClick: () => void;
};

export const SubmitButton = ({ buttonClass, value, onClick }: SubmitButton) => {
  const { loading, setLoading } = useLoading();

  return (
    <Button type="submit" className={buttonClass} onClick={onClick}>
      {loading ? <Spinner animation="border" /> : value}
    </Button>
  );
};
