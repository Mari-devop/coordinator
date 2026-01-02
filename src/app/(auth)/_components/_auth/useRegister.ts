import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { authApi } from "@/app/_lib/api/auth";
import { useToast } from "@/app/_contexts/ToastContext";
import { type RegisterFormData } from "@/app/_types/auth";

export function useRegister() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const inviteToken = searchParams.get("invite") || undefined;

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError("");

    try {
      await authApi.register(data.email, data.password, inviteToken);

      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Account created, but automatic login failed. Please log in manually.");
        router.push("/login");
        return;
      }

      toast.success("Account created successfully!");
      router.push("/onboarding");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      
      if (errorMessage.includes("already exists") || errorMessage.includes("email")) {
        setError("An account with this email already exists");
      } else {
        setError(errorMessage);
      }
      
      toast.error(`Registration failed: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onSubmit,
    isLoading,
    error,
  };
}

