"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/app/_lib/validations";
import { type RegisterFormData } from "@/app/_types/auth";
import { authApi } from "@/app/_lib/api/auth";
import { useToast } from "@/app/_contexts/ToastContext";
import RedirectIfAuthenticated from "@/app/_components/RedirectIfAuthenticated";
import AuthContainer from "@/app/(auth)/_components/_auth/AuthContainer";
import AuthHeader from "@/app/(auth)/_components/_auth/AuthHeader";
import AuthForm from "@/app/(auth)/_components/_auth/AuthForm";
import AuthInput from "@/app/(auth)/_components/_auth/AuthInput";
import AuthButton from "@/app/(auth)/_components/_auth/AuthButton";
import AuthFooter from "@/app/(auth)/_components/_auth/AuthFooter";
import TermsCheckbox from "@/app/(auth)/_components/_auth/TermsCheckbox";
import GoogleSignInButton from "@/app/(auth)/_components/_auth/GoogleSignInButton";
import AuthDivider from "@/app/(auth)/_components/_auth/AuthDivider";
import { errorStyles } from "@/app/(auth)/_styles/authStyles";

export default function RegisterPage() {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError("");

    try {
      await authApi.register(data.email, data.password);

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Account created, but automatic login failed. Please log in manually.");
        router.push("/login");
        return;
      }

      toast.success("Account created successfully!");
      router.push("/onboarding");
    } catch (error) {
      console.error("Registration error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      
      if (errorMessage.includes("already exists") || errorMessage.includes("email")) {
        setError("An account with this email already exists");
      } else {
        setError(errorMessage);
      }
      
      toast.error(`Registration failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RedirectIfAuthenticated>
      <AuthContainer>
        <AuthHeader
          title="Create Account"
          subtitle="Join us today and get started"
        />

        <GoogleSignInButton />
        
        <AuthDivider />

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className={errorStyles.message}>
              {error}
            </div>
          )}

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

          <div>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <AuthInput
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Create a password"
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
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
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

          <Controller
            name="termsAccepted"
            control={control}
            render={({ field }) => (
              <TermsCheckbox
                checked={field.value || false}
                onChange={field.onChange}
              />
            )}
          />
          {errors.termsAccepted && (
            <p className={errorStyles.field}>
              {errors.termsAccepted.message}
            </p>
          )}

          <AuthButton type="submit" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </AuthButton>
        </AuthForm>

        <AuthFooter
          text="Already have an account?"
          linkText="Sign in"
          linkHref="/login"
        />
      </AuthContainer>
    </RedirectIfAuthenticated>
  );
}