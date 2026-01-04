import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cryptopulsenow.xyz';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Tutaj w przyszłości dodamy funkcję, która pobiera wszystkie slug-i z Sanity
    // na razie dodajemy bazę, aby Google zaczęło Cię widzieć
  ]
}