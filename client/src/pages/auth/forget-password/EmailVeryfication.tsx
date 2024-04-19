import { Link } from "react-router-dom";
import { AuthForm } from "../../../components/forms/auth-forms/AuthForm";
import { SubmitButton } from "../../../components/ui/buttons/submit-buttons/SubmitButton";
import { useNavigateTo } from "../../../hooks/navigate/useNavigateTo";
import { InputFloatingLabel } from "../../../components/ui/inputs/floating-labels/InputFloatingLabel";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormFields } from "../../../components/utils/form/validation/signUpValidation";

const formFields: FormFields = [
  { name: "emailCodeVeryfication", label: "Verification code", type: "text" },
];

const schema = z.object({
  email: z.string().email(),
});

type Fields = z.infer<typeof schema>;

export const EmailVeryfication = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Fields>({ resolver: zodResolver(schema) });

  const submit: SubmitHandler<Fields> = (data) => {
    // if response => navigate to new_password
    console.log(data);
  };

  return (
    <AuthForm
      formBody={
        <>
          <span className="text-light fs-l fw-semibold">
            Verify your e-mail
          </span>
          <span className="text-light fs-sm fw-semibold">
            Enter the <span className="fc-green-default">code</span> we sent to
            your <span className="fc-green-default">email</span>
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
              value="Verify"
              onClick={handleSubmit(submit)}
            />
            <Link to={"/sign_in"}>Back to sign in</Link>
          </div>
        </>
      }
    />
  );
};
