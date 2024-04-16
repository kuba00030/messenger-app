import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { InvalidIcon } from "../../errors/InvalidIcon";
import { PasswordVisbilityToggle } from "../../buttons/show-buttons/PasswordVisibilityToggle";
import { useShowPassword } from "../../../../hooks/form/password-field/useShowPassword";
import { forwardRef } from "react";

type FloatingLabel = {
  id: string;
  inputType: string;
  labelVal: string;
  error: string | undefined;
  inputClass?: string;
  labelClass?: string;
};

export const InputFloatingLabel = forwardRef<HTMLInputElement, FloatingLabel>(
  function InputFloatingLabel(
    { id, inputType, labelVal, error, inputClass, labelClass, ...rest },
    ref
  ) {
    const showPassword = useShowPassword(inputType);
    return (
      <OverlayTrigger
        placement="top"
        overlay={
          error !== undefined ? (
            <Tooltip className="text-light">{error}</Tooltip>
          ) : (
            <></>
          )
        }
      >
        <div className="custom-floating-group align-items-center">
          <input
            id={id}
            type={showPassword.inputType}
            className={`custom-floating-input border-0 ${inputClass}`}
            autoComplete="new-password"
            required
            ref={ref}
            {...rest}
          />
          {inputType === "password" && (
            <PasswordVisbilityToggle
              inputType={showPassword.inputType}
              onClick={showPassword.togglePasswordVisibility}
            />
          )}
          {error && <InvalidIcon className={`text-danger me-2`} />}
          <label htmlFor={id} className={`custom-floating-label ${labelClass}`}>
            {labelVal}
          </label>
        </div>
      </OverlayTrigger>
    );
  }
);
