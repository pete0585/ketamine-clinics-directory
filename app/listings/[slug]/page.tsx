import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Globe, Video, CheckCircle, Star, ArrowLeft, ShieldCheck } from 'lucide-react'
import { getListingBySlug } from '@/lib/data'
import { formatPhone, stateAbbreviationToName } from '@/lib/utils'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const listing = await getListingBySlug(slug).catch(() => null)
  if (!listing) return { title: 'Ketamine Clinic Not Found' }

  const title = `${listing.full_name} — Ketamine Clinic in ${listing.city}, ${listing.state}`
  const description = listing.bio
    ? listing.bio.slice(0, 155)
    : `Find ketamine therapy at ${listing.full_name} in ${listing.city}, ${listing.state}. ${listing.accepts_telehealth || listing.telehealth ? 'Telehealth available.' : ''}`

  return {
    title,
    description,
    alternates: { canonical: `/listings/${slug}` },
    openGraph: { title, description, type: 'profile' },
  }
}

export default async function ListingPage({ params }: Props) {
  const { slug } = await params
  const listing = await getListingBySlug(slug).catch(() => null)

  if (!listing) notFound()

  const stateName = stateAbbreviationToName(listing.state ?? '')
  const isVerified = listing.plan_tier === 'verified' || listing.plan_tier === 'featured'
  const isClaimed = listing.plan_tier !== null && listing.plan_tier !== 'unclaimed'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    name: listing.full_name,
    description: listing.bio ?? undefined,
    telephone: listing.phone ?? undefined,
    url: listing.website ?? undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: listing.city,
      addressRegion: listing.state,
      postalCode: listing.zip ?? undefined,
      addressCountry: 'US',
    },
    medicalSpecialty: 'Ketamine Therapy',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/listings" className="inline-flex items-center gap-1.5 text-sm text-charcoal-400 hover:text-charcoal-700 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to directory
        </Link>

        <div className="card p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="shrink-0">
              {listing.photo_url ? (
                <img
                  src={listing.photo_url}
                  alt={listing.full_name}
                  className="h-28 w-28 rounded-2xl object-cover shadow-soft"
                />
              ) : (
                <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-sage-100 text-4xl font-serif font-bold text-sage-400 shadow-soft">
                  {listing.full_name.charAt(0)}
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <h1 className="font-serif text-2xl font-bold text-charcoal-900">{listing.full_name}</h1>
                {listing.plan_tier === 'featured' && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 mt-1">
                    <Star className="h-3 w-3" /> Featured
                  </span>
                )}
                {isVerified && listing.plan_tier !== 'featured' && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-sage-100 px-2.5 py-0.5 text-xs font-semibold text-sage-700 mt-1">
                    <ShieldCheck className="h-3 w-3" /> Verified
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-charcoal-400 text-sm mb-3">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{listing.city}, {listing.state} — {stateName}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {(listing.accepts_telehealth || listing.telehealth) && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    <Video className="h-3 w-3" /> Telehealth
                  </span>
                )}
                {(listing.accepting_new_patients || listing.accepting_new_clients) && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                    <CheckCircle className="h-3 w-3" /> Accepting new patients
                  </span>
                )}
              </div>

              {isClaimed ? (
                <div className="flex flex-wrap gap-3">
                  {listing.phone && (
                    <a href={`tel:${listing.phone}`} className="btn-primary flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4" />
                      {formatPhone(listing.phone)}
                    </a>
                  )}
                  {listing.website && (
                    <a href={listing.website} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 text-sm">
                      <Globe className="h-4 w-4" />
                      Visit Website
                    </a>
                  )}
                </div>
              ) : (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                  <p className="text-sm text-gray-500">Contact info visible after clinic claims their listing.</p>
                  <a href={`/claim/${listing.id}`} className="mt-2 inline-block text-sm font-medium text-sage-600 hover:underline">
                    Claim your profile →
                  </a>
                </div>
              )}
            </div>
          </div>

          {listing.bio && (
            <div className="mt-6 pt-6 border-t border-slate-100">
              <p className="text-charcoal-600 leading-relaxed">{listing.bio}</p>
            </div>
          )}
        </div>

        {listing.conditions_treated && listing.conditions_treated.length > 0 && (
          <div className="card p-6 mb-6">
            <h2 className="font-serif text-lg font-semibold text-charcoal-900 mb-3">Conditions Treated</h2>
            <div className="flex flex-wrap gap-2">
              {listing.conditions_treated.map((c: string) => (
                <span key={c} className="rounded-full bg-sage-50 px-3 py-1 text-xs font-medium text-sage-700">{c}</span>
              ))}
            </div>
          </div>
        )}

        {!isClaimed && (
          <div className="card p-6 border-sage-200 bg-sage-50">
            <p className="font-semibold text-sage-800 mb-1">Is this your clinic?</p>
            <p className="text-sm text-sage-600 mb-3">Claim your free listing to add contact info and get a verified badge.</p>
            <Link href={`/claim/${listing.id}`} className="btn-primary text-sm">Claim Listing</Link>
          </div>
        )}
      </div>
    </>
  )
}
