"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthContainer from "../_components/_auth/AuthContainer";
import AuthHeader from "../_components/_auth/AuthHeader";
import AuthForm from "../_components/_auth/AuthForm";
import AuthInput from "../_components/_auth/AuthInput";
import AuthButton from "../_components/_auth/AuthButton";
import AuthFooter from "../_components/_auth/AuthFooter";
import TermsCheckbox from "../_components/_auth/TermsCheckbox";
import GoogleSignInButton from "../_components/_auth/GoogleSignInButton";
import AuthDivider from "../_components/_auth/AuthDivider";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        if (!termsAccepted) {
            setError("Please accept the terms and conditions");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                router.push("/onboarding");
            } else {
                const data = await response.json();
                setError(data.message || "Registration failed");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContainer>
            <AuthHeader
                title="Create Account"
                subtitle="Join us today and get started"
            />
            
            <GoogleSignInButton />
            
            <AuthDivider />
            
            <AuthForm onSubmit={handleSubmit}>
                {error && (
                    <div className="text-red-600 text-sm text-center mb-4">
                        {error}
                    </div>
                )}

                <AuthInput
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <AuthInput
                    id="password"
                    label="Password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <AuthInput
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                
                <TermsCheckbox 
                    checked={termsAccepted}
                    onChange={setTermsAccepted}
                />

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
    );
}