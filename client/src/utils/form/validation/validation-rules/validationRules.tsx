import { z, ZodString } from "zod";

const SUPPORTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const validationErrors = {
  isRequired: "is required",
  isTooLong: "must contain at most",
  startUpperCase: "must start with a capital letter",
  lowerCase: "must contain at least one lower case letter",
  upperCase: "must contain at least one upper case letter",
  noDigit: "cannot contain any digit",
  oneDigit: "must contain at least one digit",
  specialCharacter: "must contain at least one special character",
  noSpecialCharacter: "cannot contain any special character",
  imgType: "Supported files 'jpeg','jpg','png','webp'",
};

export function isRequiredValidation(
  field: string,
  minLength: number,
  maxLength: number
): ZodString {
  return z
    .string()
    .min(
      minLength,
      `${field} ${validationErrors.isRequired} and must contain at least ${minLength} characters`
    )
    .max(
      maxLength,
      `${field} ${validationErrors.isTooLong} ${maxLength} characters`
    );
}

export function digitValidation(
  field: string,
  requireDigit: boolean
): ZodString {
  return requireDigit
    ? z.string().regex(/[0-9]/, `${field} ${validationErrors.oneDigit}`)
    : z.string().regex(/^[^0-9]*$/, `${field} ${validationErrors.noDigit}`);
}

export function lowerCaseValidation(field: string): ZodString {
  return z.string().regex(/[a-z]/, `${field} ${validationErrors.lowerCase}`);
}

export function upperCaseValidation(field: string): ZodString {
  return z.string().regex(/[A-Z]/, `${field} ${validationErrors.upperCase}`);
}

export function startUpperCaseValidation(field: string) {
  return z.string().refine((string) => {
    return string.charAt(0) === string.charAt(0).toUpperCase();
  }, `${field} ${validationErrors.startUpperCase}`);
}

export function specialCharacterValidation(
  field: string,
  requireSpecial: boolean
): ZodString {
  const regex = requireSpecial
    ? /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/
    : /^[^-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]*$/;

  return requireSpecial
    ? z.string().regex(regex, `${field} ${validationErrors.specialCharacter}`)
    : z
        .string()
        .regex(regex, `${field} ${validationErrors.noSpecialCharacter}`);
}

export function avatarValidation() {
  return z
    .any()
    .optional()
    .refine(
      (file) =>
        file.length == 1
          ? SUPPORTED_IMAGE_TYPES.includes(file?.[0]?.type)
            ? true
            : false
          : true,
      `${validationErrors.imgType}`
    );
}
