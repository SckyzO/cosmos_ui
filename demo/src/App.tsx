import { BrowserRouter } from 'react-router-dom';
import { useTheme, ACCENTS, LIGHT_THEMES, DARK_THEMES } from '../../packages/react/src/contexts/ThemeContext';
import '../../styles/app.css';

function ThemeShowcase() {
  const { mode, accent, lightTheme, darkTheme, setMode, setAccent, setLightTheme, setDarkTheme } =
    useTheme();

  return (
    <div className="cosmos-root min-h-screen p-8" data-theme-mode={mode}>
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[--color-text-primary]">cosmos_ui</h1>
            <p className="text-[--color-text-secondary] mt-1">Design System — Theme Preview</p>
          </div>
          <button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            className="rounded-lg bg-[--color-bg-panel] border border-[--color-border] px-4 py-2 text-sm font-medium text-[--color-text-primary] hover:bg-[--color-bg-elevated] transition-colors"
          >
            {mode === 'dark' ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Accent colors */}
        <section className="rounded-xl border border-[--color-border] bg-[--color-bg-panel] p-6">
          <h2 className="text-lg font-semibold text-[--color-text-primary] mb-4">Accent color</h2>
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
        <section className="rounded-xl border border-[--color-border] bg-[--color-bg-panel] p-6">
          <h2 className="text-lg font-semibold text-[--color-text-primary] mb-4">Light palettes</h2>
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
                <div className="text-sm font-medium" style={{ color: '#101828' }}>{t.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#667085' }}>{t.desc}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Dark palettes */}
        <section className="rounded-xl border border-[--color-border] bg-[--color-bg-panel] p-6">
          <h2 className="text-lg font-semibold text-[--color-text-primary] mb-4">Dark palettes</h2>
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
                <div className="text-sm font-medium" style={{ color: '#e5e7eb' }}>{t.label}</div>
                <div className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{t.desc}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Design tokens preview */}
        <section className="rounded-xl border border-[--color-border] bg-[--color-bg-panel] p-6">
          <h2 className="text-lg font-semibold text-[--color-text-primary] mb-4">Design tokens</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { label: 'bg-base', var: '--color-bg-base' },
              { label: 'bg-panel', var: '--color-bg-panel' },
              { label: 'bg-elevated', var: '--color-bg-elevated' },
              { label: 'border', var: '--color-border' },
              { label: 'text-primary', var: '--color-text-primary' },
              { label: 'text-secondary', var: '--color-text-secondary' },
              { label: 'accent', var: '--color-accent' },
            ].map((token) => (
              <div
                key={token.var}
                className="flex items-center gap-3 rounded-lg border border-[--color-border] p-3"
              >
                <div
                  className="h-6 w-6 shrink-0 rounded border border-[--color-border]"
                  style={{ backgroundColor: `var(${token.var})` }}
                />
                <div>
                  <div className="text-sm font-mono text-[--color-text-primary]">{token.var}</div>
                  <div className="text-xs text-[--color-text-muted]">{token.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand palette */}
        <section className="rounded-xl border border-[--color-border] bg-[--color-bg-panel] p-6">
          <h2 className="text-lg font-semibold text-[--color-text-primary] mb-4">Brand palette</h2>
          <div className="flex gap-1">
            {['25','50','100','200','300','400','500','600','700','800','900','950'].map((shade) => (
              <div key={shade} className="flex-1">
                <div
                  className="h-10 rounded"
                  style={{ backgroundColor: `var(--color-brand-${shade})` }}
                />
                <div className="mt-1 text-center text-xs text-[--color-text-muted]">{shade}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeShowcase />
    </BrowserRouter>
  );
}
