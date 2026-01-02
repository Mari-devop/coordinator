"use client";
import GoogleSignInButton from "./GoogleSignInButton";
import { googleSectionStyles } from "@/app/(auth)/_styles/authStyles";

export default function GoogleSignInSection() {
  return (
    <div className={googleSectionStyles.container}>
      <div className={googleSectionStyles.content}>
        <div className={googleSectionStyles.header}>
          <h1 className={googleSectionStyles.title}>
            Welcome to Coordinator
          </h1>
          <p className={googleSectionStyles.subtitle}>
            Join thousands of teams already using Coordinator to manage their work
          </p>
        </div>
        
        <div className={googleSectionStyles.buttonContainer}>
          <GoogleSignInButton className={googleSectionStyles.button} />
        </div>
      </div>
    </div>
  );
}

