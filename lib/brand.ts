import brandJson from '../brand.json';

export const brand = brandJson;

export function getCSSVariables() {
  return `
    :root {
      --color-primary: ${brand.primary};
      --color-secondary: ${brand.secondary};
      --color-accent: ${brand.accent};
      --color-accent-hover: ${brand.accentHover};
      --color-background: ${brand.background};
      --color-border: ${brand.border};
      --color-muted: ${brand.muted};
    }
  `;
}
