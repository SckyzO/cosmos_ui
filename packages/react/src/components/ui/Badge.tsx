import type { ReactNode } from 'react';

export type BadgeVariant = 'brand' | 'success' | 'warning' | 'error' | 'gray';
export type BadgeStyle = 'light' | 'solid' | 'outline';

export interface BadgeProps {
  variant?: BadgeVariant;
  style?: BadgeStyle;
  children: ReactNode;
}

const lightClasses: Record<BadgeVariant, string> = {
  brand: 'bg-brand-50 text-brand-500 dark:bg-brand-500/15',
  success: 'bg-success-50 text-success-500 dark:bg-success-500/15',
  warning: 'bg-warning-50 text-warning-500 dark:bg-warning-500/15',
  error: 'bg-error-50 text-error-500 dark:bg-error-500/15',
  gray: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
};

const solidClasses: Record<BadgeVariant, string> = {
  brand: 'bg-brand-500 text-white',
  success: 'bg-success-500 text-white',
  warning: 'bg-warning-500 text-white',
  error: 'bg-error-500 text-white',
  gray: 'bg-gray-600 text-white',
};

const outlineClasses: Record<BadgeVariant, string> = {
  brand: 'ring-1 ring-inset ring-brand-500 text-brand-500',
  success: 'ring-1 ring-inset ring-success-500 text-success-500',
  warning: 'ring-1 ring-inset ring-warning-500 text-warning-500',
  error: 'ring-1 ring-inset ring-error-500 text-error-500',
  gray: 'ring-1 ring-inset ring-gray-400 text-gray-600 dark:text-gray-300',
};

export const Badge = ({ variant = 'brand', style = 'light', children }: BadgeProps) => {
  const base = 'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium';

  const variantClass =
    style === 'solid'
      ? solidClasses[variant]
      : style === 'outline'
        ? outlineClasses[variant]
        : lightClasses[variant];

  return <span className={`${base} ${variantClass}`}>{children}</span>;
};
