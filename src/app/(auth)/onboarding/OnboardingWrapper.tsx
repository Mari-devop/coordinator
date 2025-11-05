"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardingData } from "@/app/_types/onboardingTypes";
import { onboardingApi } from "@/app/_lib/api/onboarding";
import { steps } from "@/app/(auth)/_components/_onboarding/constants";
import { 
  ProgressHeader, 
  SummaryPanel, 
  InviteSectionWrapper, 
  NavigationButtons 
} from "@/app/(auth)/_components/_onboarding"; 
import StepContent from "@/app/(auth)/_components/_onboarding/StepContent";
import type { StepContentProps } from "@/app/(auth)/_components/_onboarding/StepContent";
import { onboardingStyles } from "@/app/(auth)/_styles/onboardingStyles";

export default function OnboardingWrapper() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    firstName: "",
    lastName: "",
    mobile: "",
    company: "",
    role: "",
    userType: "co-worker"
  });
  const [showInviteSection, setShowInviteSection] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { container, card, error: errorStyles } = onboardingStyles;

  const handleInputChange = (field: keyof OnboardingData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      await onboardingApi.submitOnboarding(formData);
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.mobile;
      case 2:
        return formData.company && formData.role;
      case 3:
        return formData.userType;
      case 4:
        return true;
      case 5:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className={container.main}>
      <ProgressHeader currentStep={currentStep} />

      <div className={container.content}>
        {showInviteSection ? (
          <InviteSectionWrapper 
            formData={formData}
            onClose={() => setShowInviteSection(false)}
          />
        ) : (
          <div className={container.grid}>
            <div className="lg:col-span-2 flex flex-col">
              {error && (
                <div className={errorStyles.container}>
                  <p className={errorStyles.message}>{error}</p>
                </div>
              )}
              
              <div className={card.mainFlex}>
                <StepContent 
                  currentStep={currentStep}
                  formData={formData}
                  onInputChange={handleInputChange as StepContentProps['onInputChange']}
                  onToggleInviteSection={setShowInviteSection}
                  onNextStep={nextStep}
                />
              </div>

              <NavigationButtons 
                currentStep={currentStep}
                totalSteps={steps.length}
                isStepValid={isStepValid() as boolean}
                onPrevStep={prevStep}
                onNextStep={nextStep}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>

            <div className="lg:col-span-1">
              <SummaryPanel formData={formData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
