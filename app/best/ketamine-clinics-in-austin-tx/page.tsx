import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCity } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Best Ketamine Clinics in Austin, TX | Ketamine Therapy Finder',
  description: 'Find the best ketamine therapy clinics in Austin, TX. Compare providers for depression, PTSD, anxiety, and chronic pain. IV ketamine and Spravato options available.',
}

export default async function BestKetamineClinicsAustinPage() {
  const listings = await getListingsByCity('Austin', 'TX', 10)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/listings" className="hover:text-teal-600">Find a Clinic</Link>
        <span className="mx-2">/</span>
        <span>Best Clinics in Austin, TX</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Best Ketamine Clinics in Austin, TX
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Austin has emerged as one of Texas's leading ketamine therapy markets, with 10 clinics
        serving the city and its surrounding suburbs. Austin's culture of openness to alternative
        health treatments — combined with Texas's large veteran population — has driven strong
        demand for ketamine therapy, particularly for depression, PTSD, and anxiety. Prices in
        Austin are more competitive than coastal markets, making it one of the better-value cities
        for ketamine treatment in the country.
      </p>

      {listings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
          <p className="text-gray-600 mb-4">Browse all ketamine clinics in Texas.</p>
          <Link href="/find/tx" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View Texas Clinics
          </Link>
        </div>
      )}

      <section className="prose prose-lg max-w-none mb-12">
        <h2>Ketamine Therapy in Austin, TX</h2>
        <p>
          Austin's ketamine clinics range from anesthesiologist-led infusion centers to
          psychiatrist-directed practices with integrated mental health support. A 6-infusion series
          in Austin typically costs $2,400–$3,900 — 15–25% less than comparable treatment in New
          York or San Francisco. Several clinics serve Austin's substantial veteran community, with
          specific experience treating combat-related PTSD and moral injury alongside standard
          depression and anxiety protocols.
        </p>

        <h3>What to Expect in Austin</h3>
        <ul>
          <li>A 6-infusion series typically costs $2,400–$3,900</li>
          <li>Multiple clinics have specific experience with veteran PTSD</li>
          <li>Most clinics offer evening and weekend appointment availability</li>
          <li>Several providers offer telehealth intake and integration follow-up</li>
        </ul>

        <h3>Conditions Treated by Austin Ketamine Clinics</h3>
        <ul>
          <li><Link href="/conditions/depression">Treatment-resistant depression</Link></li>
          <li><Link href="/conditions/ptsd">PTSD (including combat-related)</Link></li>
          <li><Link href="/conditions/anxiety">Anxiety disorders</Link></li>
          <li><Link href="/conditions/chronic-pain">Chronic pain</Link></li>
          <li><Link href="/conditions/ocd">OCD</Link></li>
        </ul>

        <h3>Nearby Texas Cities</h3>
        <p>
          If you need more options, <Link href="/find/tx/san-antonio">San Antonio</Link>,{' '}
          <Link href="/find/tx/dallas">Dallas</Link>, and{' '}
          <Link href="/find/tx/houston">Houston</Link> all have significant ketamine provider bases.
        </p>
      </section>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This directory is for informational purposes only. Consult a
        licensed medical professional before beginning any ketamine treatment.
      </div>
    </main>
  )
}
