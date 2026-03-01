import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'url';
import path from 'path';

/**
 * Storybook 10.2.13 + Vite 7 + React 19 + Tailwind CSS v4
 *
 * Storybook 10 processes main.ts as ESM, so __dirname is not available.
 * Use fileURLToPath(import.meta.url) instead.
 *
 * Path resolution: configDir = .storybook/ in both Docker and CI environments.
 * - Docker container: /app/.storybook/ → /app/packages/react/src
 * - GitHub CI:        {repo}/.storybook/ → {repo}/packages/react/src
 */

// ESM-safe __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../packages/react/src/**/*.stories.@(ts|tsx)',
    './stories/**/*.stories.@(ts|tsx)',
    '../packages/react/src/**/*.mdx',
    './stories/**/*.mdx',
  ],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const tailwindcss = (await import('@tailwindcss/vite')).default;

    const cosmosRoot = path.resolve(__dirname, '../packages/react/src');
    const stylesRoot = path.resolve(__dirname, '../styles');

    return mergeConfig(config, {
      plugins: [tailwindcss()],
      // Set root to the config dir (.storybook/) so Vite's module resolver
      // looks in .storybook/node_modules/ first — this is where storybook,
      // @storybook/*, react, tailwindcss etc. are installed.
      root: __dirname,
      resolve: {
        alias: {
          '@cosmos': cosmosRoot,
          '@cosmos-styles': stylesRoot,
        },
      },
    });
  },
};

export default config;
