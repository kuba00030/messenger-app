import { AuthForm } from "../../../components/forms/auth-forms/AuthForm";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../../components/ui/buttons/submit-buttons/SubmitButton";
import { InputFloatingLabel } from "../../../components/ui/inputs/floating-labels/InputFloatingLabel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidation } from "../../../utils/form/validation/input-validation/inputValidation";
import { FormFields } from "../../../utils/form/validation/signUpValidation";
import { useNavbarContext } from "../../../context/navbar/navbarContext";

type Fields = z.infer<typeof emailValidation>;

const formFields: FormFields = [
  { name: "email", label: "E-mail", type: "text" },
];

export const ForgetPassowrd = () => {
  const { setCurrentLink } = useNavbarContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Fields>({ resolver: zodResolver(emailValidation) });

  const submit: SubmitHandler<Fields> = (data) => {
    // if response => send reset password msg (firebase) to "....email"
    console.log(data);
  };

  return (
    <AuthForm
      formBody={
        <>
          <span className="fs-l fw-semibold m-0 p-0 text-light">
            Forgot your password?
          </span>

          <span className="text-light fw-semibold fs-sm">
            Please enter the <span className="fc-green-default">email</span> you
            use for sign in to
            <span className="fc-green-default"> Lorem </span>
            <span className="text-light fw-semibold fs-sm">
              so we can send you a
              <span className="fc-green-default"> verification code</span>
            </span>
          </span>
          {formFields.map((field) => {
            return (
              <InputFloatingLabel
                key={field.name}
                id={field.name}
                inputType={field.type == "text" ? field.type : "password"}
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
              textValue="Send code"
              onClick={handleSubmit(submit)}
            />
            <Link
              to={"/sign-in"}
              className="fw-bold inner-text-link tr-02"
              onClick={() => setCurrentLink("/sign-in")}
            >
              Back to sign in
            </Link>
          </div>
        </>
      }
    />
  );
};
