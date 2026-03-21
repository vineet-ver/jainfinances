"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
  action?: { label: string; onClick: () => void };
}

interface ToastContextType {
  toast: (
    message: string,
    options?: {
      variant?: ToastVariant;
      duration?: number;
      action?: { label: string; onClick: () => void };
    }
  ) => void;
  toasts: Toast[];
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (
      message: string,
      options?: {
        variant?: ToastVariant;
        duration?: number;
        action?: { label: string; onClick: () => void };
      }
    ) => {
      const id = Date.now().toString();
      const variant = options?.variant || "info";
      const duration = options?.duration || 4000;

      const newToast: Toast = {
        id,
        message,
        variant,
        duration,
        action: options?.action,
      };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => removeToast(id), duration);
      }
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toast, toasts, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

// Toast Item Component
export function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
    error: <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
  };

  const variants = {
    success: {
      bg: "bg-emerald-50 dark:bg-emerald-950/20",
      border: "border-emerald-200 dark:border-emerald-800",
      text: "text-emerald-900 dark:text-emerald-100",
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950/20",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-900 dark:text-red-100",
    },
    warning: {
      bg: "bg-amber-50 dark:bg-amber-950/20",
      border: "border-amber-200 dark:border-amber-800",
      text: "text-amber-900 dark:text-amber-100",
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/20",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-900 dark:text-blue-100",
    },
  };

  const style = variants[toast.variant];

  return (
    <motion.div
      initial={{ opacity: 0, x: 384, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 384, y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className={`relative flex items-center gap-3 rounded-lg border ${style.bg} ${style.border} ${style.text} px-4 py-3 shadow-lg`}
    >
      {icons[toast.variant]}

      <div className="flex-1">
        <p className="text-sm font-medium">{toast.message}</p>
      </div>

      {toast.action && (
        <button
          onClick={() => {
            toast.action?.onClick();
            onClose();
          }}
          className="ml-2 text-xs font-semibold opacity-75 hover:opacity-100"
        >
          {toast.action.label}
        </button>
      )}

      <button
        onClick={onClose}
        className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  );
}
