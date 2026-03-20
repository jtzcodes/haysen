import { MetadataRoute } from 'next'
import { products } from '@/config/products'
import { getSortedPostsData } from '@/lib/blog'

const BASE_URL = 'https://haysen.cl'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getSortedPostsData()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/productos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/productos/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...blogRoutes]
}
