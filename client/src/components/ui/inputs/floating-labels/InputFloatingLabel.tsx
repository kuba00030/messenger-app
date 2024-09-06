import "../inputs.css";
import "./input-floating-label.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { InvalidIcon } from "../../errors/InvalidIcon";
import { useShowPassword } from "../../../../hooks/form/password-field/useShowPassword";
import { forwardRef } from "react";
import { PasswordVisbilityToggle } from "../../buttons/Buttons";

export type FloatingLabel = {
  id?: string;
  containerClass?: string;
  inputClass?: string;
  inputType: "text" | "password";
  labelClass?: string;
  labelVal: string;
  error?: string | undefined;
  onChange: (inputValue: string) => void;
  inputValue: string;
};

export const InputFloatingLabel = forwardRef<HTMLInputElement, FloatingLabel>(
  function InputFloatingLabel(
    {
      id,
      inputType,
      labelVal,
      error,
      inputClass,
      labelClass,
      containerClass,
      onChange,
      inputValue,
    },
    ref
  ) {
    const showPassword = useShowPassword(inputType);
    return (
      <OverlayTrigger
        placement="top"
        overlay={
          error !== undefined ? (
            <Tooltip className="fc-my-white">{error}</Tooltip>
          ) : (
            <></>
          )
        }
      >
        <div
          className={`custom-floating-group align-items-center ${
            containerClass ? containerClass : "rounded-2 m-0"
          }`}
        >
          <input
            id={id}
            type={showPassword.inputType}
            className={`custom-floating-input border-0 ${
              inputClass
                ? inputClass
                : "custom-input-focus w-100 bg-transparent overflow-hidden py-3 px-2 fc-my-white fw-bold"
            }`}
            autoComplete="new-password"
            required
            ref={ref}
            onChange={(e) => onChange(e.target.value)}
            value={inputValue}
          />
          {inputType === "password" && (
            <PasswordVisbilityToggle
              inputType={showPassword.inputType}
              onClick={showPassword.togglePasswordVisibility}
            />
          )}
          {error && <InvalidIcon className={`text-danger me-2`} />}
          <label
            htmlFor={id}
            className={`custom-floating-label ${
              labelClass
                ? labelClass
                : "mx-2 bg-dark fs-sm fc-my-white fw-bold tr-02"
            }`}
          >
            {labelVal ? labelVal : "Label"}
          </label>
        </div>
      </OverlayTrigger>
    );
  }
);
