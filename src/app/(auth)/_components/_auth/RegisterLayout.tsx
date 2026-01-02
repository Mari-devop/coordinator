"use client";
import { ReactNode } from "react";
import { registerLayoutStyles } from "@/app/(auth)/_styles/authStyles";

interface AuthTwoColumnLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

function AuthTwoColumnLayout({ leftContent, rightContent }: AuthTwoColumnLayoutProps) {
  return (
    <div className={registerLayoutStyles.container}>
      <div className={registerLayoutStyles.leftColumn}>
        <div className={registerLayoutStyles.leftColumnDivider} />
        {leftContent}
      </div>
      <div className={registerLayoutStyles.rightColumn}>
        {rightContent}
      </div>
    </div>
  );
}

export default AuthTwoColumnLayout;
export { AuthTwoColumnLayout as RegisterLayout };

