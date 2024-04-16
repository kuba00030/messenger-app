import { z } from "zod";

export const validatePassword = z
  .string()
  .min(7)
  .regex(/[0-9]/, "Password must contain at least one digit")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(
    /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
    "Password must contain at least one special character"
  );
