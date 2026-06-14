export const homeCopy = {
  hero: {
    eyebrow: 'Melbourne · Built with discipline',
    headline: 'Websites that earn their keep.',
    sub:
      "Most small business websites sit there looking presentable while doing nothing. We design and build sites that answer the right questions, earn trust quickly, and turn visitors into enquiries on any device, at any hour.",
    primaryCta: 'Book a free call',
    secondaryCta: 'See recent work',
  },

  trust: [
    { value: '5+',      label: 'Sites delivered',         sub: 'live and in production',     accent: false },
    { value: '★ 5.0',   label: 'Client rating',           sub: 'every project, every time',  accent: true  },
    { value: 'Yours',   label: 'Full code ownership',     sub: 'no lock in, no platform fees', accent: false },
    { value: 'Mobile',  label: 'First, always',           sub: '70%+ of local searches',     accent: false },
  ],

  thesis: {
    eyebrow: 'The thesis',
    headline: 'Most sites look the part.\nFew do the job.',
    body:
      "A beautiful website that doesn't convert is just an expensive brochure. Webbaura was built to be the opposite. Strategic, disciplined, and honest about what works. Every section serves the visitor; every visitor has a reason to act.",
  },

  services: {
    eyebrow: 'What we build',
    headline: 'Two packages.\nNo surprises.',
    sub: 'Start with a clean, fast site, or go further with a CMS, automations, and integrations built in. E-commerce isn’t something we offer; if that’s what you need, we’ll point you somewhere good.',
    items: [
      {
        name: 'Basic',
        price: 'From $800',
        tagline: 'A professional site that gets you found and gets the phone ringing.',
        features: [
          'Custom design, no templates',
          'Conversion focused structure',
          'Technical SEO foundations',
          'Contact form + analytics',
          '1 month of ongoing support',
        ],
        cta: 'Start with Basic',
        featured: false,
      },
      {
        name: 'Premium',
        price: 'From $2,000',
        tagline: 'Everything in Basic, plus the tools to run it yourself and automate the busywork.',
        features: [
          'Everything in Basic',
          'Sanity.io CMS, edit content yourself',
          'Automations (N8N, auto responses)',
          'Integrations & chatbots',
          'Google Business Profile setup',
          '3 months of ongoing support',
        ],
        cta: 'Go Premium',
        featured: true,
      },
    ],
  },

  process: {
    eyebrow: 'How it works',
    headline: 'Three steps.\nNo deposit.',
    sub:
      'You see the site before you commit. If it works for you, we talk numbers. If it doesn’t, we shake hands and you’ve lost nothing.',
    steps: [
      {
        n: '01',
        title: 'We analyse your market',
        body:
          "We benchmark your current site against your local competitors. What's working, what's broken, what the best performing sites in your industry actually do.",
      },
      {
        n: '02',
        title: 'We build your new site',
        body:
          'A production ready Next.js site. Mobile first, Core Web Vitals tested, every section earning its place. Built in days, not months.',
      },
      {
        n: '03',
        title: 'You see it. You decide.',
        body:
          'A live staging URL lands in your inbox. If you love it, we talk. If not, walk away with no obligation. The research stays with you.',
      },
    ],
  },

  why: {
    eyebrow: 'How we work',
    headline: 'Your interest first.\nAlways.',
    points: [
      {
        title: 'You see it before you pay',
        body:
          'A live staging site is built and sent to you before any invoice is raised. If it doesn’t work for your business, the risk is ours, not yours.',
      },
      {
        title: 'Built for mobile first',
        body:
          'More than 70% of local searches happen on a phone. Every site is designed mobile first. Fast, thumb friendly, easy with one hand. Desktop is the bonus.',
      },
      {
        title: 'You own everything',
        body:
          'The code is yours from day one. No platform subscriptions, no permission required to make changes, no hostage situation if you outgrow us.',
      },
    ],
  },

  testimonial: {
    quote:
      "Aaron doesn't waste your time. He looked at what we were trying to communicate, understood it, and built something that actually reflects the standard of our work. Clean code, fast delivery, and the site has performed exactly as intended since day one.",
    name: 'Leon',
    role: 'Director',
    org:  'Combined Arms Consulting',
  },

  faq: {
    eyebrow: 'Common questions',
    headline: 'Answered straight.',
    items: [
      {
        q: 'How much does a website cost?',
        a: 'Basic starts at $800 and Premium starts at $2,000. The final price depends on scope: number of pages, CMS, integrations. You see a fixed quote up front, before any work starts.',
      },
      {
        q: 'How long does a build take?',
        a: 'It depends on the requirements, but most sites can be delivered within 7 days. Rapid delivery is part of the offer. We agree the timeline before starting and stick to it.',
      },
      {
        q: 'Do I really see the site before I pay anything?',
        a: 'Yes. We build a complete staging site on our own infrastructure first. You review it, kick the tyres, and decide. If you proceed, we transfer everything to you. If not, you owe nothing.',
      },
      {
        q: 'Do you do e-commerce or large platforms?',
        a: "We don't. We focus on conversion led marketing sites for small businesses and service providers. If you need Shopify or a complex e-commerce build, we'll point you somewhere good.",
      },
      {
        q: 'What about hosting and ongoing maintenance?',
        a: 'We can host the site for you on a transparent monthly plan, or hand over the entire codebase so you can host it yourself. No lock in. Either way, you own the code.',
      },
      {
        q: 'Are you based in Melbourne?',
        a: 'Yes. Based in Melbourne, working with businesses across Australia. Meetings are by video; the work itself is done locally.',
      },
    ],
  },

  finalCta: {
    eyebrow: 'Get in touch',
    headline: 'See what your site could be, before you commit.',
    sub:
      "Fifteen minutes on a call. If it's a good fit, we'll show you what we'd build. No deposit, no pressure, no obligation.",
    primaryCta: 'Book a free call',
    secondaryCta: 'Send an email',
    foot: `Based in Melbourne · Typically replies within a few hours`,
  },
} as const;
