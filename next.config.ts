import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Konfiguracja obrazków - niezbędna dla Sanity */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },

  /* "Mega wypasione" przekierowania ze starego WordPressa */
  async redirects() {
    return [
      {
        // Obsługuje: /index.php/tytul-posta/ -> /post/tytul-posta
        source: '/index.php/:slug/',
        destination: '/post/:slug',
        permanent: true,
      },
      {
        // Obsługuje: /index.php/tytul-posta -> /post/tytul-posta
        source: '/index.php/:slug',
        destination: '/post/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;