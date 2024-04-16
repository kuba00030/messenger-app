import { Link } from "react-router-dom";
import { AuthForm } from "../../../components/forms/auth-forms/AuthForm";
import { SubmitButton } from "../../../components/ui/buttons/submit-buttons/SubmitButton";
import { useNavigateTo } from "../../../hooks/navigate/useNavigateTo";
import { InputFloatingLabel } from "../../../components/ui/inputs/floating-labels/InputFloatingLabel";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordValidation } from "../../../components/utils/form/validation/newPasswordValidation";
import { FormFields } from "../../../components/utils/form/validation/signUpValidation";

const formFields: FormFields = [
  { name: "password", label: "Password", type: "password" },
  { name: "passwordRepeat", label: "Password repeat", type: "password" },
];

type Fields = z.infer<typeof newPasswordValidation>;

export const NewPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Fields>({ resolver: zodResolver(newPasswordValidation) });

  const submit: SubmitHandler<Fields> = (data) => {
    console.log(data);
  };

  return (
    <AuthForm
      formBody={
        <>
          <span className="text-light fs-l fw-semibold">
            Forgot your password?
          </span>
          <span className="text-light fs-sm fw-semibold">
            Enter <span className="fc-green-default">new password</span>
          </span>
          {formFields.map((field) => {
            return (
              <InputFloatingLabel
                key={field.name}
                id={field.name}
                inputType={field.type}
                labelVal={field.label}
                error={errors[field.name as keyof Fields]?.message}
                inputClass="custom-input-focus w-100 bg-transparent overflow-hidden py-3 px-2 text-light fw-bold"
                labelClass="mx-2 bg-dark fs-sm text-light fw-bold tr-02"
                {...register(field.name as keyof Fields)}
              />
            );
          })}
          <div className="d-flex flex-column gap-2">
            <SubmitButton
              buttonClass="btn-fill fw-bold m-0"
              value="Change password"
              onClick={handleSubmit(submit)}
            />
            <Link to={"/sign_in"}>Back to sign in</Link>
          </div>
        </>
      }
    />
  );
};
