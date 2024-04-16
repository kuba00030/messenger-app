import "../../styles/pages/auth.css";
import { AuthForm } from "../../components/forms/auth-forms/AuthForm";
import { InputFloatingLabel } from "../../components/ui/inputs/floating-labels/InputFloatingLabel";
import { FileInput } from "../../components/ui/inputs/file-input/FileInput";
import { SubmitButton } from "../../components/ui/buttons/submit-buttons/SubmitButton";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormFields,
  signUpValidation,
} from "../../components/utils/form/validation/signUpValidation";

type Fields = z.infer<typeof signUpValidation>;

const formFields: FormFields = [
  { name: "name", label: "Name", type: "text" },
  { name: "lastName", label: "Last name", type: "text" },
  { name: "email", label: "E-mail", type: "text" },
  { name: "password", label: "Password", type: "password" },
  { name: "passwordRepeat", label: "Password repeat", type: "password" },
  { name: "avatar", label: "Profile picture", type: "file" },
];

export const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Fields>({ resolver: zodResolver(signUpValidation) });

  const submit: SubmitHandler<Fields> = (data) => {
    console.log(data);
  };

  return (
    <AuthForm
      formBody={
        <>
          <span className="fs-l fw-semibold m-0 p-0 text-light">
            Welcome to <span className="fc-green-default">Lorem</span>
          </span>
          <span className="fs-xl fw-semibold m-0 p-0 text-light">Sign up</span>
          {formFields.map((field) => {
            return field.type === "file" ? (
              <FileInput
                key={field.name}
                id={field.name}
                containerClass="text-start"
                inputClass="d-none"
                labelClass="text-light fw-bold fs-sm"
                label="Choose file"
                icon={<i className="bi bi-card-image me-2 fs-xl" />}
                error={errors[field.name as keyof Fields]?.message?.toString()}
                {...register(field.name as keyof Fields)}
              />
            ) : (
              <InputFloatingLabel
                key={field.name}
                id={field.name}
                inputType={field.type}
                labelVal={field.label}
                error={errors[field.name as keyof Fields]?.message?.toString()}
                inputClass="custom-input-focus w-100 bg-transparent overflow-hidden py-3 px-2 text-light fw-bold"
                labelClass="mx-2 bg-dark fs-sm text-light fw-bold tr-02"
                {...register(field.name as keyof Fields)}
              />
            );
          })}

          <div className="d-flex flex-column gap-2">
            <SubmitButton
              buttonClass="btn-fill fw-bold m-0"
              value="Sign up"
              onClick={handleSubmit(submit)}
            />
            <Form.Text className="text-secondary fw-bold m-0">
              Already have account? <Link to={"/sign_in"}>Sign in here</Link>
            </Form.Text>
          </div>
        </>
      }
    />
  );
};
