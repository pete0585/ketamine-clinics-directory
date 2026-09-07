import type { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'
import { US_STATES } from '@/types'
import { getBestCityPageFolders } from '@/lib/best-city-pages'
import { BASE, cityPageCanonical } from '@/lib/site'

export const revalidate = 3600 // regenerate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient()

  const [listingsRes, citiesRes] = await Promise.all([
    supabase
      .from('ketamine_clinics_listings')
      .select('slug, updated_at')
      .eq('status', 'active')
      .order('updated_at', { ascending: false })
      .limit(1000),
    supabase
      .from('clinic_cities')
      .select('slug, state, updated_at')
      .eq('active', true)
      .gt('listing_count', 0),
  ])

  const listings = listingsRes.data ?? []
  const cities = citiesRes.data ?? []

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE}/listings`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/resources/what-is-an-clinic`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const statePages: MetadataRoute.Sitemap = US_STATES.map((s) => ({
    url: `${BASE}/find/${s.abbr.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE}/find/${city.state.toLowerCase()}/${city.slug}`,
    lastModified: city.updated_at ? new Date(city.updated_at) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const bestCityPages: MetadataRoute.Sitemap = getBestCityPageFolders().map((folder) => ({
    url: cityPageCanonical(folder),
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const listingPages: MetadataRoute.Sitemap = listings.map((listing) => ({
    url: `${BASE}/listings/${listing.slug}`,
    lastModified: listing.updated_at ? new Date(listing.updated_at) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...statePages, ...cityPages, ...bestCityPages, ...listingPages]
}
