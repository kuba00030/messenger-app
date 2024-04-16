import { forwardRef } from "react";
import { Form } from "react-bootstrap";
import { ErrorTxtMessage } from "../../errors/ErrorTxtMessage";
type FileInput = {
  id: string;
  containerClass?: string;
  label?: string | number;
  labelClass?: string;
  inputClass?: string;
  icon: React.ReactNode;
  error: string | undefined;
};

export const FileInput = forwardRef<HTMLInputElement, FileInput>(
  function FileInput(
    { id, containerClass, inputClass, labelClass, label, icon, error, ...rest },
    ref
  ) {
    return (
      <Form.Group controlId={id} className={containerClass}>
        <Form.Label className={labelClass}>
          {icon}
          {label && <span>{label}</span>}
        </Form.Label>
        {error && <ErrorTxtMessage className="text-danger" error={error} />}
        <Form.Control
          ref={ref}
          type="file"
          className={inputClass}
          {...rest}
        ></Form.Control>
      </Form.Group>
    );
  }
);
