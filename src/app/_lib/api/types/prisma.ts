import { User as PrismaUser } from "@prisma/client";

export interface UserWithOnboardingFields {
  id: string;
  email: string;
  name: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  mobile: string | null;
  company: string | null;
  role: string | null;
  userType: string | null;
}

export type User = PrismaUser & {
  firstName?: string | null;
  lastName?: string | null;
  mobile?: string | null;
  company?: string | null;
  role?: string | null;
  userType?: string | null;
};

export type ProfileUpdateInput = {
  firstName?: string;
  lastName?: string;
  mobile?: string;
  email?: string;
  name?: string;
};

export type OnboardingUpdateInput = {
  firstName: string;
  lastName: string;
  mobile: string;
  company: string;
  role: string;
  userType: "co-worker" | "manager";
  name: string;
};

export function asUser(user: PrismaUser | null): User | null {
  return user as User | null;
}

export function asUserOnboarding(user: PrismaUser | null): UserWithOnboardingFields | null {
  return user as UserWithOnboardingFields | null;
}

