import type { Meta, StoryObj } from '@storybook/react-vite';
import { useTheme, ACCENTS, LIGHT_THEMES, DARK_THEMES } from '@cosmos/contexts/ThemeContext';

// ── Theme showcase component ──────────────────────────────────────────────────

function ThemeShowcase() {
  const { mode, accent, lightTheme, darkTheme, setAccent, setLightTheme, setDarkTheme } =
    useTheme();

  return (
    <div className="space-y-6">
      {/* Current values */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
        <p className="text-sm font-mono text-gray-500 dark:text-gray-400">
          mode: <strong className="text-gray-900 dark:text-white">{mode}</strong>
          {' · '}
          accent: <strong className="text-gray-900 dark:text-white">{accent}</strong>
          {' · '}
          palette: <strong className="text-gray-900 dark:text-white">
            {mode === 'dark' ? darkTheme : lightTheme}
          </strong>
        </p>
      </div>

      {/* Accent swatches */}
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
          Accent colors
        </p>
        <div className="flex gap-2">
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
      </div>

      {/* Brand palette */}
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
          Brand palette (current accent)
        </p>
        <div className="flex gap-1">
          {['25','50','100','200','300','400','500','600','700','800','900','950'].map((shade) => (
            <div key={shade} className="flex-1">
              <div
                className="h-8 rounded"
                style={{ backgroundColor: `var(--color-brand-${shade})` }}
              />
              <div className="mt-0.5 text-center text-[9px] text-gray-400">{shade}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Design tokens */}
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
          Semantic tokens
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { label: 'bg-base', var: '--color-bg-base' },
            { label: 'bg-panel', var: '--color-bg-panel' },
            { label: 'border', var: '--color-border' },
            { label: 'accent', var: '--color-accent' },
          ].map((token) => (
            <div
              key={token.var}
              className="flex items-center gap-2 rounded-lg border border-gray-200 p-2 dark:border-gray-800"
            >
              <div
                className="h-5 w-5 shrink-0 rounded border border-gray-200 dark:border-gray-700"
                style={{ backgroundColor: `var(${token.var})` }}
              />
              <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
                {token.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Palettes */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
            Light palettes
          </p>
          <div className="space-y-1">
            {LIGHT_THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setLightTheme(t.id)}
                className="flex w-full items-center gap-2 rounded-lg border p-2 text-left text-xs transition-all hover:scale-[1.01]"
                style={{
                  backgroundColor: t.preview.surface,
                  borderColor: lightTheme === t.id ? '#465fff' : t.preview.border,
                  borderWidth: lightTheme === t.id ? '2px' : '1px',
                }}
              >
                <div
                  className="h-4 w-4 shrink-0 rounded"
                  style={{ backgroundColor: t.preview.bg }}
                />
                <span style={{ color: '#374151' }}>{t.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-500">
            Dark palettes
          </p>
          <div className="space-y-1">
            {DARK_THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => setDarkTheme(t.id)}
                className="flex w-full items-center gap-2 rounded-lg border p-2 text-left text-xs transition-all hover:scale-[1.01]"
                style={{
                  backgroundColor: t.preview.surface,
                  borderColor: darkTheme === t.id ? '#465fff' : t.preview.border,
                  borderWidth: darkTheme === t.id ? '2px' : '1px',
                }}
              >
                <div
                  className="h-4 w-4 shrink-0 rounded"
                  style={{ backgroundColor: t.preview.bg }}
                />
                <span style={{ color: '#e5e7eb' }}>{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Foundation/Theme',
  component: ThemeShowcase,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'cosmos_ui theme system: 5 accent colors × 4 dark palettes × 4 light palettes = 80 combinations. ThemeContext manages mode, accent, and palette — all synced via CSS variables on `document.documentElement`.',
      },
    },
  },
} satisfies Meta<typeof ThemeShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  name: 'Interactive Theme Picker',
};
