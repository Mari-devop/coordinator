"use client";
import { useState } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AuthContainer from "../_components/_auth/AuthContainer";
import AuthHeader from "../_components/_auth/AuthHeader";
import AuthForm from "../_components/_auth/AuthForm";
import AuthInput from "../_components/_auth/AuthInput";
import AuthButton from "../_components/_auth/AuthButton";
import AuthFooter from "../_components/_auth/AuthFooter";
import RememberMeSection from "../_components/_auth/RememberMeSection";
import GoogleSignInButton from "../_components/_auth/GoogleSignInButton";
import AuthDivider from "../_components/_auth/AuthDivider";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        const session = await getSession();
        if (session) {
          router.push("/onboarding");
        }
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
        title="Welcome Back"
        subtitle="Sign in to your account to continue"
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
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

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
  );
}
