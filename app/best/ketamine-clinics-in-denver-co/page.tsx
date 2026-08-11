import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCity } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Best Ketamine Clinics in Denver, CO | Ketamine Therapy Finder',
  description: 'Find the best ketamine therapy clinics in Denver, CO. Compare providers for depression, PTSD, anxiety, OCD, and chronic pain. Denver has one of the strongest ketamine markets in the Mountain West.',
}

export default async function BestKetamineClinicsDenverPage() {
  const listings = await getListingsByCity('Denver', 'CO', 10)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/listings" className="hover:text-teal-600">Find a Clinic</Link>
        <span className="mx-2">/</span>
        <span>Best Clinics in Denver, CO</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Best Ketamine Clinics in Denver, CO
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Denver is one of the strongest ketamine therapy markets in the Mountain West, with 9 clinics
        in the city proper and additional providers in Colorado Springs, Boulder, and the Denver
        metro area. Colorado's progressive stance on mental health treatment and its large outdoor
        recreation community — which carries a substantial burden of chronic pain and mental health
        issues — has made Denver a hub for innovative psychiatric care including ketamine therapy.
      </p>

      {listings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
          <p className="text-gray-600 mb-4">Browse all ketamine clinics in Colorado.</p>
          <Link href="/find/co" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View Colorado Clinics
          </Link>
        </div>
      )}

      <section className="prose prose-lg max-w-none mb-12">
        <h2>Ketamine Therapy in Denver, CO</h2>
        <p>
          Denver's ketamine providers include both standalone infusion centers and psychiatrist-led
          practices that integrate ketamine into a broader mental health treatment plan. Several
          Denver clinics have developed particular expertise in ketamine for chronic pain conditions
          — reflecting Colorado's high proportion of patients with sports injuries, CRPS, and
          fibromyalgia. A 6-infusion series in Denver typically costs $2,400–$3,900.
        </p>

        <h3>What Sets Denver Ketamine Clinics Apart</h3>
        <ul>
          <li>Stronger-than-average chronic pain and CRPS expertise</li>
          <li>Several clinics offer ketamine-assisted psychotherapy with licensed therapists</li>
          <li>A 6-infusion series typically costs $2,400–$3,900</li>
          <li>Many providers are familiar with Colorado's regulatory environment for emerging therapies</li>
        </ul>

        <h3>Conditions Treated</h3>
        <ul>
          <li><Link href="/conditions/depression">Treatment-resistant depression</Link></li>
          <li><Link href="/conditions/ptsd">PTSD</Link></li>
          <li><Link href="/conditions/anxiety">Anxiety</Link></li>
          <li><Link href="/conditions/chronic-pain">Chronic pain</Link></li>
          <li><Link href="/conditions/crps">CRPS</Link></li>
          <li><Link href="/conditions/ocd">OCD</Link></li>
          <li><Link href="/conditions/bipolar">Bipolar depression</Link></li>
        </ul>

        <h3>Nearby Colorado Cities</h3>
        <p>
          Additional options are available in{' '}
          <Link href="/find/co/colorado-springs">Colorado Springs</Link> and the broader Colorado
          Front Range.{' '}
          <Link href="/find/ut/salt-lake-city">Salt Lake City</Link> is another strong Mountain West
          option for patients in the region.
        </p>
      </section>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This directory is for informational purposes only. Consult a
        licensed medical professional before beginning any ketamine treatment.
      </div>
    </main>
  )
}
