import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath } from 'url';
import path from 'path';

// __dirname equivalent for ESM modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Storybook 8 + Vite + React 19 + Tailwind CSS v4
 *
 * Tailwind v4 uses the @tailwindcss/vite plugin (not PostCSS).
 * It is injected via viteFinal so Storybook's internal Vite instance
 * picks it up alongside our @cosmos path alias.
 *
 * Path strategy:
 * - Docker: COSMOS_SRC_PATH env var overrides (set in docker-compose.dev.yml)
 * - CI / local build: path.resolve(__dirname, ...) → correct repo-relative path
 */

const COSMOS_SRC = process.env.COSMOS_SRC_PATH ?? path.resolve(__dirname, '../packages/react/src');
const COSMOS_STYLES = process.env.COSMOS_STYLES_PATH ?? path.resolve(__dirname, '../styles');

const config: StorybookConfig = {
  stories: [
    // Paths are relative to this config directory (.storybook/).
    // '../packages/react/src/**/*' → component stories (CI and Docker)
    // './stories/**/*'             → standalone stories
    '../packages/react/src/**/*.stories.@(ts|tsx)',
    './stories/**/*.stories.@(ts|tsx)',
    '../packages/react/src/**/*.mdx',
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
          '@cosmos': COSMOS_SRC,
          '@cosmos-styles': COSMOS_STYLES,
        },
        // Deduplicate React to prevent "React is not defined" errors caused by
        // multiple React instances (Storybook's own + our components).
        dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
      },
    });
  },
};

export default config;
