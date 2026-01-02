import { API_ENDPOINTS } from "./config/endpoints";
import { apiRequest } from "./client";

export interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  userType?: string | null;
}

export const profileApi = {
  async getProfile(): Promise<ProfileData> {
    return apiRequest<ProfileData>(API_ENDPOINTS.profile.get());
  },
  async updateProfile(field: string, value: string): Promise<ProfileData> {
    const response = await apiRequest<{ user: ProfileData }>(
      API_ENDPOINTS.profile.update(),
      {
        method: "PATCH",
        body: JSON.stringify({ field, value }),
      }
    );
    return response.user;
  },
  async changePassword(currentPassword: string, newPassword: string): Promise<{ message: string }> {
    return apiRequest<{ message: string }>(
      API_ENDPOINTS.profile.password,
      {
        method: "PATCH",
        body: JSON.stringify({ currentPassword, newPassword }),
      }
    );
  },
};

