import { useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CosmosSidebar } from './CosmosSidebar';
import { CosmosHeader } from './CosmosHeader';
import { MatrixBackground } from './MatrixBackground';
import { useTheme } from '../../contexts/ThemeContext';
import type { NavSection } from './CosmosSidebar';
import type { ReactNode } from 'react';

interface CosmosLayoutProps {
  navSections: NavSection[];
  appName?: string;
  logo?: ReactNode;
  sidebarFooter?: ReactNode;
  /** Slot for header right-side actions (notifications, user menu) */
  headerActions?: ReactNode;
  /** Page title override. Defaults to current route label. */
  title?: string;
  /** Use children instead of <Outlet /> (for non-router usage) */
  children?: ReactNode;
}

/**
 * Full-page application shell: sidebar + header + main content area.
 *
 * Usage with React Router:
 *   <Route element={<CosmosLayout navSections={nav} />}>
 *     <Route index element={<Dashboard />} />
 *   </Route>
 *
 * Usage without router (children mode):
 *   <CosmosLayout navSections={nav}>
 *     <MyPage />
 *   </CosmosLayout>
 */
export const CosmosLayout = ({
  navSections,
  appName,
  logo,
  sidebarFooter,
  headerActions,
  title,
  children,
}: CosmosLayoutProps) => {
  const { mode } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  // Derive isDark from ThemeContext — no local state needed.
  // ThemeContext is the single source of truth; any toggle updates it via event.
  const isDark = mode === 'dark';

  useEffect(() => {
    const t = setTimeout(() => setPageLoading(false), 300);
    return () => clearTimeout(t);
  }, []);

  // Sync DOM root class when ThemeContext's mode changes (e.g. from settings page).
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    if (rootRef.current) rootRef.current.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleToggleDark = () => {
    const next = !isDark;
    // Optimistic DOM update before ThemeContext re-renders via the custom event.
    document.documentElement.classList.toggle('dark', next);
    if (rootRef.current) rootRef.current.classList.toggle('dark', next);
    localStorage.setItem('cosmos.theme.mode', next ? 'dark' : 'light');
    // Dispatch 'cosmos-theme-mode' so ThemeContext updates its mode state.
    // The header lives outside ThemeProvider, so a custom event is the bridge.
    window.dispatchEvent(new CustomEvent('cosmos-theme-mode', { detail: { dark: next } }));
  };

  return (
    <>
      {pageLoading && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-white dark:bg-gray-950">
          <div className="border-brand-500 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent" />
        </div>
      )}

      <div ref={rootRef} className={isDark ? 'cosmos-root dark' : 'cosmos-root'}>
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-950">
          <CosmosSidebar
            navSections={navSections}
            collapsed={sidebarCollapsed}
            appName={appName}
            logo={logo}
            footer={sidebarFooter}
          />

          <div className="flex flex-1 flex-col overflow-hidden">
            <CosmosHeader
              isDark={isDark}
              toggleDark={handleToggleDark}
              sidebarCollapsed={sidebarCollapsed}
              onToggleSidebar={() => setSidebarCollapsed((p) => !p)}
              title={title}
              actions={headerActions}
            />
            <main className="cosmos-scrollbar flex flex-1 flex-col overflow-y-auto p-6">
              {children ?? <Outlet />}
            </main>
          </div>
        </div>
      </div>

      {/* Canvas rendered outside cosmos-root so CSS z-index stacking works correctly */}
      <MatrixBackground />
    </>
  );
};
