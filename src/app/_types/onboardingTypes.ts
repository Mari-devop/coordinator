export interface OnboardingData {
  firstName: string;
  lastName: string;
  mobile: string;
  company: string;
  role: string;
  userType: "co-worker" | "manager";
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface OnboardingProps {
  currentStep: number;
  formData: OnboardingData;
  showInviteSection: boolean;
  onInputChange: (field: keyof OnboardingData, value: string) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onSubmit: () => void;
  onToggleInviteSection: (show: boolean) => void;
  isStepValid: () => boolean;
}
