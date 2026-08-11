import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCity } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Best Ketamine Clinics in Tampa, FL | Ketamine Therapy Finder',
  description: 'Find the best ketamine therapy clinics in Tampa, FL. Compare providers for depression, PTSD, anxiety, and chronic pain across the Tampa Bay area.',
}

export default async function BestKetamineClinicsTampaPage() {
  const listings = await getListingsByCity('Tampa', 'FL', 10)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/listings" className="hover:text-teal-600">Find a Clinic</Link>
        <span className="mx-2">/</span>
        <span>Best Clinics in Tampa, FL</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Best Ketamine Clinics in Tampa, FL
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Tampa is Florida's second-largest ketamine market, with 9 clinics serving the Tampa Bay
        area. The region's growing population, significant veteran community (MacDill AFB),
        and retiree demographic with chronic pain needs have made Tampa one of the fastest-growing
        markets for ketamine therapy in the Southeast. Pricing in Tampa is among the most
        competitive in Florida, making it an attractive option compared to Miami and Fort Lauderdale.
      </p>

      {listings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
          <p className="text-gray-600 mb-4">Browse all ketamine clinics in Florida.</p>
          <Link href="/find/fl" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View Florida Clinics
          </Link>
        </div>
      )}

      <section className="prose prose-lg max-w-none mb-12">
        <h2>Ketamine Therapy in Tampa, FL</h2>
        <p>
          Tampa's ketamine clinics serve a diverse patient mix: civilians with treatment-resistant
          depression and anxiety, veterans from MacDill AFB and the surrounding military community,
          and an older demographic dealing with chronic pain conditions. The market includes both
          anesthesiologist-led infusion centers and psychiatry-integrated practices. Several Tampa
          clinics offer Spravato (esketamine) in addition to IV ketamine.
        </p>
        <p>
          A 6-infusion series in Tampa typically costs $2,250–$3,450 — among the most affordable
          in the Southeast. This represents meaningful value compared to Miami ($3,000–$4,800) or
          New York ($3,600–$5,400).
        </p>

        <h3>What Tampa Patients Should Know</h3>
        <ul>
          <li>A 6-infusion series typically costs $2,250–$3,450</li>
          <li>MacDill AFB community has created strong veteran PTSD expertise in the local market</li>
          <li>Chronic pain specialty is prominent due to the retiree demographic</li>
          <li>Multiple clinics offer weekend and evening appointment availability</li>
        </ul>

        <h3>Conditions Treated</h3>
        <ul>
          <li><Link href="/conditions/depression">Treatment-resistant depression</Link></li>
          <li><Link href="/conditions/ptsd">PTSD</Link></li>
          <li><Link href="/conditions/anxiety">Anxiety disorders</Link></li>
          <li><Link href="/conditions/chronic-pain">Chronic pain</Link></li>
          <li><Link href="/conditions/crps">CRPS</Link></li>
          <li><Link href="/conditions/bipolar">Bipolar depression</Link></li>
        </ul>

        <h3>Other Florida Ketamine Markets</h3>
        <p>
          Florida has strong ketamine markets in{' '}
          <Link href="/find/fl/miami">Miami</Link>,{' '}
          <Link href="/find/fl/fort-lauderdale">Fort Lauderdale</Link>, and{' '}
          <Link href="/find/fl/jacksonville">Jacksonville</Link>.
        </p>
      </section>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This directory is for informational purposes only. Consult a
        licensed medical professional before beginning any ketamine treatment.
      </div>
    </main>
  )
}
