import { SITE } from '@/lib/site';
import { homeCopy } from '@/lib/homepageCopy';

export function HomeJsonLd() {
  const orgId = `${SITE.url}/#organization`;
  const webId = `${SITE.url}/#website`;

  const graph = [
    {
      '@type': ['LocalBusiness', 'ProfessionalService', 'Organization'],
      '@id': orgId,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` },
      image: `${SITE.url}/og-image.png`,
      description:
        'Strategic, conversion-focused websites for Australian small businesses. Mobile-first, no lock-in, full code ownership.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.city,
        addressCountry: 'AU',
      },
      areaServed: { '@type': 'Country', name: 'Australia' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Website packages',
        itemListElement: homeCopy.services.items.map((s, i) => ({
          '@type': 'Offer',
          position: i + 1,
          name: s.name,
          description: s.tagline,
          price: s.price.replace(/[^\d]/g, ''),
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': webId,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': orgId },
    },
    {
      '@type': 'FAQPage',
      mainEntity: homeCopy.faq.items.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}

export default HomeJsonLd;
