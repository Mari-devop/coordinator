"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { OnboardingData } from "../../_types/onboardingTypes";
import { steps } from "../_components/_onboarding/constants";
import { 
  ProgressHeader, 
  StepContent, 
  SummaryPanel, 
  InviteSectionWrapper, 
  NavigationButtons 
} from "../_components/_onboarding/components";
import { onboardingStyles } from "../_styles/onboardingStyles";

export default function OnboardingPage() {
  const { data: session, status } = useSession();
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
  const { container, card } = onboardingStyles;

  useEffect(() => {
    if (status === "loading") return; 

    if (!session) {
      router.push("/login");
      return;
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[var(--accentColor)]"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleInputChange = (field: keyof OnboardingData, value: string) => {
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

  const handleSubmit = () => {
    console.log("Onboarding completed:", formData);
  };

  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1:
        return !!(formData.firstName && formData.lastName && formData.mobile);
      case 2:
        return !!(formData.company && formData.role);
      case 3:
        return !!formData.userType;
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
              <div className={card.mainFlex}>
                <StepContent 
                  currentStep={currentStep}
                  formData={formData}
                  onInputChange={(field: string | number | symbol, value: string) => handleInputChange(field as keyof OnboardingData, value)}
                  onToggleInviteSection={setShowInviteSection}
                  onNextStep={nextStep}
                />
              </div>

              <NavigationButtons 
                currentStep={currentStep}
                totalSteps={steps.length}
                isStepValid={isStepValid()}
                onPrevStep={prevStep}
                onNextStep={nextStep}
                onSubmit={handleSubmit}
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
