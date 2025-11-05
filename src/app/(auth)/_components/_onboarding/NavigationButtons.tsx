import { onboardingStyles } from "@/app/(auth)/_styles/onboardingStyles";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isStepValid: boolean;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export default function NavigationButtons({ 
  currentStep, 
  totalSteps, 
  isStepValid, 
  onPrevStep, 
  onNextStep, 
  onSubmit,
  isSubmitting = false
}: NavigationButtonsProps) {
  const { navigation } = onboardingStyles;
  
  return (
    <div className={navigation.container}>
      <button
        onClick={onPrevStep}
        disabled={currentStep === 1 || isSubmitting}
        className={`${navigation.button} ${
          currentStep === 1 
            ? navigation.buttonPreviousDisabled
            : navigation.buttonPrevious
        }`}
      >
        ← Previous
      </button>
      
      {currentStep < totalSteps ? (
        <button
          onClick={onNextStep}
          disabled={!isStepValid || isSubmitting}
          className={`${navigation.button} ${
            !isStepValid 
              ? navigation.buttonNextDisabled
              : navigation.buttonNext
          }`}
        >
          Next →
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={!isStepValid || isSubmitting}
          className={`${navigation.button} ${navigation.buttonComplete} ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Saving...' : 'Complete Setup ✨'}
        </button>
      )}
    </div>
  );
}
