// Theme configurations for Stoic AF landing page

export interface Theme {
  name: string;
  colors: {
    // Backgrounds
    body: string;
    nav: string;
    navMobile: string;
    hero: string;
    divider: string;
    blogSection: string;
    bookSection: string;
    appSection: string;
    merchSection: string;
    testimonialsSection: string;

    // Borders
    navBorder: string;
    dividerBorder: string;
    cardBorder: string;

    // Text
    heading: string;
    bodyText: string;
    metaText: string;
    navText: string;

    // Cards & Components
    card: string;
    cardHover: string;
    badge: string;
    checkIcon: string;

    // Buttons
    buttonBorder: string;
    buttonText: string;
    buttonHoverText: string;
  };
}

export const themes: Record<string, Theme> = {
  dark: {
    name: 'Dark',
    colors: {
      // Backgrounds
      body: 'bg-slate-950',
      nav: 'bg-black/95',
      navMobile: 'bg-black',
      hero: 'bg-slate-900',
      divider: 'bg-black',
      blogSection: 'bg-slate-950',
      bookSection: 'bg-slate-950',
      appSection: 'bg-slate-950',
      merchSection: 'bg-slate-950',
      testimonialsSection: 'bg-slate-950',

      // Borders
      navBorder: 'border-slate-800',
      dividerBorder: 'border-slate-900',
      cardBorder: 'border-slate-700',

      // Text
      heading: 'text-white',
      bodyText: 'text-slate-300',
      metaText: 'text-slate-400',
      navText: 'text-slate-300',

      // Cards & Components
      card: 'bg-slate-800',
      cardHover: 'hover:bg-slate-800',
      badge: 'bg-stoic-blue/20',
      checkIcon: 'bg-stoic-blue/20 text-stoic-blue',

      // Buttons
      buttonBorder: 'border-slate-600',
      buttonText: 'text-slate-200',
      buttonHoverText: 'hover:text-stoic-blue',
    },
  },

  light: {
    name: 'Light',
    colors: {
      // Backgrounds
      body: 'bg-white',
      nav: 'bg-white/95',
      navMobile: 'bg-white',
      hero: 'bg-white',
      divider: 'bg-slate-900',
      blogSection: 'bg-white',
      bookSection: 'bg-slate-50',
      appSection: 'bg-white',
      merchSection: 'bg-slate-50',
      testimonialsSection: 'bg-white',

      // Borders
      navBorder: 'border-slate-200',
      dividerBorder: 'border-slate-800',
      cardBorder: 'border-slate-200',

      // Text
      heading: 'text-slate-900',
      bodyText: 'text-slate-600',
      metaText: 'text-slate-500',
      navText: 'text-slate-600',

      // Cards & Components
      card: 'bg-white',
      cardHover: 'hover:bg-slate-50',
      badge: 'bg-stoic-blue/10',
      checkIcon: 'bg-green-100 text-green-600',

      // Buttons
      buttonBorder: 'border-slate-300',
      buttonText: 'text-slate-800',
      buttonHoverText: 'hover:text-stoic-blue',
    },
  },
};

// Get theme from environment variable with failsafe defaults
const getTheme = (): Theme => {
  // Default to 'light' if no theme is set (failsafe)
  const themeName = import.meta.env.VITE_LANDING_THEME || 'light';

  // If invalid theme name, fall back to light
  const selectedTheme = themes[themeName];

  if (!selectedTheme) {
    console.warn(`Theme "${themeName}" not found. Falling back to light theme.`);
    return themes.light;
  }

  console.log(`Using theme: ${selectedTheme.name}`);
  return selectedTheme;
};

export const theme = getTheme();
