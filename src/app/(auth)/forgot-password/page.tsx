"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/app/_lib/validations";
import { type ForgotPasswordFormData } from "@/app/_types/auth";
import { authApi } from "@/app/_lib/api/auth";
import { useToast } from "@/app/_contexts/ToastContext";
import AuthContainer from "@/app/(auth)/_components/_auth/AuthContainer";
import AuthHeader from "@/app/(auth)/_components/_auth/AuthHeader";
import AuthForm from "@/app/(auth)/_components/_auth/AuthForm";
import AuthInput from "@/app/(auth)/_components/_auth/AuthInput";
import AuthButton from "@/app/(auth)/_components/_auth/AuthButton";
import AuthFooter from "@/app/(auth)/_components/_auth/AuthFooter";
import { errorStyles } from "@/app/(auth)/_styles/authStyles";

export default function ForgotPasswordPage() {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);

    try {
      await authApi.forgotPassword(data.email);
      setIsSuccess(true);
      toast.success(
        "If an account with that email exists, we've sent a password reset link."
      );
    } catch (error) {
      console.error("Error requesting password reset:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(`Failed to send reset email: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthHeader
        title="Forgot Password"
        subtitle={
          isSuccess
            ? "Check your email for password reset instructions"
            : "Enter your email to reset your password"
        }
      />

      {!isSuccess ? (
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <AuthInput
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={field.value || ""}
                  onChange={field.onChange}
                  required
                />
              )}
            />
            {errors.email && (
              <p className={errorStyles.field}>{errors.email.message}</p>
            )}
          </div>

          <AuthButton type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Reset Password"}
          </AuthButton>
        </AuthForm>
      ) : (
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            We&apos;ve sent password reset instructions to your email address.
          </p>
          <AuthButton
            onClick={() => setIsSuccess(false)}
            disabled={isLoading}
          >
            Send Another Email
          </AuthButton>
        </div>
      )}

      <AuthFooter
        text=""
        linkText="Back to login"
        linkHref="/login"
        className="mt-2"
      />
    </AuthContainer>
  );
}
