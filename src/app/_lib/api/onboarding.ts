import { API_ENDPOINTS } from "./config/endpoints";
import { apiRequest } from "./client";

export interface OnboardingData {
  firstName: string;
  lastName: string;
  mobile: string;
  company: string;
  role: string;
  userType: "co-worker" | "manager";
}

export const onboardingApi = {
  async submitOnboarding(data: OnboardingData): Promise<{ message: string }> {
    return apiRequest<{ message: string }>(
      API_ENDPOINTS.onboarding.submit(),
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
  },
  async checkOnboardingStatus(): Promise<{ completed: boolean }> {
    return apiRequest<{ completed: boolean }>(
      API_ENDPOINTS.onboarding.status
    );
  },
};

