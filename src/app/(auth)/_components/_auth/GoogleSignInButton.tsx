"use client";
import { signIn } from "next-auth/react";
import GoogleLogo from "./GoogleLogo";
import { buttonStyles } from "@/app/(auth)/_styles/authStyles";

interface GoogleSignInButtonProps {
  className?: string;
}

export default function GoogleSignInButton({ className = "" }: GoogleSignInButtonProps) {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/onboarding" });
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className={`${buttonStyles.googleButton} ${className}`}
    >
      <GoogleLogo
        className={buttonStyles.googleIcon}
        width={20}
        height={20}
      />
      Continue with Google
    </button>
  );
}
