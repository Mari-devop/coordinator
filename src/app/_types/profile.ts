import { z } from "zod";
import { profileSchema } from "@/app/_lib/validations";
import { ProfileData } from "@/app/_lib/api/profile";

export type ProfileFormData = z.infer<typeof profileSchema>;

export type ProfileFieldErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
};

export interface ProfileFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    password?: string;
    confirmPassword?: string;
  };
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading?: boolean;
}

export interface ProfileSummaryProps {
  profileData: ProfileData;
  onFieldUpdate: (field: string, value: string) => void;
  errors: ProfileFieldErrors;
}

