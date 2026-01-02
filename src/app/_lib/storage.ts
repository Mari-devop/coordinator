const REMEMBER_ME_KEY = "remembered_email";

export const storage = {
  saveEmail: (email: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(REMEMBER_ME_KEY, email);
    }
  },

  getEmail: (): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(REMEMBER_ME_KEY);
    }
    return null;
  },

  clearEmail: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(REMEMBER_ME_KEY);
    }
  },
};

