"use client";
import { useState } from "react";
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

export default function OnboardingWrapper() {
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
    // TODO: Handle form submission
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
              <div className={card.mainFlex}>
                <StepContent 
                  currentStep={currentStep}
                  formData={formData}
                  onInputChange={handleInputChange}
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
