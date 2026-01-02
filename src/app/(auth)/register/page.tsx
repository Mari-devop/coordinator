"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/app/_lib/validations";
import { type RegisterFormData } from "@/app/_types/auth";
import RedirectIfAuthenticated from "@/app/_components/RedirectIfAuthenticated";
import RegisterLayout from "@/app/(auth)/_components/_auth/RegisterLayout";
import GoogleSignInSection from "@/app/(auth)/_components/_auth/GoogleSignInSection";
import AuthHeader from "@/app/(auth)/_components/_auth/AuthHeader";
import AuthForm from "@/app/(auth)/_components/_auth/AuthForm";
import AuthInput from "@/app/(auth)/_components/_auth/AuthInput";
import AuthButton from "@/app/(auth)/_components/_auth/AuthButton";
import AuthFooter from "@/app/(auth)/_components/_auth/AuthFooter";
import TermsCheckbox from "@/app/(auth)/_components/_auth/TermsCheckbox";
import { useRegister } from "@/app/(auth)/_components/_auth/useRegister";
import { errorStyles, registerFormStyles } from "@/app/(auth)/_styles/authStyles";

export default function RegisterPage() {
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

  const { onSubmit, isLoading, error } = useRegister();

  return (
    <RedirectIfAuthenticated>
      <RegisterLayout
        leftContent={<GoogleSignInSection />}
        rightContent={
          <div className={registerFormStyles.container}>
            <AuthHeader
              title="Create Account"
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
          </div>
        }
      />
    </RedirectIfAuthenticated>
  );
}