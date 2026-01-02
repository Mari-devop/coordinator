import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, "Reset token is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z
    .string()
    .min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z
    .string()
    .min(1, "Please confirm your password"),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const apiRegisterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export const onboardingSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid mobile number"),
  company: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters"),
  role: z
    .string()
    .min(1, "Role is required")
    .min(2, "Role must be at least 2 characters"),
  userType: z.enum(["co-worker", "manager"]),
});

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  mobile: z
    .string()
    .min(1, "Mobile number is required")
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid mobile number"),
});

export const passwordChangeSchema = z.object({
  currentPassword: z
    .string()
    .min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(1, "New password is required")
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
  confirmPassword: z
    .string()
    .min(1, "Please confirm your password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export function validateProfileField(
  field: string,
  value: string
): string | undefined {
  const fieldKey = field as keyof typeof profileSchema.shape;

  if (!(fieldKey in profileSchema.shape)) {
    return undefined;
  }

  let valueToValidate = value;

  if (fieldKey === "mobile") {
    valueToValidate = value.replace(/[\s\-\(\)]/g, "");
  }

  const fieldSchema = profileSchema.shape[fieldKey];
  const result = fieldSchema.safeParse(valueToValidate);

  if (!result.success) {
    return result.error.issues[0]?.message;
  }

  return undefined;
}

export function validatePasswordChangeField(
  field: string,
  value: string,
  allFields?: { currentPassword?: string; newPassword?: string; confirmPassword?: string }
): string | undefined {
  const fieldKey = field as keyof typeof passwordChangeSchema.shape;

  if (!(fieldKey in passwordChangeSchema.shape)) {
    return undefined;
  }

  const fieldSchema = passwordChangeSchema.shape[fieldKey];
  const result = fieldSchema.safeParse(value);

  if (!result.success) {
    return result.error.issues[0]?.message;
  }

  if (fieldKey === "confirmPassword" && allFields?.newPassword && value) {
    if (allFields.newPassword !== value) {
      return "Passwords do not match";
    }
  }

  return undefined;
}

export const inviteSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});
