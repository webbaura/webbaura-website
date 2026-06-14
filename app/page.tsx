import HomeNav         from '@/components/sections/HomeNav';
import HomeHero        from '@/components/sections/HomeHero';
import HomeThesis      from '@/components/sections/HomeThesis';
import HomeServices    from '@/components/sections/HomeServices';
import HomePortfolio   from '@/components/sections/HomePortfolio';
import HomeProcess     from '@/components/sections/HomeProcess';
import HomeWhy         from '@/components/sections/HomeWhy';
import HomeTestimonial from '@/components/sections/HomeTestimonial';
import HomeFAQ         from '@/components/sections/HomeFAQ';
import HomeFinalCTA    from '@/components/sections/HomeFinalCTA';
import HomeFooter      from '@/components/sections/HomeFooter';
import HomeJsonLd      from '@/components/sections/HomeJsonLd';

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HomeNav />
      <main>
        <HomeHero />
        <HomeThesis />
        <HomeServices />
        <HomePortfolio />
        <HomeProcess />
        <HomeWhy />
        <HomeTestimonial />
        <HomeFAQ />
        <HomeFinalCTA />
      </main>
      <HomeFooter />
    </>
  );
}
