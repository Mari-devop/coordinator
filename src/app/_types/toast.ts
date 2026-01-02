export type ToastType = "info" | "success" | "error" | "warning";

export interface ToastAction {
  label: string;
  action: () => void;
  variant?: "primary" | "secondary";
}

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
  actions?: ToastAction[]; 
}

export interface ToastContextType {
  showToast: (toast: Omit<Toast, "id">) => void;
  hideToast: (id: string) => void;
  success: (message: string, options?: Partial<Omit<Toast, "id" | "message" | "type">>) => void;
  error: (message: string, options?: Partial<Omit<Toast, "id" | "message" | "type">>) => void;
  warning: (message: string, options?: Partial<Omit<Toast, "id" | "message" | "type">>) => void;
  info: (message: string, options?: Partial<Omit<Toast, "id" | "message" | "type">>) => void;
}

