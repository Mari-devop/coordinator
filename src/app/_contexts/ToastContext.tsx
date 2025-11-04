"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { type Toast, type ToastContextType, type ToastType } from "@/app/_types/toast";
import ToastComponent from "@/app/_components/toast/Toast";
import { toastStyles } from "@/app/_styles/toastStyles";

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = {
      ...toast,
      id,
    };
    setToasts((prev) => [...prev, newToast]);
  }, []);

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const createToastHelper = useCallback(
    (type: ToastType) => {
      return (
        message: string,
        options?: Partial<Omit<Toast, "id" | "message" | "type">>
      ) => {
        showToast({
          message,
          type,
          ...options,
        });
      };
    },
    [showToast]
  );

  const value: ToastContextType = {
    showToast,
    hideToast,
    success: createToastHelper("success"),
    error: createToastHelper("error"),
    warning: createToastHelper("warning"),
    info: createToastHelper("info"),
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toasts.length > 0 && (
        <div className={toastStyles.container}>
          {toasts.map((toast) => (
            <ToastComponent
              key={toast.id}
              toast={toast}
              onClose={() => hideToast(toast.id)}
            />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

