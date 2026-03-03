import contentJson from '@/content.json';

// Extended content type — supports new fields from enriched pipeline
export interface ServiceItem  { title: string; description: string; price?: string; }
export interface PortfolioItem { title: string; description: string; url: string; image?: string; }
export interface Value         { title: string; body: string; }

export interface Content {
  business: {
    name: string;
    tagline: string;
    description: string;
    industry?: string;
    location?: string;
    phone?: string;
    address?: { street?: string; city?: string; state?: string; country?: string; };
  };
  philosophy: string;
  seo?: {
    siteUrl?: string;
    keywords?: string[];
  };
  social?: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
  pages: {
    home:      { hero: { headline: string; subheadline: string; cta: string; }; sections: unknown[]; };
    about:     { title: string; headline: string; content: string; values: Value[]; };
    services:  { headline: string; subheadline: string; items: ServiceItem[]; };
    portfolio: { headline: string; subheadline: string; items: PortfolioItem[]; };
    contact:   { headline: string; subheadline: string; email: string; cta: string; };
  };
}

export const content = contentJson as Content;
