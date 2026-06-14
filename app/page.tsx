import Link from 'next/link'
import { Metadata } from 'next'
import { getListings, getStates } from '@/lib/data'
import ListingCard from '@/components/ListingCard'
import SearchBar from '@/components/SearchBar'
import NewsletterFooterBar from '@/components/NewsletterFooterBar'

export const metadata: Metadata = {
  title: 'Find a Ketamine Therapy Clinic Near You | KetamineTherapyFinder.com',
  description: 'Search ketamine therapy clinics across the US. Find providers treating depression, PTSD, anxiety, chronic pain, and more. Filter by condition, location, and telehealth availability.',
  openGraph: {
    title: 'Find a Ketamine Therapy Clinic Near You | KetamineTherapyFinder.com',
    description: 'Search ketamine therapy clinics across the US treating depression, PTSD, anxiety, chronic pain, and more.',
    url: 'https://ketaminetherapyfinder.com',
    siteName: 'Ketamine Therapy Finder',
    type: 'website',
  },
}

const CONDITIONS = [
  { label: 'Depression', slug: 'depression', icon: '🧠' },
  { label: 'PTSD', slug: 'ptsd', icon: '🛡️' },
  { label: 'Anxiety', slug: 'anxiety', icon: '💆' },
  { label: 'Chronic Pain', slug: 'chronic-pain', icon: '🩺' },
  { label: 'OCD', slug: 'ocd', icon: '🔄' },
  { label: 'Bipolar Depression', slug: 'bipolar', icon: '⚡' },
  { label: 'Treatment-Resistant Depression', slug: 'depression', icon: '💊' },
  { label: 'Fibromyalgia', slug: 'chronic-pain', icon: '🌿' },
]

export default async function HomePage() {
  const [listings, states] = await Promise.all([
    getListings({ limit: 6 }),
    getStates(),
  ])

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find a Ketamine Therapy Clinic Near You
          </h1>
          <p className="text-xl text-teal-100 mb-8">
            Connect with licensed ketamine therapy providers treating depression, PTSD, anxiety, chronic pain, and more.
          </p>
          <SearchBar states={states} />
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Conditions Treated</h2>
          <p className="text-center text-gray-600 mb-10">Find clinics specializing in your condition</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CONDITIONS.map((c) => (
              <Link
                key={c.slug + c.label}
                href={`/conditions/${c.slug}`}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all text-center group"
              >
                <div className="text-3xl mb-2">{c.icon}</div>
                <div className="font-semibold text-gray-800 group-hover:text-teal-700 text-sm">{c.label}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Ketamine Clinics</h2>
          <p className="text-center text-gray-600 mb-10">Verified providers accepting new patients</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/listings"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Browse All Clinics
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Find Clinics by State</h2>
          <p className="text-center text-gray-600 mb-10">Ketamine therapy providers across the US</p>
          <div className="flex flex-wrap justify-center gap-3">
            {states.slice(0, 20).map((state) => (
              <Link
                key={state}
                href={`/find/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-gray-200 hover:border-teal-400 hover:text-teal-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {state}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/states" className="text-teal-600 hover:text-teal-800 font-medium underline">
              View all states →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">How Ketamine Therapy Finder Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-teal-100 text-teal-700 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-lg mb-2">Search Your Area</h3>
              <p className="text-gray-600">Enter your city, state, or zip code to find ketamine clinics near you.</p>
            </div>
            <div>
              <div className="bg-teal-100 text-teal-700 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-lg mb-2">Filter by Condition</h3>
              <p className="text-gray-600">Filter by the condition you want treated — depression, PTSD, anxiety, chronic pain, and more.</p>
            </div>
            <div>
              <div className="bg-teal-100 text-teal-700 w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-lg mb-2">Contact a Clinic</h3>
              <p className="text-gray-600">Review clinic profiles and reach out directly to book a consultation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Ketamine Therapy Resources</h2>
          <p className="text-center text-gray-600 mb-10">Learn everything you need to know before starting treatment</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'What Is Ketamine Therapy?', href: '/resources/what-is-ketamine-therapy', desc: 'A complete guide to how ketamine therapy works and what to expect.' },
              { title: 'Ketamine for Depression', href: '/resources/ketamine-for-depression', desc: 'How ketamine helps treatment-resistant depression.' },
              { title: 'Ketamine for PTSD', href: '/resources/ketamine-for-ptsd', desc: 'Research and outcomes for ketamine in PTSD treatment.' },
              { title: 'Ketamine for Chronic Pain', href: '/resources/ketamine-for-chronic-pain', desc: 'IV ketamine infusions for chronic pain conditions.' },
              { title: 'Does Insurance Cover Ketamine?', href: '/resources/does-insurance-cover-ketamine', desc: 'What you need to know about insurance and out-of-pocket costs.' },
              { title: 'IV vs. Oral Ketamine', href: '/resources/iv-vs-oral-ketamine', desc: 'Comparing different ketamine delivery methods.' },
            ].map((r) => (
              <Link key={r.href} href={r.href} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsletterFooterBar />
    </main>
  )
}
