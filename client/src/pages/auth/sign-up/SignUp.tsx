import "../auth.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormFields,
  signUpValidation,
} from "../../../utils/form/validation/signUpValidation";
import { useFormSteps } from "../../../hooks/form/form-steps/useCurrentSteps";
import {
  handleBack,
  hendleNext,
} from "../../../utils/form/form-steps/handleStep";
import { TransitionContainer } from "../../../components/transition/container/TransitionContainer";
import { FileInput } from "../../../components/ui/inputs/file-input/FileInput";
import { InputFloatingLabel } from "../../../components/ui/inputs/floating-labels/InputFloatingLabel";
import { AuthForm } from "../../../components/forms/auth-forms/AuthForm";
import { PrimaryButton } from "../../../components/ui/buttons/primary-button/PrimaryButton";
import { useNavbarContext } from "../../../context/navbar/navbarContext";

const formSteps: FormFields[] = [
  [
    { name: "name", label: "Name", type: "text" },
    { name: "lastName", label: "Last name", type: "text" },
    { name: "avatar", label: "Profile picture", type: "file" },
  ],
  [
    { name: "email", label: "E-mail", type: "text" },
    { name: "password", label: "Password", type: "password" },
    { name: "passwordRepeat", label: "Password repeat", type: "password" },
  ],
  [
    { name: "country", label: "Country", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "postalCode", label: "Postal code", type: "text" },
  ],
];

type Fields = z.infer<typeof signUpValidation>;

export const SignUp = () => {
  const { setCurrentLink } = useNavbarContext();
  const { currStep, setCurrStep, setPrevStep, deltaSteps } = useFormSteps(0, 0);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    trigger,
  } = useForm<Fields>({
    resolver: zodResolver(signUpValidation),
  });

  const lastFormStep = formSteps.length - 1;

  const handleClick = async () => {
    const fields = formSteps[currStep].map((field) => field.name);
    const formStepValid = await trigger(fields as Array<keyof Fields>, {
      shouldFocus: true,
    });

    hendleNext(setCurrStep, currStep, setPrevStep, lastFormStep, formStepValid);

    if (currStep === lastFormStep && formStepValid) {
      handleSubmit(submit)();
    }
  };

  const submit: SubmitHandler<Fields> = (data) => {
    // post new user to db
    // problem with avatar validaiton
    reset();
  };

  const renderFormStep = (fields: FormFields) => {
    let animationDelay: number = 0;
    return fields.map((field) => {
      animationDelay += 0.1;

      return (
        <TransitionContainer
          key={field.name}
          className="d-flex flex-column"
          initial={{ x: deltaSteps >= 1 ? "100%" : "-100%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: animationDelay,
              type: "spring",
            },
          }}
        >
          {field.type === "file" ? (
            <FileInput
              key={field.name}
              id={field.name}
              error={errors[field.name as keyof Fields]?.message?.toString()}
              {...register(field.name as keyof Fields)}
            />
          ) : (
            <InputFloatingLabel
              key={field.name}
              id={field.name}
              inputType={field.type === "text" ? field.type : "password"}
              labelVal={field.label}
              error={errors[field.name as keyof Fields]?.message?.toString()}
              {...register(field.name as keyof Fields)}
            />
          )}
        </TransitionContainer>
      );
    });
  };

  return (
    <div className="d-flex flex-fill justify-content-center align-items-center form-container">
      <AuthForm
        formBody={
          <>
            <span className="fs-l fw-semibold m-0 p-0 text-light">
              Welcome to <span className="fc-green-default">Lorem</span>
            </span>
            <span className="fs-xl fw-semibold m-0 p-0 text-light">
              Sign up
            </span>
            {currStep === 0 && renderFormStep(formSteps[0])}
            {currStep === 1 && renderFormStep(formSteps[1])}
            {currStep === 2 && renderFormStep(formSteps[2])}

            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-row gap-2">
                {currStep !== 0 && (
                  <PrimaryButton
                    onClick={() =>
                      handleBack(setCurrStep, currStep, setPrevStep)
                    }
                    type="button"
                    textValue="back"
                  />
                )}
                <PrimaryButton
                  type="button"
                  className="fw-bold px-2 rounded-2 bg-default btn-h-primary border-0 tr-02 ms-auto"
                  onClick={handleClick}
                  textValue={currStep === lastFormStep ? "Sign up" : "Next"}
                />
              </div>
              <Form.Text className="text-secondary fw-bold m-0">
                Already have account?
                <Link
                  to={"/sign-in"}
                  className="fw-bold inner-text-link tr-02"
                  onClick={() => setCurrentLink("/sign-in")}
                >
                  Sign in here
                </Link>
              </Form.Text>
            </div>
          </>
        }
      />
    </div>
  );
};
