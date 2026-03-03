export interface PortfolioItem {
  slug:        string;
  name:        string;
  industry:    string;
  location:    string;
  description: string;
  tags:        string[];
  scoreBefore: number;
  scoreAfter:  number;
  siteUrl:     string;
}

const portfolio: PortfolioItem[] = [
  {
    slug:        'apex-electrical',
    name:        'Apex Electrical',
    industry:    'Electrical',
    location:    'Melbourne, VIC',
    description: 'Outdated layout, no clear call-to-action, invisible on mobile. Rebuilt with a dark, modern design — structured for local search and lead capture.',
    tags:        ['Trades', 'Melbourne'],
    scoreBefore: 3,
    scoreAfter:  7,
    siteUrl:     'https://apex-electrical-website.vercel.app',
  },
];

export default portfolio;
