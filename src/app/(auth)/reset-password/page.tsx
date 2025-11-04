"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema } from "@/app/_lib/validations";
import { type ResetPasswordFormData } from "@/app/_types/auth";
import { authApi } from "@/app/_lib/api/auth";
import { useToast } from "@/app/_contexts/ToastContext";
import AuthContainer from "@/app/(auth)/_components/_auth/AuthContainer";
import AuthHeader from "@/app/(auth)/_components/_auth/AuthHeader";
import AuthForm from "@/app/(auth)/_components/_auth/AuthForm";
import AuthInput from "@/app/(auth)/_components/_auth/AuthInput";
import AuthButton from "@/app/(auth)/_components/_auth/AuthButton";
import AuthFooter from "@/app/(auth)/_components/_auth/AuthFooter";
import { errorStyles } from "@/app/(auth)/_styles/authStyles";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      token: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    const tokenFromUrl = searchParams.get("token");
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      toast.error("Invalid or missing reset token");
      router.push("/forgot-password");
    }
  }, [searchParams, router, toast]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!token) {
      toast.error("Invalid reset token");
      return;
    }

    setIsLoading(true);

    try {
      await authApi.resetPassword(
        token,
        data.password,
        data.confirmPassword
      );
      toast.success("Password has been reset successfully. You can now log in with your new password.");
      router.push("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(`Failed to reset password: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (!token) {
    return null; 
  }

  return (
    <AuthContainer>
      <AuthHeader
        title="Reset Password"
        subtitle="Enter your new password"
      />

      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <AuthInput
                id="password"
                label="New Password"
                type="password"
                placeholder="Enter new password"
                value={field.value || ""}
                onChange={field.onChange}
                required
              />
            )}
          />
          {errors.password && (
            <p className={errorStyles.field}>{errors.password.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <AuthInput
                id="confirmPassword"
                label="Confirm New Password"
                type="password"
                placeholder="Confirm new password"
                value={field.value || ""}
                onChange={field.onChange}
                required
              />
            )}
          />
          {errors.confirmPassword && (
            <p className={errorStyles.field}>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <AuthButton type="submit" disabled={isLoading}>
          {isLoading ? "Resetting Password..." : "Reset Password"}
        </AuthButton>
      </AuthForm>

      <AuthFooter
        text="Remember your password?"
        linkText="Back to login"
        linkHref="/login"
        className="mt-2"
      />
    </AuthContainer>
  );
}

