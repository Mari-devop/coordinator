import { steps } from "./constants";
import { onboardingStyles } from "@/app/(auth)/_styles/onboardingStyles";

interface ProgressHeaderProps {
  currentStep: number;
}

export default function ProgressHeader({ currentStep }: ProgressHeaderProps) {
  const { header } = onboardingStyles;
  
  return (
    <div className={header.container}>
      <div className={header.card}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className={header.title}>Welcome to Coordinator</h1>
            <p className={header.subtitle}>Let&apos;s set up your account in just a few steps</p>
          </div>
          <div className={header.progressContainer}>
            <div className={header.progressText}>
              Step {currentStep} of {steps.length}
            </div>
            <div className={header.progressSubtext}>
              {Math.round((currentStep / steps.length) * 100)}% Complete
            </div>
          </div>
        </div>
        
        <div>
          <div className={header.progressBar}>
            <div 
              className={header.progressFill}
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
