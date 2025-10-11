import { onboardingStyles } from "../../../_styles/onboardingStyles";

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  isStepValid: boolean;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
}

export default function NavigationButtons({ 
  currentStep, 
  totalSteps, 
  isStepValid, 
  onPrevStep, 
  onNextStep, 
  onSubmit 
}: NavigationButtonsProps) {
  const { navigation } = onboardingStyles;
  
  return (
    <div className={navigation.container}>
      <button
        onClick={onPrevStep}
        disabled={currentStep === 1}
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
          disabled={!isStepValid}
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
          className={`${navigation.button} ${navigation.buttonComplete}`}
        >
          Complete Setup ✨
        </button>
      )}
    </div>
  );
}
