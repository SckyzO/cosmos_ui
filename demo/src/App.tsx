import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutDashboard, Palette, Settings, Square } from 'lucide-react';
import { CosmosLayout } from '@cosmos/components/layout/CosmosLayout';
import { useTheme, ACCENTS, LIGHT_THEMES, DARK_THEMES } from '@cosmos/contexts/ThemeContext';
import type { NavSection } from '@cosmos/components/layout/CosmosSidebar';
import '@cosmos-styles/app.css';

// ── Settings page ─────────────────────────────────────────────────────────────

import { SettingsPage } from './pages/SettingsPage';

// ── UI Library pages ──────────────────────────────────────────────────────────

import { UILibraryPage } from './pages/UILibraryPage';
import { AccordionPage } from './pages/ui/AccordionPage';
import { AlertsPage } from './pages/ui/AlertsPage';
import { AvatarsPage } from './pages/ui/AvatarsPage';
import { BadgesPage } from './pages/ui/BadgesPage';
import { BreadcrumbPage } from './pages/ui/BreadcrumbPage';
import { ButtonsGroupPage } from './pages/ui/ButtonsGroupPage';
import { ButtonsPage } from './pages/ui/ButtonsPage';
import { CardsPage } from './pages/ui/CardsPage';
import { CarouselPage } from './pages/ui/CarouselPage';
import { DrawerPage } from './pages/ui/DrawerPage';
import { DropdownsPage } from './pages/ui/DropdownsPage';
import { EmptyStatePage } from './pages/ui/EmptyStatePage';
import { FormElementsPage } from './pages/ui/FormElementsPage';
import { LinksPage } from './pages/ui/LinksPage';
import { ListPage } from './pages/ui/ListPage';
import { ModalsPage } from './pages/ui/ModalsPage';
import { NotificationsPage } from './pages/ui/NotificationsPage';
import { OtpInputPage } from './pages/ui/OtpInputPage';
import { PaginationPage } from './pages/ui/PaginationPage';
import { PopoversPage } from './pages/ui/PopoversPage';
import { ProgressBarPage } from './pages/ui/ProgressBarPage';
import { RangeSliderPage } from './pages/ui/RangeSliderPage';
import { RibbonsPage } from './pages/ui/RibbonsPage';
import { SkeletonPage } from './pages/ui/SkeletonPage';
import { SpinnersPage } from './pages/ui/SpinnersPage';
import { StatsCardsPage } from './pages/ui/StatsCardsPage';
import { StepperPage } from './pages/ui/StepperPage';
import { TabsPage } from './pages/ui/TabsPage';
import { TagInputPage } from './pages/ui/TagInputPage';
import { TimelinePage } from './pages/ui/TimelinePage';
import { ToastPage } from './pages/ui/ToastPage';
import { TooltipsPage } from './pages/ui/TooltipsPage';

// ── Nav config ────────────────────────────────────────────────────────────────

const NAV: NavSection[] = [
  {
    id: 'main',
    label: 'Overview',
    items: [
      { to: '/', icon: LayoutDashboard, label: 'Dashboard', end: true },
      { to: '/theme', icon: Palette, label: 'Theme & Colors' },
      { to: '/ui', icon: Square, label: 'UI Library' },
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
            value: '32',
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
            label: 'HTML Templates',
            value: '✓',
            color: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
          },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.label}</p>
            <p
              className={`mt-2 inline-block rounded-lg px-2 py-0.5 text-3xl font-bold ${card.color}`}
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
          Navigate the sidebar to explore the design system. Use{' '}
          <strong className="text-gray-900 dark:text-white">Theme & Colors</strong> to switch
          palettes and accents. Browse{' '}
          <strong className="text-gray-900 dark:text-white">UI Library</strong> for all 32
          components. Try typing{' '}
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

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CosmosLayout navSections={NAV} appName="cosmos_ui" />}>
          <Route index element={<DashboardPage />} />
          <Route path="theme" element={<ThemePage />} />
          <Route path="settings" element={<SettingsPage />} />

          {/* UI Library hub */}
          <Route path="ui" element={<UILibraryPage />} />

          {/* 32 UI component pages */}
          <Route path="ui/accordion" element={<AccordionPage />} />
          <Route path="ui/alerts" element={<AlertsPage />} />
          <Route path="ui/avatars" element={<AvatarsPage />} />
          <Route path="ui/badges" element={<BadgesPage />} />
          <Route path="ui/breadcrumb" element={<BreadcrumbPage />} />
          <Route path="ui/buttons-group" element={<ButtonsGroupPage />} />
          <Route path="ui/buttons" element={<ButtonsPage />} />
          <Route path="ui/cards" element={<CardsPage />} />
          <Route path="ui/carousel" element={<CarouselPage />} />
          <Route path="ui/drawer" element={<DrawerPage />} />
          <Route path="ui/dropdowns" element={<DropdownsPage />} />
          <Route path="ui/empty-state" element={<EmptyStatePage />} />
          <Route path="ui/form-elements" element={<FormElementsPage />} />
          <Route path="ui/links" element={<LinksPage />} />
          <Route path="ui/list" element={<ListPage />} />
          <Route path="ui/modals" element={<ModalsPage />} />
          <Route path="ui/notifications" element={<NotificationsPage />} />
          <Route path="ui/otp-input" element={<OtpInputPage />} />
          <Route path="ui/pagination" element={<PaginationPage />} />
          <Route path="ui/popovers" element={<PopoversPage />} />
          <Route path="ui/progress-bar" element={<ProgressBarPage />} />
          <Route path="ui/range-slider" element={<RangeSliderPage />} />
          <Route path="ui/ribbons" element={<RibbonsPage />} />
          <Route path="ui/skeleton" element={<SkeletonPage />} />
          <Route path="ui/spinners" element={<SpinnersPage />} />
          <Route path="ui/stats-cards" element={<StatsCardsPage />} />
          <Route path="ui/stepper" element={<StepperPage />} />
          <Route path="ui/tabs" element={<TabsPage />} />
          <Route path="ui/tag-input" element={<TagInputPage />} />
          <Route path="ui/timeline" element={<TimelinePage />} />
          <Route path="ui/toast" element={<ToastPage />} />
          <Route path="ui/tooltips" element={<TooltipsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
