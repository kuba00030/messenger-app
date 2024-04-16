import { z } from "zod";
import { validatePassword } from "./passwordValidation";

export const newPasswordValidation = z
  .object({
    password: validatePassword,
    passwordRepeat: validatePassword,
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Passwords are not the same",
    path: ["passwordRepeat"],
  });
