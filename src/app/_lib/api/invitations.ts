import { API_ENDPOINTS } from "./config/endpoints";
import { apiRequest } from "./client";

export interface InviteResponse {
  message: string;
  invitationId?: string;
  teamMemberId?: string;
  action: "invited" | "added";
  debug?: {
    emailSent: boolean;
    emailError: string | null;
    hasResendKey: boolean;
    inviteUrl?: string;
  };
}

export const invitationsApi = {
  async sendInvite(email: string): Promise<InviteResponse> {
    return apiRequest<InviteResponse>(
      API_ENDPOINTS.invitations.send(),
      {
        method: "POST",
        body: JSON.stringify({ email }),
      }
    );
  },
};

