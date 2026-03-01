import type { Preview, Decorator } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import './global.css';
import { ThemeProvider, useTheme } from '@cosmos/contexts/ThemeContext';

/**
 * Storybook preview configuration for cosmos_ui.
 *
 * Features:
 * - ThemeProvider wraps every story (access to useTheme hook)
 * - Dark/Light toggle in the toolbar (cosmos-theme global)
 * - Accent color selector in the toolbar
 * - Automatic .dark class applied to the story container
 * - Background synced with the current theme palette
 */

// ── DarkModeSync ──────────────────────────────────────────────────────────────
// Reads the Storybook 'cosmosTheme' global and applies the .dark class +
// dispatches the cosmos-theme-mode event so ThemeContext stays in sync.

const DarkModeSync = ({
  children,
  isDark,
}: {
  children: React.ReactNode;
  isDark: boolean;
}) => {
  const { setMode } = useTheme();

  useEffect(() => {
    setMode(isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark, setMode]);

  return (
    <div
      className={`cosmos-root min-h-screen p-6 ${isDark ? 'dark' : ''}`}
      style={{
        background: isDark ? 'var(--color-gray-dark, #111827)' : '#f9fafb',
        color: isDark ? '#e4e7ec' : '#101828',
      }}
    >
      {children}
    </div>
  );
};

// ── Decorator ─────────────────────────────────────────────────────────────────

const withCosmosTheme: Decorator = (Story, context) => {
  const isDark = context.globals.cosmosTheme !== 'light';

  return (
    <ThemeProvider>
      <DarkModeSync isDark={isDark}>
        <Story />
      </DarkModeSync>
    </ThemeProvider>
  );
};

// ── Preview config ────────────────────────────────────────────────────────────

const preview: Preview = {
  globalTypes: {
    cosmosTheme: {
      description: 'cosmos_ui theme mode',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'dark', title: '🌙 Dark', icon: 'circle' },
          { value: 'light', title: '☀️ Light', icon: 'circlehollow' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    // Dark mode first — NOC / developer default
    cosmosTheme: 'dark',
  },

  decorators: [withCosmosTheme],

  parameters: {
    // Disable the default background switcher (we manage it via ThemeContext)
    backgrounds: { disable: true },

    // Docs: dark theme for the Storybook UI
    docs: {
      theme: undefined, // set in cosmos-theme.ts
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Layout default: centered for most components
    layout: 'padded',
  },
};

export default preview;
