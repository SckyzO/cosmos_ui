import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  LayoutDashboard,
  Palette,
  Type,
  Square,
  ToggleLeft,
  Table2,
  BarChart2,
  Bell,
  Layout,
  Settings,
} from 'lucide-react';
import { CosmosLayout } from '@cosmos/components/layout/CosmosLayout';
import { useTheme, ACCENTS, LIGHT_THEMES, DARK_THEMES } from '@cosmos/contexts/ThemeContext';
import type { NavSection } from '@cosmos/components/layout/CosmosSidebar';
import '@cosmos-styles/app.css';

// ── Nav config ────────────────────────────────────────────────────────────────

const NAV: NavSection[] = [
  {
    id: 'main',
    label: 'Overview',
    items: [{ to: '/', icon: LayoutDashboard, label: 'Dashboard', end: true }],
  },
  {
    id: 'theme',
    label: 'Design System',
    items: [
      { to: '/theme', icon: Palette, label: 'Theme & Colors' },
      { to: '/typography', icon: Type, label: 'Typography' },
      { to: '/components', icon: Square, label: 'Components' },
      { to: '/forms', icon: ToggleLeft, label: 'Form Elements' },
      { to: '/tables', icon: Table2, label: 'Data Tables' },
      { to: '/charts', icon: BarChart2, label: 'Charts' },
      { to: '/feedback', icon: Bell, label: 'Feedback' },
      { to: '/layout', icon: Layout, label: 'Layout Patterns' },
    ],
  },
  {
    id: 'settings',
    label: 'Config',
    items: [{ to: '/settings', icon: Settings, label: 'Settings' }],
  },
];

// ── Pages ─────────────────────────────────────────────────────────────────────

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">cosmos_ui</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Design System Kit — React + Tailwind CSS v4
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: 'Components',
            value: '50+',
            color: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
          },
          {
            label: 'Themes',
            value: '8',
            color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
          },
          {
            label: 'Accents',
            value: '5',
            color: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
          },
          {
            label: 'Icons',
            value: '∞',
            color: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
          },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.label}</p>
            <p
              className={`mt-2 text-3xl font-bold ${card.color} inline-block rounded-lg px-2 py-0.5`}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
          Getting started
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Navigate the sidebar to explore the design system. Use the theme selector (Settings →
          Appearance) to switch between dark/light palettes and accent colors. Try typing{' '}
          <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-xs dark:border-gray-700 dark:bg-gray-800">
            help
          </kbd>{' '}
          anywhere.
        </p>
      </div>
    </div>
  );
}

function ThemePage() {
  const { mode, accent, lightTheme, darkTheme, setMode, setAccent, setLightTheme, setDarkTheme } =
    useTheme();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Theme & Colors</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Accent colors, dark/light palettes, and design tokens.
        </p>
      </div>

      {/* Mode toggle */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Mode</h3>
        <div className="flex gap-3">
          {(['dark', 'light'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium capitalize transition-colors ${
                mode === m
                  ? 'border-brand-500 bg-brand-500 text-white'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </section>

      {/* Accent */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">Accent color</h3>
        <div className="flex gap-3">
          {ACCENTS.map((a) => (
            <button
              key={a.id}
              onClick={() => setAccent(a.id)}
              title={a.label}
              className="h-8 w-8 rounded-full transition-transform hover:scale-110"
              style={{
                backgroundColor: a.hex,
                outline: accent === a.id ? `3px solid ${a.hex}` : 'none',
                outlineOffset: '3px',
              }}
            />
          ))}
        </div>
      </section>

      {/* Light palettes */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
          Light palettes
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LIGHT_THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setLightTheme(t.id)}
              className="rounded-lg border p-3 text-left transition-all hover:scale-105"
              style={{
                backgroundColor: t.preview.surface,
                borderColor: lightTheme === t.id && mode === 'light' ? '#465fff' : t.preview.border,
                borderWidth: lightTheme === t.id && mode === 'light' ? '2px' : '1px',
              }}
            >
              <div className="text-sm font-medium" style={{ color: '#101828' }}>
                {t.label}
              </div>
              <div className="mt-0.5 text-xs" style={{ color: '#667085' }}>
                {t.desc}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Dark palettes */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
          Dark palettes
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {DARK_THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setDarkTheme(t.id)}
              className="rounded-lg border p-3 text-left transition-all hover:scale-105"
              style={{
                backgroundColor: t.preview.surface,
                borderColor: darkTheme === t.id && mode === 'dark' ? '#465fff' : t.preview.border,
                borderWidth: darkTheme === t.id && mode === 'dark' ? '2px' : '1px',
              }}
            >
              <div className="text-sm font-medium" style={{ color: '#e5e7eb' }}>
                {t.label}
              </div>
              <div className="mt-0.5 text-xs" style={{ color: '#9ca3af' }}>
                {t.desc}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Brand palette */}
      <section className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-white">
          Brand palette
        </h3>
        <div className="flex gap-1">
          {['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'].map(
            (shade) => (
              <div key={shade} className="flex-1">
                <div
                  className="h-10 rounded"
                  style={{ backgroundColor: `var(--color-brand-${shade})` }}
                />
                <div className="mt-1 text-center text-xs text-gray-500 dark:text-gray-400">
                  {shade}
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800">
        <Square className="h-8 w-8 text-gray-400" />
      </div>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Coming soon</p>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CosmosLayout navSections={NAV} appName="cosmos_ui" title="cosmos_ui" />}>
          <Route index element={<DashboardPage />} />
          <Route path="theme" element={<ThemePage />} />
          <Route path="typography" element={<PlaceholderPage title="Typography" />} />
          <Route path="components" element={<PlaceholderPage title="Components" />} />
          <Route path="forms" element={<PlaceholderPage title="Form Elements" />} />
          <Route path="tables" element={<PlaceholderPage title="Data Tables" />} />
          <Route path="charts" element={<PlaceholderPage title="Charts" />} />
          <Route path="feedback" element={<PlaceholderPage title="Feedback" />} />
          <Route path="layout" element={<PlaceholderPage title="Layout Patterns" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
