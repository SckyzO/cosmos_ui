import { create } from '@storybook/theming/create';

/**
 * Storybook UI theme — cosmos_ui branded.
 * This styles the Storybook chrome (sidebar, toolbar, panels),
 * not the story previews (those use ThemeContext).
 */

export const cosmosThemeDark = create({
  base: 'dark',

  // Brand
  brandTitle: 'cosmos_ui',
  brandUrl: 'https://github.com/SckyzO/cosmos_ui',
  brandTarget: '_blank',

  // Typography
  fontBase: '"Outfit", "Inter", system-ui, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',

  // Color palette — cosmos indigo accent on dark bg
  colorPrimary: '#465fff',
  colorSecondary: '#465fff',

  // App chrome
  appBg: '#0f1117',
  appContentBg: '#1a1d27',
  appPreviewBg: '#111827',
  appBorderColor: '#1f2937',
  appBorderRadius: 8,

  // Text
  textColor: '#e5e7eb',
  textInverseColor: '#111827',
  textMutedColor: '#6b7280',

  // Toolbar
  barTextColor: '#9ca3af',
  barHoverColor: '#e5e7eb',
  barSelectedColor: '#465fff',
  barBg: '#0f1117',

  // Inputs
  inputBg: '#1f2937',
  inputBorder: '#374151',
  inputTextColor: '#e5e7eb',
  inputBorderRadius: 6,
});

export const cosmosThemeLight = create({
  base: 'light',

  brandTitle: 'cosmos_ui',
  brandUrl: 'https://github.com/SckyzO/cosmos_ui',
  brandTarget: '_blank',

  fontBase: '"Outfit", "Inter", system-ui, sans-serif',
  fontCode: '"JetBrains Mono", "Fira Code", monospace',

  colorPrimary: '#465fff',
  colorSecondary: '#465fff',

  appBg: '#f9fafb',
  appContentBg: '#ffffff',
  appPreviewBg: '#f3f4f6',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 8,

  textColor: '#111827',
  textInverseColor: '#ffffff',
  textMutedColor: '#6b7280',

  barTextColor: '#374151',
  barHoverColor: '#111827',
  barSelectedColor: '#465fff',
  barBg: '#ffffff',

  inputBg: '#ffffff',
  inputBorder: '#d1d5db',
  inputTextColor: '#111827',
  inputBorderRadius: 6,
});
