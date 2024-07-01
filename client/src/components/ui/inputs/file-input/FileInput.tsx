import "../inputs.css";
import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { ErrorTxtMessage } from "../../errors/ErrorTxtMessage";
type FileInput = {
  id: string;
  containerClass?: string;
  label?: string;
  labelClass?: string;
  inputClass?: string;
  icon?: React.ReactNode;
  error: string | undefined;
};

export const FileInput = forwardRef<HTMLInputElement, FileInput>(
  function FileInput(
    { id, containerClass, inputClass, labelClass, label, icon, error, ...rest },
    ref
  ) {
    return (
      <Form.Group
        controlId={id}
        className={containerClass ? containerClass : "text-start m-0"}
      >
        <Form.Label
          className={labelClass ? labelClass : "text-light fw-bold fs-sm"}
          style={{ cursor: "pointer" }}
        >
          {icon ? icon : <i className="bi bi-card-image me-2 fs-xl" />}
          <span>{label ? label : "Choose file"}</span>
        </Form.Label>
        {error && <ErrorTxtMessage className="text-danger" error={error} />}
        <Form.Control
          ref={ref}
          type="file"
          className={inputClass ? inputClass : "d-none"}
          {...rest}
        ></Form.Control>
      </Form.Group>
    );
  }
);
