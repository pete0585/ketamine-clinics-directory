import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCity } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Best Ketamine Clinics in San Francisco, CA | Ketamine Therapy Finder',
  description: 'Find the best ketamine therapy clinics in San Francisco, CA. Compare providers offering IV ketamine, Spravato, and esketamine for depression, PTSD, anxiety, and chronic pain.',
}

export default async function BestKetamineClinicsSFPage() {
  const listings = await getListingsByCity('San Francisco', 'CA', 10)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/listings" className="hover:text-teal-600">Find a Clinic</Link>
        <span className="mx-2">/</span>
        <span>Best Clinics in San Francisco, CA</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Best Ketamine Clinics in San Francisco, CA
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        San Francisco has one of the largest concentrations of ketamine therapy providers in the
        country — 18 clinics serving the Bay Area as of 2026. From psychiatrist-led ketamine
        practices in the Financial District to integrative wellness centers in the Mission and Hayes
        Valley, the Bay Area offers patients a wide range of approaches to ketamine treatment for
        depression, PTSD, anxiety, chronic pain, and more.
      </p>

      {listings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
          <p className="text-gray-600 mb-4">Browse all ketamine clinics in California.</p>
          <Link href="/find/ca" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View California Clinics
          </Link>
        </div>
      )}

      <section className="prose prose-lg max-w-none mb-12">
        <h2>Ketamine Therapy in San Francisco, CA</h2>
        <p>
          San Francisco's ketamine market reflects the Bay Area's broader orientation toward mental
          health care and psychedelic medicine. Many SF clinics are psychiatrist-led or have strong
          integration therapy partnerships — a higher standard than you'll find in some markets where
          ketamine is offered as a straightforward pain procedure. If you're seeking treatment for a
          complex psychiatric condition, the SF Bay Area is one of the best markets in the country
          for finding a provider with deep clinical experience.
        </p>

        <h3>What to Expect from SF Ketamine Clinics</h3>
        <ul>
          <li>Most SF clinics conduct thorough psychiatric intake before approving treatment</li>
          <li>Integration therapy is commonly offered or coordinated</li>
          <li>A 6-infusion series in San Francisco typically costs $3,300–$5,100</li>
          <li>Spravato (esketamine) is available at several clinics that hold REMS certification</li>
          <li>Telehealth intake and follow-up available at most providers</li>
        </ul>

        <h3>Conditions Treated by SF Ketamine Clinics</h3>
        <ul>
          <li><Link href="/conditions/depression">Treatment-resistant depression</Link></li>
          <li><Link href="/conditions/ptsd">PTSD</Link></li>
          <li><Link href="/conditions/anxiety">Anxiety disorders</Link></li>
          <li><Link href="/conditions/ocd">OCD</Link></li>
          <li><Link href="/conditions/chronic-pain">Chronic pain and fibromyalgia</Link></li>
          <li><Link href="/conditions/bipolar">Bipolar depression</Link></li>
        </ul>

        <h3>Nearby Bay Area Cities</h3>
        <p>
          If you cannot find availability in San Francisco proper, clinics in{' '}
          <Link href="/find/ca/oakland">Oakland</Link>,{' '}
          <Link href="/find/ca/san-jose">San Jose</Link>, and{' '}
          <Link href="/find/ca/san-diego">San Diego</Link> serve the broader California market.
        </p>
      </section>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This directory is for informational purposes only. Consult a
        licensed medical professional before beginning any ketamine treatment.
      </div>
    </main>
  )
}
