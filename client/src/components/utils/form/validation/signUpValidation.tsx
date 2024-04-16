import { z } from "zod";
import { validatePassword } from "./passwordValidation";
import { emailValidation } from "./emailValidation";

export type FormFields = {
  label: string;
  type: string;
  name: string;
}[];

const SUPPORTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const signUpValidation = z
  .object({
    name: z
      .string()
      .min(1)
      .max(20)
      .regex(/[a-zA-Z]/),
    lastName: z
      .string()
      .min(1)
      .max(20)
      .regex(/[a-zA-Z]/),
    email: emailValidation,
    password: validatePassword,
    passwordRepeat: validatePassword,
    avatar: z.instanceof(FileList).optional(),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Passwords are not the same",
    path: ["passwordRepeat"],
  })
  .refine(
    (data) =>
      data.avatar && SUPPORTED_IMAGE_TYPES.includes(data.avatar[0].type),
    {
      message: "error",
      path: ["avatar"],
    }
  );
