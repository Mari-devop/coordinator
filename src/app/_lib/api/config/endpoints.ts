export const API_ENDPOINTS = {
  profile: {
    base: "/api/profile",
    get: () => API_ENDPOINTS.profile.base,
    update: () => API_ENDPOINTS.profile.base,
    password: "/api/profile/password",
  },

  onboarding: {
    base: "/api/onboarding",
    submit: () => API_ENDPOINTS.onboarding.base,
    status: "/api/onboarding/status",
  },

  auth: {
    register: "/api/auth/register",
    login: "/api/auth/[...nextauth]",
    forgotPassword: "/api/auth/forgot-password",
    resetPassword: "/api/auth/reset-password",
  },

  settings: {
    base: "/api/settings",
    get: () => API_ENDPOINTS.settings.base,
    update: () => API_ENDPOINTS.settings.base,
  },
} as const;

