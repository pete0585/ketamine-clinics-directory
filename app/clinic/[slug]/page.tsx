import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getListingBySlug } from '@/lib/data'
import ListingDetail from '@/components/ListingDetail'
import { stateAbbreviationToName } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const listing = await getListingBySlug(slug)

  if (!listing) {
    return { title: 'Ketamine Clinic Not Found' }
  }

  const title = `${listing.full_name}, clinic in ${listing.city}, ${listing.state}`
  const description = listing.bio
    ? `${listing.bio.slice(0, 155).trim()}…`
    : `Find ${listing.full_name}, clinic in ${listing.city}, ${stateAbbreviationToName(listing.state)}. ${listing.telehealth ? 'Telehealth available. ' : ''}${listing.accepting_new_clients ? 'Accepting new clients.' : ''}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      images: listing.photo_url
        ? [{ url: listing.photo_url, alt: listing.full_name }]
        : undefined,
    },
  }
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params
  const listing = await getListingBySlug(slug)

  if (!listing) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    name: listing.full_name,
    description: listing.bio ?? undefined,
    image: listing.photo_url ?? undefined,
    telephone: listing.phone ?? undefined,
    url: listing.website ?? undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip ?? undefined,
      addressCountry: 'US',
    },
    ...(listing.lat && listing.lng
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: listing.lat,
            longitude: listing.lng,
          },
        }
      : {}),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'clinic',
      name: 'International Board Certified Ketamine Clinic',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: process.env.NEXT_PUBLIC_SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Find a Ketamine Clinic', item: `${process.env.NEXT_PUBLIC_SITE_URL}/listings` },
        {
          '@type': 'ListItem',
          position: 3,
          name: `${listing.city}, ${listing.state}`,
          item: `${process.env.NEXT_PUBLIC_SITE_URL}/find/${listing.state.toLowerCase()}/${listing.city.toLowerCase().replace(/\s+/g, '-')}-${listing.state.toLowerCase()}`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: listing.full_name,
          item: `${process.env.NEXT_PUBLIC_SITE_URL}/clinic/${listing.slug}`,
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ListingDetail listing={listing} />
    </>
  )
}
