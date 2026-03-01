import { Loader2 } from 'lucide-react';
import type { ComponentType, ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'success';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  children?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-500 text-white shadow-sm hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700 dark:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed',
  error:
    'bg-error-500 text-white shadow-sm hover:bg-error-600 disabled:opacity-50 disabled:cursor-not-allowed',
  warning:
    'bg-warning-500 text-white shadow-sm hover:bg-warning-600 disabled:opacity-50 disabled:cursor-not-allowed',
  success:
    'bg-success-500 text-white shadow-sm hover:bg-success-600 disabled:opacity-50 disabled:cursor-not-allowed',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-3 text-sm',
  md: 'px-5 py-3.5 text-sm',
};

export const Button = ({
  variant = 'primary',
  size = 'sm',
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const base = 'inline-flex items-center gap-2 rounded-lg font-medium transition';
  const classes = [base, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ');

  const iconEl = loading ? (
    <Loader2 className="h-5 w-5 animate-spin" />
  ) : Icon ? (
    <Icon className="h-5 w-5" />
  ) : null;

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {iconEl && iconPosition === 'left' && iconEl}
      {children}
      {iconEl && iconPosition === 'right' && !loading && iconEl}
    </button>
  );
};
