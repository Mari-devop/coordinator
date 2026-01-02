"use client";
import { useState, useEffect } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/_lib/validations";
import { storage } from "@/app/_lib/storage";
import { type LoginFormData } from "@/app/_types/auth";
import RedirectIfAuthenticated from "@/app/_components/RedirectIfAuthenticated";
import AuthTwoColumnLayout from "@/app/(auth)/_components/_auth/RegisterLayout";
import LoginGoogleSection from "@/app/(auth)/_components/_auth/LoginGoogleSection";
import AuthHeader from "@/app/(auth)/_components/_auth/AuthHeader";
import AuthForm from "@/app/(auth)/_components/_auth/AuthForm";
import AuthInput from "@/app/(auth)/_components/_auth/AuthInput";
import AuthButton from "@/app/(auth)/_components/_auth/AuthButton";
import AuthFooter from "@/app/(auth)/_components/_auth/AuthFooter";
import RememberMeSection from "@/app/(auth)/_components/_auth/RememberMeSection";
import { errorStyles, registerFormStyles } from "@/app/(auth)/_styles/authStyles";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = form;

  useEffect(() => {
    const rememberedEmail = storage.getEmail();
    if (rememberedEmail) {
      setValue("email", rememberedEmail);
      setValue("rememberMe", true);
    }
  }, [setValue]);

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

      if (data.rememberMe) {
        storage.saveEmail(data.email);
      } else {
        storage.clearEmail();
      }

      await handleLoginSuccess();
    } catch {
      handleLoginError("An error occurred. Please try again.");
    }
  };

  return (
    <RedirectIfAuthenticated>
      <AuthTwoColumnLayout
        leftContent={<LoginGoogleSection />}
        rightContent={
          <div className={registerFormStyles.container}>
            <AuthHeader
              title="Sign In"
            />

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
                      placeholder="Enter your password"
                      value={field.value || ""}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.password && (
                  <p className={errorStyles.field}>{errors.password.message}</p>
                )}
              </div>

              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <RememberMeSection
                    checked={field.value || false}
                    onCheckedChange={field.onChange}
                  />
                )}
              />

              <AuthButton type="submit" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </AuthButton>
            </AuthForm>

            <AuthFooter
              text="Don't have an account?"
              linkText="Sign up"
              linkHref="/register"
            />
          </div>
        }
      />
    </RedirectIfAuthenticated>
  );
}
