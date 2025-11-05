import { z } from "zod";
import { loginSchema, registerSchema, apiRegisterSchema, forgotPasswordSchema, resetPasswordSchema } from "@/app/_lib/validations";

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ApiRegisterData = z.infer<typeof apiRegisterSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

