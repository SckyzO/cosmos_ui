import { useState } from 'react';
import { CheckCircle, Info, AlertTriangle, XCircle, X } from 'lucide-react';
import type { ReactNode, ComponentType } from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

interface AlertConfig {
  icon: ComponentType<{ className?: string }>;
  bg: string;
  border: string;
  iconClass: string;
  titleClass: string;
}

const variantConfig: Record<AlertVariant, AlertConfig> = {
  success: {
    icon: CheckCircle,
    bg: 'bg-success-50 dark:bg-success-500/10',
    border: 'border-success-500',
    iconClass: 'text-success-500',
    titleClass: 'text-success-700 dark:text-success-400',
  },
  info: {
    icon: Info,
    bg: 'bg-brand-50 dark:bg-brand-500/10',
    border: 'border-brand-500',
    iconClass: 'text-brand-500',
    titleClass: 'text-brand-700 dark:text-brand-400',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-warning-50 dark:bg-warning-500/10',
    border: 'border-warning-500',
    iconClass: 'text-warning-500',
    titleClass: 'text-warning-700 dark:text-warning-400',
  },
  error: {
    icon: XCircle,
    bg: 'bg-error-50 dark:bg-error-500/10',
    border: 'border-error-500',
    iconClass: 'text-error-500',
    titleClass: 'text-error-700 dark:text-error-400',
  },
};

export const Alert = ({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
}: AlertProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  const { icon: Icon, bg, border, iconClass, titleClass } = variantConfig[variant];

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <div
      className={`flex items-start gap-3 rounded-lg border-l-4 ${border} ${bg} p-4`}
      role="alert"
    >
      <Icon className={`h-5 w-5 shrink-0 ${iconClass}`} />
      <div className="flex-1">
        {title && <p className={`text-sm font-semibold ${titleClass}`}>{title}</p>}
        <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">{children}</p>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          aria-label="Dismiss alert"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
