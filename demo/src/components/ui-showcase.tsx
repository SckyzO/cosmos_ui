/**
 * Shared building blocks for cosmos_ui showcase pages.
 *
 * PageHeader   — page title + optional breadcrumb + action slot
 * PageBreadcrumb — breadcrumb nav with home icon
 * SectionCard  — white card with title, optional description, icon slot, and children
 * ColBox       — placeholder box for layout demos
 * LoadingState — spinner with message
 * EmptyState   — empty / error / no-data state
 */

import type { ReactNode, ElementType } from 'react';
import { ChevronRight, Home } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

export type PageBreadcrumbItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

// ── PageBreadcrumb ────────────────────────────────────────────────────────────

export const PageBreadcrumb = ({ items }: { items: PageBreadcrumbItem[] }) => (
  <nav aria-label="breadcrumb">
    <ol className="flex flex-wrap items-center gap-1 text-sm">
      {items.map((item, i) => {
        const isFirst = i === 0;
        const isLast = i === items.length - 1;
        const linkCls =
          'hover:text-brand-500 dark:hover:text-brand-400 flex items-center gap-1 text-gray-500 transition-colors dark:text-gray-400';
        return (
          <li key={item.label} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-4 w-4 text-gray-300 dark:text-gray-600" />}
            {isLast ? (
              <span className="font-medium text-gray-900 dark:text-white">{item.label}</span>
            ) : item.onClick ? (
              <button onClick={item.onClick} className={linkCls}>
                {isFirst && <Home className="h-4 w-4" />}
                {item.label}
              </button>
            ) : (
              <a href={item.href ?? '#'} className={linkCls}>
                {isFirst && <Home className="h-4 w-4" />}
                {item.label}
              </a>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

// ── PageHeader ────────────────────────────────────────────────────────────────

export const PageHeader = ({
  title,
  description,
  breadcrumb,
  actions,
}: {
  title: string;
  description?: string;
  breadcrumb?: ReactNode;
  actions?: ReactNode;
}) => (
  <div className="flex items-start justify-between gap-4">
    <div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      {breadcrumb && <div className="mt-1.5">{breadcrumb}</div>}
      {!breadcrumb && description && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      )}
    </div>
    {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
  </div>
);

// ── SectionCard ───────────────────────────────────────────────────────────────

export const SectionCard = ({
  title,
  desc,
  icon: Icon,
  iconColor = 'text-gray-500 dark:text-gray-400',
  iconBg = 'bg-gray-100 dark:bg-gray-800',
  children,
}: {
  title: string;
  desc?: string;
  icon?: ElementType;
  iconColor?: string;
  iconBg?: string;
  children?: ReactNode;
}) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
    <div className="mb-5 flex items-start gap-3">
      {Icon && (
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
      )}
      <div className={Icon ? 'pt-0.5' : ''}>
        <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">{title}</h3>
        {desc && <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">{desc}</p>}
      </div>
    </div>
    {children}
  </div>
);

// ── ColBox ────────────────────────────────────────────────────────────────────

export const ColBox = ({ label, height = 80 }: { label: string; height?: number }) => (
  <div
    className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
    style={{ minHeight: height }}
  >
    <span className="font-mono text-sm font-semibold text-gray-400 dark:text-gray-500">
      {label}
    </span>
  </div>
);

// ── LoadingState ──────────────────────────────────────────────────────────────

export const LoadingState = ({ message = 'Loading…' }: { message?: string }) => (
  <div className="flex flex-col items-center justify-center gap-3 py-12">
    <div className="border-t-brand-500 h-8 w-8 animate-spin rounded-full border-2 border-gray-200 dark:border-gray-700" />
    <p className="text-sm text-gray-400 dark:text-gray-500">{message}</p>
  </div>
);

// ── EmptyState ────────────────────────────────────────────────────────────────

export const EmptyState = ({
  title = 'No data',
  description,
  action,
  icon: Icon,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  icon?: ElementType;
}) => (
  <div className="flex flex-col items-center gap-3 py-12 text-center">
    {Icon && (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <Icon className="h-6 w-6 text-gray-400 dark:text-gray-500" />
      </div>
    )}
    <p className="text-base font-medium text-gray-700 dark:text-gray-300">{title}</p>
    {description && (
      <p className="max-w-xs text-sm text-gray-400 dark:text-gray-500">{description}</p>
    )}
    {action && <div className="mt-1">{action}</div>}
  </div>
);
