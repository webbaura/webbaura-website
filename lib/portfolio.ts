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
    slug:        'hilltops',
    name:        'Hilltops App',
    industry:    'Software',
    location:    'Melbourne, VIC',
    description: 'Marketing site for a social events and groups iOS app. Dark, product-led design built to drive App Store installs from the first scroll.',
    tags:        ['Software', 'Mobile App'],
    siteUrl:     'https://hilltops.app/',
  },
  {
    slug:        'gambino-rooftop',
    name:        'Gambino Rooftop',
    industry:    'Restaurant',
    location:    'Melbourne, VIC',
    description: 'Editorial-style site for a rooftop venue. Large-scale imagery, a clear primary action to book a table, and menu, gallery and reservations on one fast page.',
    tags:        ['Hospitality', 'Restaurant'],
    siteUrl:     'https://gambino-rooftop-website.vercel.app/',
  },
  {
    slug:        'communal-market',
    name:        'Communal Market',
    industry:    'Café',
    location:    'Melbourne, VIC',
    description: 'Café and bakery site built around the two things customers actually want: current hours and directions. Reviews surfaced above the fold to earn trust on first visit.',
    tags:        ['Café', 'Local'],
    siteUrl:     'https://www.communalmarket.com.au/',
  },
  {
    slug:        'combined-arms',
    name:        'Combined Arms Consulting',
    industry:    'Consulting',
    location:    'Global',
    description: 'Brand identity and web presence for a strategic consulting firm. Built to convey authority. Dark, deliberate, and conversion focused from the first scroll.',
    tags:        ['Consulting', 'Brand'],
    siteUrl:     'https://www.combinedarms.com.au/',
  },
  {
    slug:        'eco-clearwater',
    name:        'Eco Clearwater',
    industry:    'Services & Manufacturing',
    location:    'Australia',
    description: 'Site for a chemical free water treatment technology. Clear, technical, and outcome led. Leads with the numbers that matter (scale reduction, energy savings, response time).',
    tags:        ['Cleantech', 'Manufacturing'],
    siteUrl:     'https://eco-clearwater-website.vercel.app/',
  },
  {
    slug:        'rubin-partners',
    name:        'Rubin Partners',
    industry:    'Accounting',
    location:    'Australia',
    description: 'Site for an established accounting, financial planning and lending practice. Designed to signal credibility immediately. Credentials, history, and a low friction consultation booking.',
    tags:        ['Accounting', 'Financial'],
    siteUrl:     'https://rubin-partners-website.vercel.app/',
  },
  {
    slug:        'glasshair',
    name:        "Glass'Hair Studio",
    industry:    'Beauty',
    location:    'Richmond, VIC',
    description: 'Boutique site for a Richmond hair studio. Photographic, minimal, and built around the only action that matters for a salon: booking.',
    tags:        ['Beauty', 'Salon'],
    siteUrl:     'https://www.glasshair.com.au/',
  },
];

export default portfolio;
