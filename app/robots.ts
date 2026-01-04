import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Nie chcemy indeksować panelu Sanity
    },
    sitemap: 'https://www.cryptopulsenow.xyz/sitemap.xml',
  }
}