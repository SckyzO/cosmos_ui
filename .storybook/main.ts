import type { StorybookConfig } from '@storybook/react-vite';

/**
 * Storybook 8 + Vite + React 19 + Tailwind CSS v4
 *
 * Tailwind v4 uses the @tailwindcss/vite plugin (not PostCSS).
 * It is injected via viteFinal so Storybook's internal Vite instance
 * picks it up alongside our @cosmos path alias.
 */
const config: StorybookConfig = {
  stories: [
    // Stories co-located with cosmos components
    '../src/cosmos/**/*.stories.@(ts|tsx)',
    // Stories in the .storybook/stories/ directory
    './stories/**/*.stories.@(ts|tsx)',
    // MDX documentation
    '../src/cosmos/**/*.mdx',
    './stories/**/*.mdx',
  ],

  addons: [
    '@storybook/addon-essentials',   // docs, controls, actions, viewport, backgrounds
    '@storybook/addon-interactions', // interaction testing
    '@storybook/addon-a11y',         // accessibility checks
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const tailwindcss = (await import('@tailwindcss/vite')).default;

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          // Volume-mounted path inside the Storybook container:
          //   packages/react/src → /app/src/cosmos
          //   styles/            → /app/styles
          '@cosmos': '/app/src/cosmos',
          '@cosmos-styles': '/app/styles',
        },
      },
    });
  },
};

export default config;
