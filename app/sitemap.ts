import type { MetadataRoute } from 'next';
import { services, caseStudies } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://gogi.tech';

  const staticRoutes = ['', '/services', '/book', '/about', '/case-studies', '/blog', '/contact'];

  return [
    ...staticRoutes.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() })),
    ...services.map((service) => ({ url: `${baseUrl}/services/${service.slug}`, lastModified: new Date() })),
    ...caseStudies.map((caseStudy) => ({ url: `${baseUrl}/case-studies/${caseStudy.slug}`, lastModified: new Date() }))
  ];
}
