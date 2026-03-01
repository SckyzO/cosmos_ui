import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

/**
 * Storybook 8 + Vite + React 19 + Tailwind CSS v4
 *
 * Tailwind v4 uses the @tailwindcss/vite plugin (not PostCSS).
 * It is injected via viteFinal so Storybook's internal Vite instance
 * picks it up alongside our @cosmos path alias.
 *
 * Path resolution:
 * Storybook processes main.ts with esbuild-register (CJS mode), so __dirname
 * is always the .storybook/ directory in both Docker and CI environments.
 * In Docker: /app/.storybook/ → ../packages/react/src = /app/packages/react/src
 * In CI:     {repo}/.storybook/ → ../packages/react/src = {repo}/packages/react/src
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

    // __dirname = .storybook/ directory (CJS context via esbuild-register)
    const cosmosRoot = path.resolve(__dirname, '../packages/react/src');
    const stylesRoot = path.resolve(__dirname, '../styles');

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@cosmos': cosmosRoot,
          '@cosmos-styles': stylesRoot,
        },
        // Deduplicate React to prevent "React is not defined" from multiple instances.
        dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
      },
    });
  },
};

export default config;
