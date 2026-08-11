import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCity } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Best Ketamine Clinics in Dallas, TX | Ketamine Therapy Finder',
  description: 'Find the best ketamine therapy clinics in Dallas, TX. Compare providers for depression, PTSD, anxiety, and chronic pain. The Dallas-Fort Worth metro has 20+ ketamine providers.',
}

export default async function BestKetamineClinicsDallasPage() {
  const listings = await getListingsByCity('Dallas', 'TX', 10)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/listings" className="hover:text-teal-600">Find a Clinic</Link>
        <span className="mx-2">/</span>
        <span>Best Clinics in Dallas, TX</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">
        Best Ketamine Clinics in Dallas, TX
      </h1>
      <p className="text-gray-600 text-lg mb-10">
        Dallas and the greater DFW metro area has one of the most competitive ketamine markets in
        Texas. With 8 clinics in Dallas proper and additional providers in Fort Worth, Frisco,
        McKinney, Plano, Southlake, and Flower Mound, the metro area gives patients over 20
        providers to choose from. Competition has driven pricing down, making DFW one of the
        more affordable ketamine markets in the country.
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
        <h2>Ketamine Therapy in Dallas, TX</h2>
        <p>
          The DFW ketamine market is served by a mix of anesthesiologist-led infusion centers and
          psychiatry-integrated practices. The concentration of military families from nearby bases
          (Fort Cavazos, NAS Fort Worth, etc.) has created notable expertise in combat-related
          PTSD treatment across multiple Dallas-area clinics. Per-infusion pricing in DFW typically
          runs $375–$600, about 20–30% below coastal markets.
        </p>

        <h3>What Dallas Patients Should Know</h3>
        <ul>
          <li>A 6-infusion series typically costs $2,250–$3,600 in the DFW metro</li>
          <li>Multiple suburban locations (Frisco, McKinney, Plano) reduce commute time for North Dallas patients</li>
          <li>Several clinics have experience with veteran PTSD from nearby military communities</li>
          <li>Spravato is available at select REMS-certified clinics</li>
        </ul>

        <h3>Conditions Treated</h3>
        <ul>
          <li><Link href="/conditions/depression">Treatment-resistant depression</Link></li>
          <li><Link href="/conditions/ptsd">PTSD (including combat-related)</Link></li>
          <li><Link href="/conditions/anxiety">Anxiety disorders</Link></li>
          <li><Link href="/conditions/chronic-pain">Chronic pain</Link></li>
          <li><Link href="/conditions/ocd">OCD</Link></li>
        </ul>

        <h3>DFW Suburban Clinics</h3>
        <p>
          If Dallas proper doesn't have convenient availability, the DFW metro has strong provider
          bases in <Link href="/find/tx/fort-worth">Fort Worth</Link>,{' '}
          <Link href="/find/tx/frisco">Frisco</Link>,{' '}
          <Link href="/find/tx/mckinney">McKinney</Link>, and{' '}
          <Link href="/find/tx/plano">Plano</Link>.
        </p>
      </section>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 text-sm text-gray-600">
        <strong>Disclaimer:</strong> This directory is for informational purposes only. Consult a
        licensed medical professional before beginning any ketamine treatment.
      </div>
    </main>
  )
}
