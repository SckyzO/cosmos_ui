import { Moon, Sun, Menu } from 'lucide-react';
import type { ReactNode } from 'react';

interface CosmosHeaderProps {
  isDark: boolean;
  toggleDark: () => void;
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  /** Page title shown next to the sidebar toggle */
  title?: string;
  /** Right-side slot — notifications, user menu, etc. */
  actions?: ReactNode;
}

/**
 * Generic top navigation bar.
 * Handles sidebar toggle and dark mode toggle.
 * Use the `actions` slot for app-specific controls (notifications, user menu).
 */
export const CosmosHeader = ({
  isDark,
  toggleDark,
  sidebarCollapsed,
  onToggleSidebar,
  title,
  actions,
}: CosmosHeaderProps) => (
  <header className="dark:bg-gray-dark relative z-30 flex h-[72px] shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 [transition:background-color_500ms_ease,border-color_500ms_ease] dark:border-gray-800">
    {/* Left: sidebar toggle + title */}
    <div className="flex min-w-0 items-center gap-3">
      <button
        onClick={onToggleSidebar}
        title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-white/5"
      >
        {/* TailAdmin asymmetric hamburger icon */}
        <svg className="fill-current" width="16" height="12" viewBox="0 0 16 12">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
          />
        </svg>
      </button>
      {title && (
        <h1 className="truncate text-lg font-semibold text-gray-900 dark:text-white">{title}</h1>
      )}
    </div>

    {/* Right: dark mode + app actions */}
    <div className="flex items-center gap-2">
      {actions}
      <button
        onClick={toggleDark}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
      >
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
    </div>
  </header>
);

// Re-export Menu icon for convenience (used as sidebar toggle fallback)
export { Menu };
