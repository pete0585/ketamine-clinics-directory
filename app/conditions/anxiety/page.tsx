import { Metadata } from 'next'
import Link from 'next/link'
import { getListings } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Ketamine for Anxiety | Ketamine Therapy Finder',
  description: 'Find ketamine therapy clinics specializing in anxiety disorders, social anxiety, and generalized anxiety disorder.',
}

export default async function ConditionPage() {
  const listings = await getListings({ condition: 'anxiety', limit: 6 })

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for Anxiety</h1>
        <p className="text-gray-600 text-lg">Find ketamine therapy clinics specializing in anxiety disorders, social anxiety, and generalized anxiety disorder.</p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p>Anxiety disorders are among the most common mental health conditions, yet many patients find standard treatments inadequate. Ketamine therapy is showing promise for generalized anxiety disorder (GAD), social anxiety, and anxiety comorbid with depression or PTSD.</p><p>Research suggests ketamine's rapid neuroplastic effects can reduce anxiety symptoms significantly, with effects often apparent within hours of treatment. Clinics may pair ketamine with CBT or mindfulness-based therapy for optimal outcomes.</p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Find Ketamine Clinics for Ketamine for Anxiety</h2>
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
