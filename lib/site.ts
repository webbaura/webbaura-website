export const SITE = {
  name:       'Webbaura',
  wordmark:   'WEBBAURA',
  url:        'https://webbaura.com',
  city:       'Melbourne',
  country:    'Australia',
  entity:     'Sole Trader',
  abn:        '56 948 423 105',
  calendly:   process.env.NEXT_PUBLIC_CALENDLY_URL  || 'https://calendly.com/aaronlevin98/free-consultation',
  email:      process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'AaronLev.210@outlook.com',
  statsUrl:   'https://tools.webbaura.com/stats',
} as const;
