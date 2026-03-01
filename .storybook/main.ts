import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

/**
 * Storybook 8.6.17 + Vite + React 19 + Tailwind CSS v4
 *
 * Tailwind v4 uses the @tailwindcss/vite plugin (not PostCSS).
 * Injected via viteFinal alongside the @cosmos path alias.
 *
 * Path resolution: __dirname = .storybook/ directory (CJS via esbuild-register)
 * - Docker container: /app/.storybook/ → /app/packages/react/src
 * - GitHub CI:        {repo}/.storybook/ → {repo}/packages/react/src
 */
const config: StorybookConfig = {
  stories: [
    '../packages/react/src/**/*.stories.@(ts|tsx)',
    './stories/**/*.stories.@(ts|tsx)',
    '../packages/react/src/**/*.mdx',
    './stories/**/*.mdx',
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
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

    const cosmosRoot = path.resolve(__dirname, '../packages/react/src');
    const stylesRoot = path.resolve(__dirname, '../styles');

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@cosmos': cosmosRoot,
          '@cosmos-styles': stylesRoot,
        },
        // NOTE: dedupe removed — it interfered with Storybook's internal
        // module resolution (storybook/internal/preview/runtime).
        // The 'React is not defined' issue is handled by ensuring React 19's
        // automatic JSX transform is active via @storybook/react-vite.
      },
    });
  },
};

export default config;
