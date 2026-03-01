# @cosmos/ui — HTML Package

Pure HTML + CSS templates. Zero framework dependency.

## Usage

```html
<link rel="stylesheet" href="css/cosmos-tokens.css">
<link rel="stylesheet" href="css/cosmos-dark.css">
<link rel="stylesheet" href="css/style.css">

<body class="cosmos-root">
  <!-- Your content -->
</body>
```

`cosmos-tokens.css` is the foundation — it defines all CSS custom properties.
`cosmos-dark.css` adds the dark mode toggle layer and surface helpers.
`style.css` is the TailAdmin-based component stylesheet (Tailwind-compiled).

## Dark mode

Add the `dark` class to `<html>` or `<body>`:

```html
<html class="dark">
```

Toggle at runtime:

```js
document.documentElement.classList.toggle('dark');
```

Persist to localStorage:

```js
// Save preference
localStorage.setItem('cosmos.theme.mode', 'dark');

// Restore on page load (add before </head>)
if (localStorage.getItem('cosmos.theme.mode') === 'dark') {
  document.documentElement.classList.add('dark');
}
```

The default dark theme is **Void** (deep pure black). Override the gray-scale tokens to switch to another dark palette:

| Palette | `--color-gray-dark` | `--color-gray-950` |
|---------|---------------------|--------------------|
| Void    | `#111827`           | `#030712`          |
| Navy    | `#0f172a`           | `#020617`          |
| Forest  | `#18181b`           | `#09090b`          |

## Accent colors

Override `--color-brand-*` variables and `--color-accent` on `:root` or `.cosmos-root`:

```css
/* Violet accent */
.cosmos-root {
  --color-brand-25:  #faf5ff;
  --color-brand-50:  #f5f3ff;
  --color-brand-100: #ede9fe;
  --color-brand-200: #ddd6fe;
  --color-brand-300: #c4b5fd;
  --color-brand-400: #a78bfa;
  --color-brand-500: #7c3aed;
  --color-brand-600: #6d28d9;
  --color-brand-700: #5b21b6;
  --color-brand-800: #4c1d95;
  --color-brand-900: #3b1578;
  --color-brand-950: #2e1065;
  --color-accent: #7c3aed;
  --shadow-focus-ring: 0px 0px 0px 4px rgb(124 58 237 / 12%);
}
```

Available accent presets (match ThemeContext values):

| Name    | `--color-brand-500` | `--color-accent` |
|---------|---------------------|------------------|
| Indigo  | `#465fff`           | `#465fff`        |
| Violet  | `#7c3aed`           | `#7c3aed`        |
| Emerald | `#059669`           | `#059669`        |
| Rose    | `#e11d48`           | `#e11d48`        |
| Amber   | `#d97706`           | `#d97706`        |

## Available pages

- `index.html` — Dashboard
- `alerts.html` — Alerts
- `avatars.html` — Avatars
- `badge.html` — Badges
- `bar-chart.html` — Bar chart
- `basic-tables.html` — Basic tables
- `blank.html` — Blank page template
- `buttons.html` — Buttons
- `calendar.html` — Calendar
- `form-elements.html` — Form elements
- `images.html` — Images
- `line-chart.html` — Line chart
- `profile.html` — Profile
- `sidebar.html` — Sidebar
- `signin.html` — Sign in
- `signup.html` — Sign up
- `videos.html` — Videos
- `404.html` — 404 error page

## CSS files reference

| File                  | Purpose                                        | Tailwind |
|-----------------------|------------------------------------------------|----------|
| `cosmos-tokens.css`   | All design tokens as CSS custom properties     | No       |
| `cosmos-dark.css`     | Dark mode toggle + surface/text helpers        | No       |
| `style.css`           | TailAdmin component styles (compiled)          | Yes      |

`cosmos-tokens.css` and `cosmos-dark.css` can be used independently in any project without a build step. `style.css` is the output of a Tailwind build and must be regenerated after changes to component styles.
