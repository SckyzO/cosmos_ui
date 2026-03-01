# cosmos_ui

**A complete design system & UI kit built on TailAdmin + Tailwind CSS v4.**

Dark mode first-class, accent colors, comprehensive component library — available as React components and pure HTML templates.

[![Storybook](https://img.shields.io/badge/Storybook-Live-FF4785?logo=storybook&logoColor=white)](https://sckyzo.github.io/cosmos_ui/)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-v4-06B6D4.svg)
![React](https://img.shields.io/badge/react-19-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.x-3178C6.svg)
![Storybook](https://img.shields.io/badge/storybook-8-FF4785.svg)

---

## Features

- **Dark mode first** — system-aware + manual toggle + accent colors
- **React components** — fully typed TypeScript components
- **HTML templates** — pure HTML + compiled CSS, zero framework dependency
- **Storybook 8** — interactive component documentation
- **Tailwind CSS v4** — latest utility-first CSS
- **Docker-based dev** — no local Node.js required

## Quick Start

```bash
git clone https://github.com/SckyzO/cosmos_ui.git
cd cosmos_ui
make up
```

| Service | URL |
|---------|-----|
| **Demo app** | http://localhost:5173 |
| **Storybook** | http://localhost:6006 |

## Structure

```
packages/
├── react/    ← React + TypeScript components
└── html/     ← Pure HTML templates + compiled CSS (based on TailAdmin free)
demo/         ← Interactive showcase app (React)
.storybook/   ← Storybook configuration
styles/       ← Shared CSS tokens (design variables)
```

## Commands

```bash
make up              # Start all services (demo + storybook)
make down            # Stop
make logs            # Follow logs
make lint            # Run all linters (ESLint + Stylelint + Prettier)
make storybook-build # Build static Storybook for deployment
```

## Packages

### `packages/react`
React + TypeScript component library. Components are organized by category:
- **ui/** — Base elements (Button, Badge, Input, Select, Checkbox...)
- **layout/** — CosmosLayout, CosmosSidebar, CosmosHeader
- **feedback/** — Toast, Alert, Skeleton, EmptyState, OfflineBanner
- **data/** — DataTable, Chart wrappers, KPI cards
- **overlay/** — Modal, Drawer, Popover, Tooltip

### `packages/html`
Pure HTML templates with compiled `cosmos.css`. No JavaScript framework required.
Usable in any project: PHP, Django, Rails, Go templates, or plain HTML.

```html
<link rel="stylesheet" href="cosmos.css">
<div class="cosmos-sidebar">...</div>
```

## Based on

[TailAdmin Free v2.0.1](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template) — MIT License.
Enhanced with a complete theme system, improved sidebar, React component library, and Storybook documentation.
