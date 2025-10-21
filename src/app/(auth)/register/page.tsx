"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterFormData } from "@/app/_lib/validations";
import AuthContainer from "../_components/_auth/AuthContainer";
import AuthHeader from "../_components/_auth/AuthHeader";
import AuthForm from "../_components/_auth/AuthForm";
import AuthInput from "../_components/_auth/AuthInput";
import AuthButton from "../_components/_auth/AuthButton";
import AuthFooter from "../_components/_auth/AuthFooter";
import TermsCheckbox from "../_components/_auth/TermsCheckbox";
import GoogleSignInButton from "../_components/_auth/GoogleSignInButton";
import AuthDivider from "../_components/_auth/AuthDivider";
import RedirectIfAuthenticated from "@/app/_components/RedirectIfAuthenticated";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        watch,
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            termsAccepted: false,
        },
    });

    const termsAccepted = watch("termsAccepted");

    const onSubmit = async (data: RegisterFormData) => {
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            if (response.ok) {
                router.push("/onboarding");
            } else {
                const responseData = await response.json();
                if (responseData.errors && Array.isArray(responseData.errors)) {
                    const errorMessages = responseData.errors.map((err: { message: string }) => err.message).join(", ");
                    setError(errorMessages);
                } else {
                    setError(responseData.message || "Registration failed");
                }
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
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
                                    placeholder="Create a password"
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>
                    
                    <div>
                        <Controller
                            name="confirmPassword"
                            control={control}
                            render={({ field }) => (
                                <AuthInput
                                    id="confirm-password"
                                    label="Confirm Password"
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={field.value || ""}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                        )}
                    </div>
                    
                    <div>
                        <TermsCheckbox 
                            checked={termsAccepted}
                            onChange={(checked) => setValue("termsAccepted", checked)}
                        />
                        {errors.termsAccepted && (
                            <p className="text-red-500 text-sm mt-1">{errors.termsAccepted.message}</p>
                        )}
                    </div>

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