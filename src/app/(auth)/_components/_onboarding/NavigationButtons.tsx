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
  
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isStepValid) {
      return;
    }
    
    if (isSubmitting) {
      return;
    }
    
    if (!onSubmit) {
      return;
    }
    
    try {
      await onSubmit();
    } catch {
      // Error handling is done in the parent component
    }
  };
  
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
          onClick={handleSubmit}
          disabled={!isStepValid || isSubmitting}
          className={`${navigation.button} ${navigation.buttonComplete} ${
            (!isStepValid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="button"
        >
          {isSubmitting ? 'Saving...' : 'Complete Setup ✨'}
        </button>
      )}
    </div>
  );
}
