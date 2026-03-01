# cosmos_ui

**A complete design system & UI kit built on TailAdmin + Tailwind CSS v4.**

Dark mode first-class, 5 accent colors, 8 color palettes, 48+ components — React components, pure HTML templates, and interactive Storybook documentation.

[![Storybook](https://img.shields.io/badge/Storybook-Live-FF4785?logo=storybook&logoColor=white)](https://sckyzo.github.io/cosmos_ui/)
[![Deploy Storybook](https://github.com/SckyzO/cosmos_ui/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/SckyzO/cosmos_ui/actions/workflows/deploy-storybook.yml)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg)
![React](https://img.shields.io/badge/react-19-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6.svg)
![Storybook](https://img.shields.io/badge/storybook-8-FF4785.svg)

---

## What is cosmos_ui?

cosmos_ui is a production-ready design system for building modern web applications. It extends [TailAdmin Free](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template) with a complete theme engine, React component library, and Storybook documentation.

**Key features:**
- **5 accent colors** × **4 dark palettes** × **4 light palettes** = 80 theme combinations
- **48+ UI components** across 8 categories
- **15 chart types** powered by ApexCharts
- **Dark mode first** — designed for NOC and developer environments
- **Matrix mode** — retro terminal aesthetic
- **React 19** + **Tailwind CSS v4** + **Vite 7**
- **Storybook 8** — interactive component documentation deployed to GitHub Pages
- **HTML templates** — zero-framework CSS for any backend

---

## Quick Start

```bash
git clone https://github.com/SckyzO/cosmos_ui.git
cd cosmos_ui
make up
```

| Service | URL | Description |
|---------|-----|-------------|
| **Demo app** | http://localhost:5174 | Full interactive showcase |
| **Storybook** | http://localhost:6006 | Component stories + docs |

---

## Structure

```
cosmos_ui/
├── packages/
│   ├── react/     ← React + TypeScript components (@cosmos/ui)
│   └── html/      ← Pure HTML templates + CSS tokens
├── demo/          ← Vite showcase app (all 48+ components)
├── .storybook/    ← Storybook 8 configuration + stories
└── styles/        ← Shared CSS design tokens
```

---

## Components

| Category | Count | Examples |
|----------|-------|---------|
| Components | 10 | Buttons, Badges, Cards, Modals, Drawers |
| Forms | 4 | Form Elements, OTP, Range Slider, Tag Input |
| Charts | 15 | Line/Area, Bar, Donut, Heatmap, Realtime, Radial |
| Data Display | 6 | Stats Cards, Tables, Avatars, Ribbons |
| Navigation | 5 | Tabs, Pagination, Breadcrumb, Accordion, Stepper |
| Feedback | 5 | Toast, Spinners, Skeleton, Progress, Empty State |
| Advanced | 4 | Timeline, Carousel, Notifications, Calendar |
| Pages | 6 | Charts, Tables, Profile, Sign In, Sign Up, 404 |

---

## Theme System

```tsx
import { ThemeProvider, useTheme } from '@cosmos/contexts/ThemeContext';

function App() {
  const { setMode, setAccent, setDarkTheme } = useTheme();
  setMode('dark');
  setAccent('indigo');    // indigo | violet | emerald | rose | amber
  setDarkTheme('matrix'); // void | navy | forest | matrix
}
```

---

## Development Commands

```bash
make up              # Start all services
make down            # Stop
make logs            # Follow logs
make build           # Rebuild containers
make lint            # ESLint + Stylelint + Prettier
make storybook-build # Build static Storybook
```

---

## GitHub Pages

Storybook is automatically deployed to GitHub Pages on every push to `main`:

→ **https://sckyzo.github.io/cosmos_ui/**

---

## Based on

[TailAdmin Free v2.0.1](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template) — MIT License.
