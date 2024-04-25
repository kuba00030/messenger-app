import "../../styles/pages/auth.css";
import { AuthForm } from "../../components/forms/auth-forms/AuthForm";
import { InputFloatingLabel } from "../../components/ui/inputs/floating-labels/InputFloatingLabel";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/ui/buttons/submit-buttons/SubmitButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { validatePassword } from "../../components/utils/form/validation/passwordValidation";
import { FormFields } from "../../components/utils/form/validation/signUpValidation";
import { useLocalStorage } from "../../hooks/local-storage/useLocalStorage";

const formFields: FormFields = [
  { name: "email", label: "E-mail", type: "text" },
  { name: "password", label: "Password", type: "password" },
];

const schema = z.object({
  email: z.string().email(),
  password: validatePassword,
});

type Fields = z.infer<typeof schema>;

export const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Fields>({ resolver: zodResolver(schema) });
  const { setItem } = useLocalStorage("user");

  const submit: SubmitHandler<Fields> = (data) => {
    //  if respone => set user + localStorage
    console.log(data);
  };

  return (
    <>
      <AuthForm
        formBody={
          <>
            <span className="fs-l fw-semibold m-0 p-0 text-light">
              Welcome back to <span className="fc-green-default">Lorem</span>
            </span>
            {formFields.map((field) => {
              return (
                <InputFloatingLabel
                  key={field.name}
                  id={field.name}
                  containerClass="rounded-2"
                  inputClass="custom-input-focus w-100 bg-transparent overflow-hidden py-3 px-2 text-light fw-bold"
                  inputType={field.type}
                  labelClass="mx-2 bg-dark fs-sm text-light fw-bold tr-02"
                  labelVal={field.label}
                  error={errors[field.name as keyof Fields]?.message}
                  {...register(field.name as keyof Fields)}
                />
              );
            })}
            <Link to={"forget_password"}>Forget the password?</Link>
            <div className="d-flex flex-column gap-2">
              <SubmitButton
                buttonClass="btn-fill fw-bold rounded-2 m-0"
                value="Sign up"
                onClick={handleSubmit(submit)}
              />
              <Form.Text className="fw-bold m-0 text-secondary">
                Don't have account yet?
                <Link to={"/sign_up"}>Sign up here</Link>
              </Form.Text>
            </div>
          </>
        }
      />
    </>
  );
};
