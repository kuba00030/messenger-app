import { z } from "zod";
import {
  digitValidation,
  isRequiredValidation,
  lowerCaseValidation,
  specialCharacterValidation,
  startUpperCaseValidation,
  upperCaseValidation,
} from "../validation-rules/validationRules";
import { stringToCamelCase } from "../../../format/string/stringToCamelCase";

// validation for fields like "name" / "last name"
export const namesValidation = (
  field: "Name" | "Last name",
  minLength: number,
  maxLength: number
) =>
  z.object({
    [stringToCamelCase(field)]: isRequiredValidation(
      field,
      minLength,
      maxLength
    )
      .and(startUpperCaseValidation(field))
      .and(lowerCaseValidation(field))
      .and(digitValidation(field, false))
      .and(specialCharacterValidation(field, false)),
  });

export const emailValidation = z.object({
  email: z.string().email("Email is not valid"),
});

export const passwordValidation = z.object({
  password: isRequiredValidation("Password", 7, 30)
    .and(lowerCaseValidation("Password"))
    .and(upperCaseValidation("Password"))
    .and(digitValidation("Password", true))
    .and(specialCharacterValidation("Password", true)),
});

// validation for fields like "country" / " city"
export const locationValidation = (
  field: string,
  minLength: number,
  maxLength: number,
  requireDigit: boolean
) =>
  z.object({
    [stringToCamelCase(field)]: isRequiredValidation(
      field,
      minLength,
      maxLength
    )
      .and(digitValidation(field, requireDigit))
      .and(startUpperCaseValidation(field)),
  });

export const postalCodeValidation = (
  field: string,
  minLength: number,
  maxLength: number
) =>
  z.object({
    [stringToCamelCase(field)]: isRequiredValidation(
      field,
      minLength,
      maxLength
    ).and(digitValidation(field, true)),
  });
