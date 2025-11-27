# Stoic AF Landing Page Themes

## Overview

The landing page supports theme switching via environment variables at build time. This allows you to easily switch between light/dark themes or create custom themes for holidays and special occasions.

## Using Themes

### In Coolify

Set the build argument in Coolify:

```
VITE_LANDING_THEME=dark
```

or

```
VITE_LANDING_THEME=light
```

### Locally

Set the environment variable before building:

```bash
VITE_LANDING_THEME=light npm run build
```

## Available Themes

- **dark** (default) - Ultra-dark theme with black header and dark gray hero
- **light** - Original light theme with white backgrounds

## Creating Custom Themes

1. Edit `src/theme.ts`
2. Add a new theme to the `themes` object:

```typescript
export const themes: Record<string, Theme> = {
  dark: { /* ... */ },
  light: { /* ... */ },

  // Example: Holiday theme
  christmas: {
    name: 'Christmas',
    colors: {
      body: 'bg-red-950',
      nav: 'bg-green-900/95',
      hero: 'bg-red-900',
      // ... customize all colors
    },
  },
};
```

3. Deploy with `VITE_LANDING_THEME=christmas`

## Theme Structure

Each theme defines colors for:

- **Backgrounds**: body, nav, hero, sections
- **Borders**: nav, cards, dividers
- **Text**: headings, body, meta, nav links
- **Components**: cards, badges, buttons, icons

## Migration Status

🚧 **In Progress** - Currently migrating components to use the theme system.

### Completed
- Theme configuration file (`src/theme.ts`)
- Theme hook (`src/hooks/useTheme.ts`)
- Dockerfile build argument support
- Navigation bar (partial)

### To Do
- Complete all navigation styles
- Hero section
- All content sections (Blog, Book, App, Merch, Testimonials)
- Footer
- Cards and components

## Development

To test theme switching locally:

```bash
# Dark theme (default)
npm run dev

# Light theme
VITE_LANDING_THEME=light npm run dev
```

## Notes

- Themes are baked in at build time (not runtime switching)
- Default theme is `dark` if no env var is set
- Invalid theme names fall back to `dark`
- Each Coolify deployment can have its own theme
