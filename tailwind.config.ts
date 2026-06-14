import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'monospace'],
      },
      colors: {
        ink:    'var(--ink)',
        cream:  'var(--cream)',
        paper:  'var(--paper)',
        line:   'var(--line)',
        muted:  'var(--muted)',
        accent: 'var(--accent)',
      },
    },
  },
};

export default config;
