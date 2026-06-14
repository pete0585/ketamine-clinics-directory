import { Metadata } from 'next'
import Link from 'next/link'
import { getListings } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Ketamine for Bipolar Depression | Ketamine Therapy Finder',
  description: 'Find ketamine therapy clinics specializing in bipolar depression treatment.',
}

export default async function ConditionPage() {
  const listings = await getListings({ condition: 'bipolar', limit: 6 })

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for Bipolar Depression</h1>
        <p className="text-gray-600 text-lg">Find ketamine therapy clinics specializing in bipolar depression treatment.</p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p>Bipolar depression is notoriously difficult to treat — antidepressants can trigger mania, and mood stabilizers often provide incomplete relief for depressive episodes. Ketamine therapy offers a novel approach for the depressive phase of bipolar disorder.</p><p>Emerging research suggests ketamine can rapidly lift bipolar depression without triggering manic episodes, making it a promising option for patients with treatment-resistant bipolar depression. Treatment requires careful monitoring by psychiatrists experienced in mood disorders.</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Find Ketamine Clinics for Ketamine for Bipolar Depression</h2>
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
