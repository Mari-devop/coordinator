import { z } from "zod";
import { onboardingSchema } from "@/app/_lib/validations";

export interface OnboardingData {
  firstName: string;
  lastName: string;
  mobile: string;
  company: string;
  role: string;
  userType: "co-worker" | "manager";
}

export type OnboardingFormData = z.infer<typeof onboardingSchema>;

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
