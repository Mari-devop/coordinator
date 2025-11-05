import { API_ENDPOINTS } from "./config/endpoints";
import { apiRequest } from "./client";

export interface SettingsData {
  emailNotifications: boolean;
  managerMode: boolean;
}

export const settingsApi = {
  async getSettings(): Promise<SettingsData> {
    return apiRequest<SettingsData>(API_ENDPOINTS.settings.get());
  },

  async updateSettings(settings: Partial<SettingsData>): Promise<{
    message: string;
    settings: SettingsData;
  }> {
    return apiRequest<{
      message: string;
      settings: SettingsData;
    }>(
      API_ENDPOINTS.settings.update(),
      {
        method: "PATCH",
        body: JSON.stringify(settings),
      }
    );
  },
};

