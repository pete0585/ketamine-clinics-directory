import { Metadata } from 'next'
import Link from 'next/link'
import { getListings } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Ketamine for Chronic Pain | Ketamine Therapy Finder',
  description: 'Find ketamine infusion clinics specializing in fibromyalgia, CRPS, neuropathic pain, and other chronic pain conditions.',
}

export default async function ConditionPage() {
  const listings = await getListings({ condition: 'chronic-pain', limit: 6 })

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for Chronic Pain</h1>
        <p className="text-gray-600 text-lg">Find ketamine infusion clinics specializing in fibromyalgia, CRPS, neuropathic pain, and other chronic pain conditions.</p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p>Ketamine is a powerful analgesic that works through NMDA receptor blockade — a completely different mechanism from opioids or NSAIDs. This makes it uniquely effective for chronic pain conditions involving central sensitization.</p><p>Ketamine infusion therapy for chronic pain typically involves longer sessions (3-4 hours) at higher doses than psychiatric protocols. Many patients achieve months of pain relief from a single treatment series of 3-5 consecutive infusions.</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Find Ketamine Clinics for Ketamine for Chronic Pain</h2>
        {listings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-600 mb-4">Browse all ketamine clinics in our directory</p>
            <Link href="/listings" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Browse All Clinics
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
