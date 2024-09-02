import { z } from "zod";
import { avatarValidation } from "./validation-rules/validationRules";
import {
  emailValidation,
  locationValidation,
  namesValidation,
  passwordValidation,
  postalCodeValidation,
} from "./input-validation/inputValidation";

export type FormFields = {
  label: string;
  type: string;
  name: string;
}[];

export const signUpValidation = z
  .object({
    name: namesValidation("Name", 2, 20).shape.name,
    lastName: namesValidation("Last name", 2, 20).shape.lastName,
    avatar: avatarValidation(),
    email: emailValidation.shape.email,
    password: passwordValidation.shape.password,
    passwordRepeat: passwordValidation.shape.password,
    country: locationValidation("Country", 1, 30, false).shape.country,
    city: locationValidation("City", 1, 30, false).shape.city,
    postalCode: postalCodeValidation("Postal Code", 5, 15).shape.postalCode,
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Passwords are not the same",
    path: ["passwordRepeat"],
  });
