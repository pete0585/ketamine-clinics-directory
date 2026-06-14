import { Metadata } from 'next'
import Link from 'next/link'
import { getListings } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Best Ketamine Clinics in Phoenix, AZ | Ketamine Therapy Finder',
  description: 'Find the best ketamine therapy clinics in Phoenix, AZ. Compare providers, read profiles, and book consultations.',
}

export default async function BestKetamineClinicsPage() {
  const listings = await getListings({ city: 'Phoenix', state: 'AZ', limit: 10 })

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Best Ketamine Clinics in Phoenix, AZ
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Find licensed ketamine therapy providers in Phoenix. All clinics are verified medical practices offering IV ketamine, esketamine, and related treatments.
      </p>

      {listings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
          <p className="text-gray-600 mb-4">We are building our Phoenix directory. Check back soon or browse all clinics.</p>
          <Link href="/listings" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg">
            Browse All Clinics
          </Link>
        </div>
      )}

      <section className="prose prose-lg max-w-none">
        <h2>Ketamine Therapy in Phoenix, AZ</h2>
        <p>
          Phoenix has a growing number of ketamine therapy providers offering treatment for depression, PTSD, anxiety, chronic pain, and other conditions. When choosing a clinic, look for board-certified physicians, proper monitoring equipment, and a thorough intake process.
        </p>
        <h3>What to Expect at a Phoenix Ketamine Clinic</h3>
        <ul>
          <li>Initial consultation and medical intake</li>
          <li>Series of 6 IV ketamine infusions over 2-3 weeks</li>
          <li>Vital sign monitoring throughout each session</li>
          <li>Integration support and follow-up care</li>
        </ul>
        <h3>Browse by Condition</h3>
        <ul>
          <li><Link href="/conditions/depression">Ketamine for Depression in Phoenix</Link></li>
          <li><Link href="/conditions/ptsd">Ketamine for PTSD in Phoenix</Link></li>
          <li><Link href="/conditions/anxiety">Ketamine for Anxiety in Phoenix</Link></li>
          <li><Link href="/conditions/chronic-pain">Ketamine for Chronic Pain in Phoenix</Link></li>
        </ul>
      </section>
    </main>
  )
}
