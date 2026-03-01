import type { Preview, Decorator } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import './global.css';
import { ThemeProvider, useTheme } from '@cosmos/contexts/ThemeContext';

/**
 * Storybook 10 preview for cosmos_ui.
 * - ThemeProvider wraps every story
 * - cosmosTheme global toggles dark/light in the toolbar
 * - .dark class applied to the story wrapper
 */

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

const withCosmosTheme: Decorator = (Story, context) => {
  const isDark = context.globals['cosmosTheme'] !== 'light';

  return (
    <ThemeProvider>
      <DarkModeSync isDark={isDark}>
        <Story />
      </DarkModeSync>
    </ThemeProvider>
  );
};

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
    cosmosTheme: 'dark',
  },

  decorators: [withCosmosTheme],

  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
  },
};

export default preview;
