import { z } from "zod";
import {
  emailValidation,
  passwordValidation,
} from "./input-validation/inputValidation";

export const signInValidation = z.object({
  email: emailValidation.shape.email,
  password: passwordValidation.shape.password,
});
