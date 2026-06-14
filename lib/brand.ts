import brandJson from '../brand.json';

export const brand = brandJson;

export function getCSSVariables() {
  return `
    :root {
      --color-primary: ${brand.ink};
      --color-secondary: ${brand.ink2};
      --color-accent: ${brand.accent};
      --color-accent-hover: ${brand.accentHover};
      --color-background: ${brand.cream};
      --color-border: ${brand.line};
      --color-muted: ${brand.muted};
    }
  `;
}
