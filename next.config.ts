import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Proposal pages live at webbaura.com/for/[slug]
      // Proxied from build server at tools.webbaura.com/proposal/[slug]
      {
        source: '/for/:slug',
        destination: 'https://tools.webbaura.com/proposal/:slug',
      },
    ];
  },
};

export default nextConfig;
