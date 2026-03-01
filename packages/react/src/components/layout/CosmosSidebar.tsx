import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import type { ComponentType, ReactNode } from 'react';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface NavItem {
  to: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  end?: boolean;
  depth?: boolean;
}

export interface NavSection {
  id: string;
  label: string;
  items: NavItem[];
}

interface CosmosSidebarProps {
  /** Navigation sections rendered in the sidebar body */
  navSections: NavSection[];
  collapsed: boolean;
  /** App name shown in the logo area */
  appName?: string;
  /** Logo icon or image element */
  logo?: ReactNode;
  /** Footer slot — settings links, user info, etc. */
  footer?: ReactNode;
  /** Called when the logo area is clicked */
  onLogoClick?: () => void;
}

// ── NavItem ───────────────────────────────────────────────────────────────────

// NavItem uses CSS class toggling (not conditional rendering) for active/inactive state.
// NavLink's className render prop receives isActive at runtime, so both active and
// inactive elements exist in the DOM simultaneously during navigation — screen readers
// always have a stable element to describe.
const SidebarNavItem = ({
  to,
  icon: Icon,
  label,
  collapsed,
  end = false,
  depth = false,
}: NavItem & { collapsed: boolean }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `flex items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors ${
        depth ? 'py-1.5' : 'py-2.5'
      } ${
        isActive
          ? 'bg-brand-500 text-white'
          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5'
      }`
    }
  >
    <Icon className={`shrink-0 ${depth ? 'h-4 w-4' : 'h-5 w-5'}`} />
    <span className={`whitespace-nowrap ${collapsed ? 'hidden group-hover:inline' : ''}`}>
      {label}
    </span>
  </NavLink>
);

// ── SectionLabel ─────────────────────────────────────────────────────────────

// Dual-DOM pattern: both collapsed (dots) and expanded (text) are rendered,
// visibility toggled via CSS. Avoids layout shift on transition.
const SectionLabel = ({ label, collapsed }: { label: string; collapsed: boolean }) => (
  <>
    <div className={`flex justify-center py-2 ${collapsed ? 'group-hover:hidden' : 'hidden'}`}>
      <svg
        className="fill-current text-gray-400 dark:text-gray-600"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.99915 10.2451C6.96564 10.2451 7.74915 11.0286 7.74915 11.9951V12.0051C7.74915 12.9716 6.96564 13.7551 5.99915 13.7551C5.03265 13.7551 4.24915 12.9716 4.24915 12.0051V11.9951C4.24915 11.0286 5.03265 10.2451 5.99915 10.2451ZM17.9991 10.2451C18.9656 10.2451 19.7491 11.0286 19.7491 11.9951V12.0051C19.7491 12.9716 18.9656 13.7551 17.9991 13.7551C17.0326 13.7551 16.2491 12.9716 16.2491 12.0051V11.9951C16.2491 11.0286 17.0326 10.2451 17.9991 10.2451ZM13.7491 11.9951C13.7491 11.0286 12.9656 10.2451 11.9991 10.2451C11.0326 10.2451 10.2491 11.0286 10.2491 11.9951V12.0051C10.2491 12.9716 11.0326 13.7551 11.9991 13.7551C12.9656 13.7551 13.7491 12.9716 13.7491 12.0051V11.9951Z"
        />
      </svg>
    </div>
    <p
      className={`mb-1.5 text-[11px] font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500 ${
        collapsed ? 'mt-2 hidden group-hover:block' : 'mt-6'
      }`}
    >
      {label}
    </p>
  </>
);

// ── Easter egg: typing 'help' triggers a retro terminal overlay.
// Sequence is detected via keydown accumulation with 1.5s timeout.

const COSMOS_BOOT_LINES = [
  'cosmos_ui v0.1.0',
  '─────────────────────────────────────────',
  'Loading design system...',
  '  [ThemeContext]       OK',
  '  [TokenSystem]        OK',
  '  [ComponentLibrary]   OK',
  '─────────────────────────────────────────',
  'All systems nominal.',
  'Have a great build, developer o7',
];

const BootOverlay = ({ onClose }: { onClose: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const next = () => {
      if (i >= COSMOS_BOOT_LINES.length) {
        setDone(true);
        return;
      }
      setLines((prev) => [...prev, COSMOS_BOOT_LINES[i++]]);
      setTimeout(next, 80 + Math.random() * 60);
    };
    const t = setTimeout(next, 200);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-8"
      onClick={done ? onClose : undefined}
    >
      <div className="max-h-[80vh] w-full max-w-2xl overflow-auto rounded-xl border border-green-800 bg-black p-6 font-mono text-sm leading-relaxed text-green-400 shadow-[0_0_40px_rgba(0,255,0,0.1)]">
        {lines.map((line, idx) => (
          <div key={idx} className={line.startsWith('─') ? 'text-green-800' : ''}>
            {line}
          </div>
        ))}
        {!done && <span className="inline-block h-4 w-2 animate-pulse bg-green-400" />}
        {done && (
          <div className="mt-4 text-xs text-green-700">Click anywhere or press Esc to close</div>
        )}
      </div>
    </div>
  );
};

// ── CosmosSidebar ─────────────────────────────────────────────────────────────

export const CosmosSidebar = ({
  navSections,
  collapsed,
  appName = 'cosmos_ui',
  logo,
  footer,
  onLogoClick,
}: CosmosSidebarProps) => {
  const navigate = useNavigate();
  const [showBoot, setShowBoot] = useState(false);
  // A ref is used instead of state because the buffer value is never rendered —
  // only compared internally to detect the 'help' sequence.
  const helpBufferRef = useRef('');

  // Easter egg: typing 'help' triggers a retro terminal overlay.
  // Sequence is detected via keydown accumulation with 1.5s timeout.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handler = (e: KeyboardEvent) => {
      const next = (helpBufferRef.current + e.key).slice(-4);
      helpBufferRef.current = next;
      if (next === 'help') {
        setShowBoot(true);
        helpBufferRef.current = '';
        return;
      }
      clearTimeout(timer);
      timer = setTimeout(() => {
        helpBufferRef.current = '';
      }, 1500);
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      clearTimeout(timer);
    };
  }, []);

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
      return;
    }
    navigate('/');
  };

  return (
    <>
      {showBoot && <BootOverlay onClose={() => setShowBoot(false)} />}

      <aside
        className={`cosmos-sidebar cosmos-scrollbar group dark:bg-gray-dark flex h-screen shrink-0 flex-col overflow-hidden border-r border-gray-200 bg-white px-5 transition-[width] duration-300 ease-linear dark:border-gray-800 ${
          collapsed ? 'w-[90px] hover:w-[290px]' : 'w-[290px]'
        }`}
      >
        {/* Logo */}
        <div
          className="flex h-[72px] shrink-0 cursor-pointer items-center gap-3 border-b border-gray-200 px-4 dark:border-gray-800"
          onClick={handleLogoClick}
        >
          {logo ? (
            <div className="flex h-8 w-8 shrink-0 items-center justify-center">{logo}</div>
          ) : (
            <div className="bg-brand-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white">
              {appName.charAt(0).toUpperCase()}
            </div>
          )}
          <span
            className={`truncate text-sm font-bold text-gray-900 dark:text-white ${
              collapsed ? 'hidden group-hover:block' : ''
            }`}
          >
            {appName}
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navSections.map((section) => (
            <div key={section.id}>
              <SectionLabel label={section.label} collapsed={collapsed} />
              <div className="flex flex-col gap-0.5">
                {section.items.map((item) => (
                  <SidebarNavItem key={item.to} {...item} collapsed={collapsed} />
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer slot */}
        {footer && (
          <div className="shrink-0 border-t border-gray-200 p-3 dark:border-gray-800">{footer}</div>
        )}
      </aside>
    </>
  );
};
