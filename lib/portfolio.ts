export interface PortfolioItem {
  slug:        string;
  name:        string;
  industry:    string;
  location:    string;
  description: string;
  tags:        string[];
  scoreBefore?: number;
  scoreAfter?:  number;
  siteUrl:     string;
}

const portfolio: PortfolioItem[] = [
  {
    slug:        'apex-electrical',
    name:        'Apex Electrical',
    industry:    'Electrical',
    location:    'Melbourne, VIC',
    description: 'Rebuilt from an outdated template with no clear CTA. New site is dark, mobile-first, and structured around local search and lead capture.',
    tags:        ['Trades', 'Rebuild'],
    scoreBefore: 3,
    scoreAfter:  7,
    siteUrl:     'https://apex-electrical-website.vercel.app',
  },
  {
    slug:        'combined-arms',
    name:        'Combined Arms Consulting',
    industry:    'Business Consulting',
    location:    'Global',
    description: 'Brand identity and web presence for a strategic consulting firm. Built to convey authority — dark, deliberate, and conversion-focused from the first scroll.',
    tags:        ['Consulting', 'Brand'],
    siteUrl:     'https://www.combinedarms.com.au',
  },
  {
    slug:        'eventi',
    name:        'Eventi',
    industry:    'Events',
    location:    'Melbourne, VIC',
    description: 'Social events discovery platform for Melbourne\'s 18+ market. Live on the App Store. Full-stack build — iOS app, marketing site, and backend infrastructure.',
    tags:        ['Product', 'iOS App'],
    siteUrl:     'https://www.eventimeetup.com',
  },
];

export default portfolio;
