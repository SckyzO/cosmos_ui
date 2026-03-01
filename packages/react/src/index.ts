// Contexts
export { ThemeProvider, useTheme } from './contexts/ThemeContext';
export type {
  AccentColor,
  LightTheme,
  DarkTheme,
  AccentMeta,
  PaletteMeta,
} from './contexts/ThemeContext';
export { ACCENTS, LIGHT_THEMES, DARK_THEMES } from './contexts/ThemeContext';

// UI Components
export * from './components/ui/index';

// Layout components
export { CosmosLayout } from './components/layout/CosmosLayout';
export { CosmosSidebar } from './components/layout/CosmosSidebar';
export { CosmosHeader } from './components/layout/CosmosHeader';
export { MatrixBackground } from './components/layout/MatrixBackground';
export type { NavItem, NavSection } from './components/layout/CosmosSidebar';
