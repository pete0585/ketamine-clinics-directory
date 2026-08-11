import { Metadata } from 'next'
import Link from 'next/link'
import { getListingsByCondition } from '@/lib/data'
import ListingCard from '@/components/ListingCard'

export const metadata: Metadata = {
  title: 'Ketamine for CRPS (Complex Regional Pain Syndrome) | Ketamine Therapy Finder',
  description: 'Find ketamine infusion clinics specializing in CRPS and complex regional pain syndrome. Ketamine is one of the most effective treatments available for refractory CRPS.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How effective is ketamine for CRPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiple clinical studies show ketamine produces significant pain reduction in CRPS patients who have not responded to other treatments. Some studies report 70–80% of patients achieving meaningful pain relief. The effect can last months after a treatment series.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ketamine protocol is used for CRPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CRPS typically requires higher ketamine doses and longer infusion durations than mood disorder protocols. Many clinics use multi-day outpatient infusions over 4–10 days. Some severe cases qualify for inpatient ketamine infusion under anesthesia (ketamine coma protocol), offered at specialized centers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover ketamine for CRPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Insurance coverage for ketamine in CRPS varies by plan and state. Some insurers cover it when documented treatment-resistant CRPS is established and other therapies have failed. Spravato (esketamine nasal spray) is FDA-approved for depression only and does not apply to CRPS. Always verify coverage with your specific plan before starting treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does ketamine pain relief last for CRPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Relief duration varies widely. Some patients experience 3–6 months of significant pain reduction after a single treatment series; others require periodic maintenance infusions every few months. Your clinic will work with you to design a maintenance schedule based on your response.',
      },
    },
  ],
}

export default async function CRPSConditionPage() {
  const listings = await getListingsByCondition('crps', 6)

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mb-10">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/conditions" className="hover:text-teal-600">Conditions</Link>
          <span className="mx-2">/</span>
          <span>CRPS</span>
        </nav>
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for CRPS</h1>
        <p className="text-gray-600 text-lg">
          Find ketamine infusion clinics that treat Complex Regional Pain Syndrome — one of the most
          difficult chronic pain conditions to manage, and one where ketamine has shown some of its
          most striking results.
        </p>
      </div>

      <div className="prose prose-lg max-w-none mb-12">
        <p>
          Complex Regional Pain Syndrome (CRPS) — formerly called RSD — is a chronic pain condition
          that typically follows an injury, surgery, or nerve damage. The hallmark is pain that is
          disproportionate to the original injury, often accompanied by skin changes, swelling, and
          extreme sensitivity to touch (allodynia). Standard treatments — physical therapy, nerve
          blocks, spinal cord stimulation — work for some patients but leave many with uncontrolled
          pain for years or decades.
        </p>

        <p>
          Ketamine works differently from opioids and most pain medications. It blocks NMDA receptors,
          which play a central role in the "wind-up" phenomenon — the central sensitization that drives
          CRPS pain signals. By resetting overactive pain pathways, ketamine can produce relief that
          outlasts the infusion itself, sometimes for months. Clinical studies have found that 70–80%
          of CRPS patients achieve meaningful pain reduction after a ketamine treatment series.
        </p>

        <h2>CRPS Ketamine Protocols</h2>
        <p>
          Ketamine dosing for CRPS is typically more aggressive than protocols for mood disorders.
          Most clinics use one of two approaches:
        </p>
        <ul>
          <li>
            <strong>Outpatient multi-day series:</strong> 4–10 consecutive daily infusions at
            sub-anesthetic doses. This is the most common approach and does not require hospitalization.
          </li>
          <li>
            <strong>Inpatient high-dose protocol:</strong> A small number of specialized centers
            offer multi-day continuous ketamine infusions at higher doses, sometimes under monitored
            sedation. This is reserved for severe, refractory cases and requires a hospital or
            surgery center setting.
          </li>
        </ul>

        <h2>Who Is a Good Candidate?</h2>
        <p>
          Ketamine is typically considered for CRPS patients who have documented CRPS Type I or Type II,
          have failed at least two conventional treatments (physical therapy, nerve blocks, medications),
          and do not have contraindications such as uncontrolled hypertension, active psychosis, or
          severe cardiovascular disease. Your provider will conduct a thorough medical evaluation
          before approving ketamine treatment.
        </p>

        <h2>What to Ask a CRPS Ketamine Clinic</h2>
        <ul>
          <li>Do you have experience treating CRPS specifically, or primarily mood disorders?</li>
          <li>What dosing protocol do you use, and how long are infusions?</li>
          <li>What monitoring is in place during infusions?</li>
          <li>Do you offer maintenance infusions if the initial series wears off?</li>
          <li>Can you coordinate with my pain management physician?</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Find Ketamine Clinics for CRPS</h2>
        {listings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-600 mb-4">Browse all ketamine clinics that treat chronic pain conditions.</p>
            <Link href="/conditions/chronic-pain" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              Browse Chronic Pain Clinics
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
        <strong>Medical disclaimer:</strong> This directory is for informational purposes only and
        does not constitute medical advice. Ketamine for CRPS is used off-label. Consult a licensed
        medical professional to determine whether ketamine treatment is appropriate for your condition.
      </div>
    </main>
  )
}
