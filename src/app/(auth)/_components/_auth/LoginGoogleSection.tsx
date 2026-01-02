"use client";
import GoogleSignInButton from "./GoogleSignInButton";
import { googleSectionStyles } from "@/app/(auth)/_styles/authStyles";

export default function LoginGoogleSection() {
  return (
    <div className={googleSectionStyles.container}>
      <div className={googleSectionStyles.content}>
        <div className={googleSectionStyles.header}>
          <h1 className={googleSectionStyles.title}>
            Welcome Back
          </h1>
          <p className={googleSectionStyles.subtitle}>
            Sign in to your account to continue
          </p>
        </div>
        
        <div className={googleSectionStyles.buttonContainer}>
          <GoogleSignInButton className={googleSectionStyles.button} />
        </div>
      </div>
    </div>
  );
}

