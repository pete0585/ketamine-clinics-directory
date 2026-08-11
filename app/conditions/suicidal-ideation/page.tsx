import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCondition } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Ketamine for Suicidal Ideation | Ketamine Therapy Finder',
  description: 'Ketamine and esketamine (Spravato) can reduce suicidal thoughts within hours — faster than any other available treatment. Find clinics that specialize in acute suicidal ideation care.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly does ketamine reduce suicidal ideation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clinical studies have shown ketamine can reduce suicidal thoughts within hours of a single infusion — often within 4 hours. This rapid effect is unique among psychiatric treatments; most antidepressants take 4–6 weeks to show benefit. Spravato (esketamine) is FDA-approved specifically for major depressive disorder with acute suicidal ideation or behavior.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Spravato covered by insurance for suicidal ideation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spravato (esketamine nasal spray) received FDA approval in 2020 for treatment-resistant depression and MDD with acute suicidal ideation or behavior. Because it is FDA-approved for this indication, most major insurers cover it with prior authorization when criteria are met. IV ketamine for suicidal ideation is used off-label and coverage varies by plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can ketamine be used in a crisis situation for suicidal thoughts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ketamine is not an emergency intervention — it requires a medical evaluation, clinical setting, and monitoring. It is best used as a rapid-acting adjunct to a broader safety plan and psychiatric care, not as a standalone crisis response. If you or someone you know is in immediate danger, call 988 (Suicide & Crisis Lifeline) or go to an emergency room.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a psychiatrist referral to access ketamine for suicidal ideation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Requirements vary by clinic. Many ketamine clinics require documentation from a mental health provider and a recent psychiatric evaluation. Clinics will conduct their own intake and safety assessment. Coming with existing records from your therapist or psychiatrist speeds up the process.',
      },
    },
  ],
}

export default async function SuicidalIdeationConditionPage() {
  const listings = await getListingsByCondition('depression', 6)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 text-sm">
        <strong className="text-red-800">If you are in crisis right now:</strong>{' '}
        <span className="text-red-700">Call or text <strong>988</strong> (Suicide & Crisis Lifeline) or go to your nearest emergency room. Ketamine requires a scheduled clinical appointment and is not an emergency service.</span>
      </div>

      <div className="mb-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/conditions" className="hover:text-teal-600">Conditions</Link>
          <span className="mx-2">/</span>
          <span>Suicidal Ideation</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for Suicidal Ideation</h1>
        <p className="text-gray-600 text-lg">
          Ketamine and FDA-approved esketamine (Spravato) can reduce suicidal thoughts within hours —
          a capability no other psychiatric treatment can match. Find clinics with experience treating
          acute and chronic suicidal ideation.
        </p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          For patients struggling with persistent suicidal thoughts — whether from treatment-resistant
          depression, PTSD, bipolar disorder, or other conditions — the standard psychiatric toolkit
          has a critical gap: antidepressants take weeks to work, and there is no medication that
          reliably and rapidly reduces suicidal ideation. Ketamine fills that gap.
        </p>

        <p>
          Multiple randomized controlled trials have demonstrated that a single IV ketamine infusion
          can reduce suicidal ideation significantly within 4 hours, with effects lasting 3–7 days.
          This has made ketamine an increasingly important tool in psychiatric care for patients in
          acute distress who need rapid stabilization while longer-term treatments take effect.
        </p>

        <h2>Spravato: FDA-Approved for Suicidal Ideation</h2>
        <p>
          In 2020, the FDA approved esketamine (Spravato) nasal spray for two distinct indications:
          (1) treatment-resistant depression, and (2) major depressive disorder with acute suicidal
          ideation or behavior (MDSI). This makes Spravato the only FDA-approved medication
          specifically for suicidal ideation — a critical distinction that affects insurance coverage.
          Patients who qualify for the MDSI indication may find Spravato covered by most major
          insurers with prior authorization.
        </p>

        <p>
          IV ketamine for suicidal ideation is used off-label and has strong clinical evidence, but
          insurance coverage is less predictable. Many clinics offer IV ketamine as the primary
          treatment and can help you navigate the insurance process.
        </p>

        <h2>What to Expect at a Ketamine Clinic for Suicidal Ideation</h2>
        <ul>
          <li>
            <strong>Thorough intake evaluation:</strong> Clinics will review your psychiatric history,
            current medications, prior treatments, and safety status before approving you for treatment.
          </li>
          <li>
            <strong>Coordination with your mental health team:</strong> Ketamine is most effective as
            part of a broader psychiatric care plan, not a standalone treatment. Your clinic should
            communicate with your therapist or psychiatrist.
          </li>
          <li>
            <strong>Monitored infusion environment:</strong> Sessions are conducted in a clinical
            setting with vital monitoring. You will need someone to drive you home.
          </li>
          <li>
            <strong>Safety planning:</strong> A responsible clinic will review your safety plan and
            emergency contacts as part of the intake process.
          </li>
        </ul>

        <h2>Ketamine Is Not a Standalone Solution</h2>
        <p>
          Ketamine's rapid anti-suicidal effect creates a critical window — days or weeks of
          relief — that can be used to solidify longer-term psychiatric treatment, adjust medications,
          or stabilize a safety plan. It is most beneficial when integrated into comprehensive mental
          health care. Use this directory to find a clinic that takes a holistic approach to your
          psychiatric wellbeing, not just the infusion itself.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Find Ketamine Clinics for Suicidal Ideation</h2>
        {listings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-600 mb-4">Search for ketamine clinics in your area.</p>
            <Link href="/listings" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Browse All Clinics
            </Link>
          </div>
        )}
      </section>

      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqJsonLd.mainEntity.map((item) => (
            <div key={item.name}>
              <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 text-sm text-gray-600">
        <strong>Medical disclaimer:</strong> This directory is for informational purposes only and does
        not constitute medical advice. If you are experiencing a psychiatric emergency, please contact
        988, your local emergency services, or go to your nearest emergency room.
      </div>
    </main>
  )
}
