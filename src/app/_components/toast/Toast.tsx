"use client";
import { useEffect } from "react";
import Icon from "@/app/_components/icons/Icon";
import { toastStyles } from "@/app/_styles/toastStyles";
import { type Toast } from "@/app/_types/toast";
import { cn } from "@/app/_lib/cn";

interface ToastProps {
  toast: Toast;
  onClose: () => void;
}

const iconMap = {
  info: "info",
  success: "check",
  error: "info", 
  warning: "info",
} as const;

export default function ToastComponent({ toast, onClose }: ToastProps) {
  const { message, type, duration = 5000, actions } = toast;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const styles = toastStyles.toast[type];
  const iconName = iconMap[type];

  return (
    <div className={cn(toastStyles.toast.base, styles)}>
      <div className={toastStyles.icon.container}>
        <Icon
          name={iconName}
          className={toastStyles.icon[type]}
          width={20}
          height={20}
        />
      </div>

      <div className={toastStyles.content}>
        <p className={toastStyles.message}>{message}</p>
        
        {actions && actions.length > 0 && (
          <div className={toastStyles.actions}>
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className={cn(
                  toastStyles.actionButton.base,
                  action.variant === "primary"
                    ? toastStyles.actionButton.primary
                    : toastStyles.actionButton.secondary
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={onClose}
        className={toastStyles.closeButton}
        aria-label="Close toast"
      >
        <Icon name="close" width={16} height={16} />
      </button>
    </div>
  );
}

