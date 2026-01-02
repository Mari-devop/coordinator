import { API_ENDPOINTS } from "./config/endpoints";
import { apiRequest } from "./client";

export const authApi = {
  async register(email: string, password: string, inviteToken?: string): Promise<{ message: string }> {
    return apiRequest<{ message: string }>(
      API_ENDPOINTS.auth.register,
      {
        method: "POST",
        body: JSON.stringify({ email, password, inviteToken }),
      }
    );
  },

  async forgotPassword(email: string): Promise<{ 
    message: string;
    debug?: {
      emailSent: boolean;
      emailError: string | null;
      hasResendKey: boolean;
    };
  }> {
    return apiRequest<{ 
      message: string;
      debug?: {
        emailSent: boolean;
        emailError: string | null;
        hasResendKey: boolean;
      };
    }>(
      API_ENDPOINTS.auth.forgotPassword,
      {
        method: "POST",
        body: JSON.stringify({ email }),
      }
    );
  },

  async resetPassword(
    token: string,
    password: string,
    confirmPassword: string
  ): Promise<{ message: string }> {
    return apiRequest<{ message: string }>(
      API_ENDPOINTS.auth.resetPassword,
      {
        method: "POST",
        body: JSON.stringify({ token, password, confirmPassword }),
      }
    );
  },
};
