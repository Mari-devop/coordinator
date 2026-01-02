"use client";
import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { onboardingApi } from "@/app/_lib/api/onboarding";
import { OnboardingData } from "@/app/_types/onboardingTypes";
import { steps } from "@/app/(auth)/_components/_onboarding/constants";
import {
  StepContent,
  SummaryPanel,
  InviteSectionWrapper,
  NavigationButtons
} from "@/app/(auth)/_components/_onboarding";
import { onboardingStyles } from "@/app/(auth)/_styles/onboardingStyles";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(true);
  const { container, card, error: errorStyles, loading, formContainer, summaryContainer } = onboardingStyles;

  const isStepValid = useCallback((): boolean => {
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
  }, [formData, currentStep]);

  const handleSubmit = async () => {
    const stepValid = isStepValid();

    if (!stepValid) {
      setError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await onboardingApi.submitOnboarding(formData);
      await new Promise(resolve => setTimeout(resolve, 100));
      window.location.href = "/dashboard";
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    const checkOnboardingStatus = async () => {
      try {
        const data = await onboardingApi.checkOnboardingStatus();

        if (data.completed) {
          router.push("/dashboard");
          return;
        }
      } catch (error) {
        console.error("Error checking onboarding status:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkOnboardingStatus();
  }, [session, status, router]);

  if (status === "loading" || isChecking) {
    return (
      <div className={loading.container}>
        <div className={loading.spinner}></div>
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
      if (currentStep + 1 === steps.length) {
        setShowInviteSection(false);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className={container.main}>
      <div className={container.content}>
        {showInviteSection && currentStep < steps.length ? (
          <InviteSectionWrapper
            formData={formData}
            onClose={() => setShowInviteSection(false)}
            onPrevStep={prevStep}
            onNextStep={nextStep}
            currentStep={currentStep}
            totalSteps={steps.length}
          />
        ) : (
          <div className={container.gridWithRows}>
            <div className={formContainer.container}>
              {error && (
                <div className={errorStyles.container}>
                  <p className={errorStyles.message}>{error}</p>
                </div>
              )}

              <div className={`${card.mainFlex} ${currentStep === 3 ? 'w-full' : formContainer.card}`}>
                <StepContent
                  currentStep={currentStep}
                  formData={formData}
                  onInputChange={(field: string | number | symbol, value: string) => handleInputChange(field as keyof OnboardingData, value)}
                  onToggleInviteSection={setShowInviteSection}
                  onNextStep={nextStep}
                />
              </div>

              <div className={formContainer.buttonsContainer}>
                <NavigationButtons
                  currentStep={currentStep}
                  totalSteps={steps.length}
                  isStepValid={isStepValid()}
                  onPrevStep={prevStep}
                  onNextStep={nextStep}
                  onSubmit={() => {
                    return handleSubmit();
                  }}
                  isSubmitting={isSubmitting}
                />
              </div>
            </div>

            <div className={summaryContainer.container}>
              <SummaryPanel formData={formData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
