/**
 * SettingsPage — application settings with appearance controls.
 *
 * Appearance section: dark/light mode toggle, accent color picker,
 * dark palette grid, light palette grid. All preferences are persisted
 * to localStorage via ThemeContext — no server save required.
 */

import { useState, useCallback } from 'react';
import { Check, Paintbrush, Info } from 'lucide-react';
import {
  useTheme,
  ACCENTS,
  LIGHT_THEMES,
  DARK_THEMES,
  type AccentColor,
  type LightTheme,
  type DarkTheme,
  type PaletteMeta,
} from '@cosmos/contexts/ThemeContext';
import { PageHeader, PageBreadcrumb, SectionCard } from '../components/ui-showcase';

// ── Palette preview card ───────────────────────────────────────────────────────

const PaletteCard = ({
  meta,
  active,
  onClick,
}: {
  meta: PaletteMeta;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`group relative flex flex-col overflow-hidden rounded-xl border-2 transition-all ${
      active
        ? 'border-brand-500 shadow-sm'
        : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
    }`}
  >
    {/* Color preview mini-mockup */}
    <div
      className="flex h-16 w-full flex-col gap-0.5 p-2"
      style={{ backgroundColor: meta.preview.bg }}
    >
      {/* Simulated sidebar strip */}
      <div className="h-2 w-8 rounded-sm" style={{ backgroundColor: meta.preview.border }} />
      {/* Simulated card */}
      <div
        className="mt-1 flex-1 rounded-sm"
        style={{
          backgroundColor: meta.preview.surface,
          border: `1px solid ${meta.preview.border}`,
        }}
      />
    </div>

    {/* Label row */}
    <div
      className="flex items-center justify-between px-2.5 py-1.5"
      style={{
        backgroundColor: meta.preview.surface,
        borderTop: `1px solid ${meta.preview.border}`,
      }}
    >
      <div>
        <p
          className="text-left text-xs font-semibold"
          style={{ color: active ? undefined : '#6b7280' }}
        >
          {meta.label}
        </p>
        <p className="text-left text-[10px]" style={{ color: '#9ca3af' }}>
          {meta.desc}
        </p>
      </div>
      {active && (
        <div className="bg-brand-500 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
          <Check className="h-2.5 w-2.5 text-white" />
        </div>
      )}
    </div>
  </button>
);

// ── Accent color swatch ────────────────────────────────────────────────────────

const AccentSwatch = ({
  hex,
  label,
  active,
  onClick,
}: {
  hex: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    title={label}
    className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all ${
      active
        ? 'scale-110 border-gray-400 dark:border-gray-200'
        : 'border-transparent hover:scale-105'
    }`}
    style={{ backgroundColor: hex }}
  >
    {active && <Check className="h-3.5 w-3.5 text-white drop-shadow" />}
  </button>
);

// ── Sub-section label ──────────────────────────────────────────────────────────

const SubLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-2.5 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
    {children}
  </p>
);

// ── Mode toggle button ─────────────────────────────────────────────────────────

const ModeButton = ({
  label,
  isActive,
  previewBg,
  previewSurface,
  previewBorder,
  onClick,
}: {
  label: string;
  isActive: boolean;
  previewBg: string;
  previewSurface: string;
  previewBorder: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-1 flex-col overflow-hidden rounded-xl border-2 transition-all ${
      isActive
        ? 'border-brand-500 shadow-sm'
        : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
    }`}
  >
    {/* Mini UI preview */}
    <div className="flex h-20 w-full flex-col gap-1 p-3" style={{ backgroundColor: previewBg }}>
      <div className="flex gap-1.5">
        <div className="h-1.5 w-12 rounded-full" style={{ backgroundColor: previewBorder }} />
        <div className="h-1.5 w-8 rounded-full" style={{ backgroundColor: previewBorder }} />
      </div>
      <div
        className="mt-1 flex-1 rounded-lg p-1.5"
        style={{ backgroundColor: previewSurface, border: `1px solid ${previewBorder}` }}
      >
        <div className="h-1.5 w-10 rounded-full" style={{ backgroundColor: previewBorder }} />
        <div className="mt-1 h-1.5 w-16 rounded-full" style={{ backgroundColor: previewBorder }} />
      </div>
    </div>

    {/* Label */}
    <div
      className="flex items-center justify-between px-3 py-2"
      style={{
        backgroundColor: previewSurface,
        borderTop: `1px solid ${previewBorder}`,
      }}
    >
      <span className="text-sm font-semibold" style={{ color: isActive ? undefined : '#6b7280' }}>
        {label}
      </span>
      {isActive && (
        <div className="bg-brand-500 flex h-4 w-4 items-center justify-center rounded-full">
          <Check className="h-2.5 w-2.5 text-white" />
        </div>
      )}
    </div>
  </button>
);

// ── Main page ──────────────────────────────────────────────────────────────────

export const SettingsPage = () => {
  const { mode, accent, lightTheme, darkTheme, setMode, setAccent, setLightTheme, setDarkTheme } =
    useTheme();

  const [autoSaved, setAutoSaved] = useState(false);

  const flash = useCallback(() => {
    setAutoSaved(true);
    setTimeout(() => setAutoSaved(false), 2500);
  }, []);

  const handleMode = (m: 'dark' | 'light') => {
    setMode(m);
    flash();
  };
  const handleAccent = (a: AccentColor) => {
    setAccent(a);
    flash();
  };
  const handleLightTheme = (t: LightTheme) => {
    setLightTheme(t);
    flash();
  };
  const handleDarkTheme = (t: DarkTheme) => {
    setDarkTheme(t);
    flash();
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        breadcrumb={
          <PageBreadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Settings' }]} />
        }
      />

      {/* ── Appearance card ─────────────────────────────────────────────────── */}
      <SectionCard
        title="Appearance"
        desc="Saved locally in your browser — no server save needed"
        icon={Paintbrush}
        iconColor="text-brand-500"
        iconBg="bg-brand-50 dark:bg-brand-500/10"
      >
        {/* Auto-saved badge */}
        {autoSaved && (
          <div className="-mt-2 mb-5">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400">
              <Check className="h-3 w-3" />
              Preferences saved
            </span>
          </div>
        )}

        <div className="space-y-7">
          {/* ── Mode toggle ──────────────────────────────────────────────────── */}
          <div>
            <SubLabel>Color mode</SubLabel>
            <div className="flex gap-3">
              <ModeButton
                label="Dark"
                isActive={mode === 'dark'}
                previewBg="#030712"
                previewSurface="#111827"
                previewBorder="#1f2937"
                onClick={() => handleMode('dark')}
              />
              <ModeButton
                label="Light"
                isActive={mode === 'light'}
                previewBg="#f9fafb"
                previewSurface="#ffffff"
                previewBorder="#e5e7eb"
                onClick={() => handleMode('light')}
              />
            </div>
          </div>

          {/* ── Accent color ─────────────────────────────────────────────────── */}
          <div>
            <SubLabel>Accent color</SubLabel>
            <div className="flex items-center gap-3">
              {ACCENTS.map((a) => (
                <AccentSwatch
                  key={a.id}
                  hex={a.hex}
                  label={a.label}
                  active={accent === a.id}
                  onClick={() => handleAccent(a.id as AccentColor)}
                />
              ))}
            </div>
          </div>

          {/* ── Dark theme palette ───────────────────────────────────────────── */}
          <div>
            <SubLabel>Dark palette</SubLabel>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {DARK_THEMES.map((t) => (
                <PaletteCard
                  key={t.id}
                  meta={t}
                  active={darkTheme === t.id}
                  onClick={() => handleDarkTheme(t.id as DarkTheme)}
                />
              ))}
            </div>
          </div>

          {/* ── Light theme palette ──────────────────────────────────────────── */}
          <div>
            <SubLabel>Light palette</SubLabel>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {LIGHT_THEMES.map((t) => (
                <PaletteCard
                  key={t.id}
                  meta={t}
                  active={lightTheme === t.id}
                  onClick={() => handleLightTheme(t.id as LightTheme)}
                />
              ))}
            </div>
          </div>

          <p className="text-[11px] text-gray-400 dark:text-gray-600">
            Selecting a dark palette switches to dark mode. Selecting a light palette switches to
            light mode. These preferences are stored in your browser and do not affect other users.
          </p>
        </div>
      </SectionCard>

      {/* ── About card ──────────────────────────────────────────────────────── */}
      <SectionCard
        title="About"
        desc="cosmos_ui design system information"
        icon={Info}
        iconColor="text-gray-500 dark:text-gray-400"
        iconBg="bg-gray-100 dark:bg-gray-800"
      >
        <dl className="space-y-3">
          {[
            { label: 'Package', value: '@cosmos/react' },
            { label: 'Version', value: '0.1.0' },
            { label: 'Stack', value: 'React 19 + Tailwind CSS v4' },
            { label: 'Themes', value: `${DARK_THEMES.length} dark · ${LIGHT_THEMES.length} light` },
            { label: 'Accents', value: ACCENTS.map((a) => a.label).join(' · ') },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <dt className="text-sm text-gray-500 dark:text-gray-400">{label}</dt>
              <dd className="font-mono text-sm font-medium text-gray-800 dark:text-gray-200">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </SectionCard>
    </div>
  );
};
