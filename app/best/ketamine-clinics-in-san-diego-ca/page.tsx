import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCity } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Best Ketamine Clinics in San Diego, CA | Ketamine Therapy Finder',
  description: 'Find the best ketamine therapy clinics in San Diego, CA. Compare providers for depression, PTSD, anxiety, and chronic pain. San Diego has a strong veteran-focused ketamine market.',
}

export default async function BestKetamineClinicsSanDiegoPage() {
  const listings = await getListingsByCity('San Diego', 'CA', 10)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/listings" className="hover:text-teal-600">Find a Clinic</Link>
        <span className="mx-2">/</span>
        <span>Best Clinics in San Diego, CA</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Best Ketamine Clinics in San Diego, CA
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        San Diego has one of the strongest veteran-focused ketamine markets in the country.
        Home to major military installations (Camp Pendleton, Naval Base San Diego, MCAS Miramar),
        the city has developed significant ketamine expertise in combat PTSD, TBI-associated
        depression, and moral injury. With 8 clinics in San Diego proper and additional providers
        in La Jolla and Encinitas, the greater San Diego area offers patients strong options at
        pricing below San Francisco and Los Angeles.
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
        <h2>Ketamine Therapy in San Diego, CA</h2>
        <p>
          San Diego's ketamine clinics reflect the city's large active-duty and veteran population.
          Several providers have deep clinical experience with the specific presentations of
          combat-related PTSD, moral injury, and TBI-associated psychiatric conditions that are
          common among returning service members. The market also serves San Diego's broader civilian
          population seeking treatment for depression, anxiety, and chronic pain conditions.
        </p>
        <p>
          A 6-infusion series in San Diego typically costs $3,000–$4,800, roughly 10–20% below
          San Francisco pricing but above the DFW or Phoenix markets.
        </p>

        <h3>Notable Features of San Diego's Ketamine Market</h3>
        <ul>
          <li>Strong veteran and military family expertise across multiple clinics</li>
          <li>La Jolla and Encinitas have additional high-quality providers for North County patients</li>
          <li>A 6-infusion series typically costs $3,000–$4,800</li>
          <li>Several clinics offer integration therapy and psychiatric coordination</li>
          <li>Multiple clinics are REMS-certified for Spravato</li>
        </ul>

        <h3>Conditions Treated</h3>
        <ul>
          <li><Link href="/conditions/depression">Treatment-resistant depression</Link></li>
          <li><Link href="/conditions/ptsd">PTSD (including combat-related)</Link></li>
          <li><Link href="/conditions/anxiety">Anxiety disorders</Link></li>
          <li><Link href="/conditions/chronic-pain">Chronic pain</Link></li>
          <li><Link href="/conditions/crps">CRPS</Link></li>
          <li><Link href="/resources/ketamine-for-veterans">Veteran-specific PTSD and TBI</Link></li>
        </ul>

        <h3>Nearby San Diego Area Clinics</h3>
        <p>
          North County patients should also check providers in{' '}
          <Link href="/find/ca/la-jolla">La Jolla</Link> and{' '}
          <Link href="/find/ca/encinitas">Encinitas</Link>.{' '}
          <Link href="/find/ca/los-angeles">Los Angeles</Link> has the largest provider base in
          California for patients willing to travel.
        </p>
      </section>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This directory is for informational purposes only. Consult a
        licensed medical professional before beginning any ketamine treatment.
      </div>
    </main>
  )
}
