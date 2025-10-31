"use client";
import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "@/app/_lib/validations";
import AuthContainer from "../_components/_auth/AuthContainer";
import AuthHeader from "../_components/_auth/AuthHeader";
import AuthForm from "../_components/_auth/AuthForm";
import AuthInput from "../_components/_auth/AuthInput";
import AuthButton from "../_components/_auth/AuthButton";
import AuthFooter from "../_components/_auth/AuthFooter";
import RememberMeSection from "../_components/_auth/RememberMeSection";
import GoogleSignInButton from "../_components/_auth/GoogleSignInButton";
import AuthDivider from "../_components/_auth/AuthDivider";
import RedirectIfAuthenticated from "@/app/_components/RedirectIfAuthenticated";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLoginError = (error: string) => {
    setError(error);
    setIsLoading(false);
  };

  const handleLoginSuccess = async () => {
    const session = await getSession();
    if (session) {
      router.push("/onboarding");
    }
    setIsLoading(false);
  };

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        return handleLoginError("Invalid email or password");
      }

      await handleLoginSuccess();
    } catch (error) {
      handleLoginError("An error occurred. Please try again.");
    }
  };

  return (
    <RedirectIfAuthenticated>
      <AuthContainer>
        <AuthHeader
          title="Welcome Back"
          subtitle="Sign in to your account to continue"
        />

        <GoogleSignInButton />
        
        <AuthDivider />

        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <div className="text-red-600 text-sm text-center mb-4">
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
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
                  placeholder="Enter your password"
                  value={field.value || ""}
                  onChange={field.onChange}
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <RememberMeSection />

          <AuthButton type="submit" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </AuthButton>
        </AuthForm>

        <AuthFooter
          text="Don't have an account?"
          linkText="Sign up"
          linkHref="/register"
        />
      </AuthContainer>
    </RedirectIfAuthenticated>
  );
}
