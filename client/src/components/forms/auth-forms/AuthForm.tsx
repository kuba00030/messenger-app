import { Form } from "react-bootstrap";
import { TransitionContainer } from "../../transition/container/TransitionContainer";

type AuthForm = {
  formBody: React.ReactNode;
};

export const AuthForm = ({ formBody }: AuthForm) => {
  return (
    <TransitionContainer
      className="d-flex flex-fill justify-content-center align-items-center p-0"
      initial={{ opacity: 0, x: "-50%", scale: 0.5, borderRadius: "100px" }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        borderRadius: "0%",
        transition: { duration: 0.5, type: "spring" },
      }}
      exit={{
        x: "50%",
        scale: 0.5,
        transition: { duration: 0.5, type: "spring" },
        opacity: 0,
      }}
    >
      <Form className="auth-container d-flex flex-column text-center gap-4 my-sm-4 bg-dark my-overflow-x-hidden">
        {formBody}
      </Form>
    </TransitionContainer>
  );
};
