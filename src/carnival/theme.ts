/**
 * The carnival's colours, fonts and sizes. Games draw with these rather than
 * their own values, so every booth on the midway looks like it belongs.
 */
export const theme = {
  colors: {
    background: '#070b1a',
    surface: '#111a33',
    text: '#e6f7ff',
    muted: '#8a9cc2',
    accent: '#00e5ff',
    danger: '#ff2e88',
    stripeA: '#c026ff',
    stripeB: '#e6f7ff',
    water: '#5b8cff',
    wood: '#3a4766',
  },
  font: {
    family: '"Eurostile", "Bank Gothic", "Segoe UI", "Roboto", system-ui, sans-serif',
    small: 14,
    body: 18,
    title: 32,
  },
  radius: 6,
  canvas: {
    width: 800,
    height: 500,
  },
} as const;

/** Canvas font string, e.g. canvasFont('title') → 'bold 32px "Eurostile", …'. */
export function canvasFont(size: 'small' | 'body' | 'title', weight: 'normal' | 'bold' = 'normal') {
  return `${weight} ${theme.font[size]}px ${theme.font.family}`;
}

/** Exposes the theme to CSS as custom properties, e.g. --color-accent. */
export function applyTheme(root: HTMLElement = document.documentElement) {
  for (const [name, value] of Object.entries(theme.colors)) {
    root.style.setProperty(`--color-${name}`, value);
  }
  root.style.setProperty('--font-family', theme.font.family);
  root.style.setProperty('--radius', `${theme.radius}px`);
}
