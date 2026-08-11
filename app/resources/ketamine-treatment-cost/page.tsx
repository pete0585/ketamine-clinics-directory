import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ketamine Infusion Cost 2026 — What to Expect by City and Protocol | Ketamine Therapy Finder',
  description: 'How much does ketamine therapy cost? A breakdown of IV ketamine infusion costs by city, condition, and protocol — plus how to reduce what you pay out of pocket.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a ketamine infusion cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A single IV ketamine infusion typically costs $400–$800. A standard 6-infusion series for depression or PTSD costs $2,400–$4,800. Prices are higher in coastal cities (New York, San Francisco, Los Angeles) and lower in mid-sized metros (Denver, Phoenix, Dallas). CRPS protocols, which require more infusions and longer sessions, can cost $3,000–$10,000 for a full treatment series.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover ketamine infusion therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IV ketamine for depression, PTSD, and anxiety is used off-label, and most insurers do not cover it as of 2026. Spravato (esketamine nasal spray), which is FDA-approved for treatment-resistant depression, is covered by most major insurers with prior authorization. Some insurers cover ketamine infusions for CRPS and chronic pain when documented medical necessity exists. Always call your insurer before starting treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Spravato cheaper than IV ketamine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spravato costs $590–$885 per session at list price — more expensive than IV ketamine per session. However, because it is FDA-approved, insurance coverage dramatically reduces out-of-pocket cost for many patients. The Spravato REMS program and manufacturer copay assistance can reduce cost to $10 per session for eligible patients. If you qualify for Spravato and insurance coverage, it may be far less expensive than IV ketamine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use HSA or FSA funds for ketamine therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — IV ketamine infusions and Spravato are qualified medical expenses eligible for HSA (health savings account) and FSA (flexible spending account) funds when prescribed by a licensed physician for a medical condition. Keep itemized receipts from your ketamine clinic. Confirm with your HSA/FSA administrator before treatment.',
      },
    },
  ],
}

const cityData = [
  { city: 'New York, NY', range: '$600–$900', notes: 'Highest prices; psychiatric-led clinics predominate' },
  { city: 'San Francisco, CA', range: '$550–$850', notes: 'High cost of living reflected in pricing; large number of clinics' },
  { city: 'Los Angeles, CA', range: '$500–$800', notes: 'Wide range; wellness-oriented clinics often at the higher end' },
  { city: 'Chicago, IL', range: '$450–$700', notes: 'Mid-range pricing; competitive market with multiple providers' },
  { city: 'Austin, TX', range: '$400–$650', notes: 'Lower cost of living; growing number of clinics competing on price' },
  { city: 'Denver, CO', range: '$400–$650', notes: 'Strong market; some clinics bundle integration therapy' },
  { city: 'Phoenix, AZ', range: '$400–$600', notes: 'One of the most competitive markets; multiple providers' },
  { city: 'Dallas/Ft. Worth, TX', range: '$375–$600', notes: 'DFW metro has many options; prices trending down with competition' },
  { city: 'Tampa, FL', range: '$375–$575', notes: 'Affordable relative to East Coast; growing provider base' },
  { city: 'Seattle, WA', range: '$475–$725', notes: 'Higher than average; strong demand from tech workers' },
]

export default function KetamineTreatmentCostPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:text-teal-600">Resources</Link>
        <span className="mx-2">/</span>
        <span>Ketamine Treatment Cost</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine Infusion Cost 2026</h1>
      <p className="text-gray-500 mb-8">What to expect by city, condition, and protocol</p>

      <div className="prose prose-lg max-w-none">
        <p>
          Ketamine therapy is a significant financial decision. A single infusion runs $400–$900
          depending on where you live, and a complete treatment series typically involves 6 infusions
          over 2–3 weeks. Here is what patients actually pay across the country, and how to make the
          cost more manageable.
        </p>

        <h2>Cost by Protocol</h2>
        <p>
          What you pay depends heavily on why you are seeking treatment. Depression, PTSD, and anxiety
          protocols use the same basic 6-infusion series. Chronic pain and CRPS protocols are more
          intensive and cost more.
        </p>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-700">Condition</th>
              <th className="text-left p-4 font-semibold text-gray-700">Protocol</th>
              <th className="text-left p-4 font-semibold text-gray-700">Total Cost Range</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr><td className="p-4">Depression / PTSD / Anxiety</td><td className="p-4">6 infusions over 2–3 weeks</td><td className="p-4 font-medium">$2,400–$4,800</td></tr>
            <tr><td className="p-4">OCD / Bipolar depression</td><td className="p-4">6 infusions (same protocol)</td><td className="p-4 font-medium">$2,400–$4,800</td></tr>
            <tr><td className="p-4">Chronic pain / fibromyalgia</td><td className="p-4">4–6 infusions, extended sessions</td><td className="p-4 font-medium">$2,000–$5,000</td></tr>
            <tr><td className="p-4">CRPS (outpatient multi-day)</td><td className="p-4">5–10 daily infusions</td><td className="p-4 font-medium">$3,500–$10,000</td></tr>
            <tr><td className="p-4">Maintenance (after initial series)</td><td className="p-4">1 infusion every 1–3 months</td><td className="p-4 font-medium">$400–$900 per session</td></tr>
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Cost by City</h2>
        <p>
          Geography is the single biggest factor after protocol. Here is what patients pay in major
          US markets based on reported clinic pricing as of 2026:
        </p>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-700">City</th>
              <th className="text-left p-4 font-semibold text-gray-700">Per-Infusion Range</th>
              <th className="text-left p-4 font-semibold text-gray-700">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cityData.map((row) => (
              <tr key={row.city}>
                <td className="p-4 font-medium">{row.city}</td>
                <td className="p-4">{row.range}</td>
                <td className="p-4 text-gray-600">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>What Drives Price Differences Between Clinics?</h2>
        <ul>
          <li>
            <strong>Provider credentials:</strong> Board-certified anesthesiologists and psychiatrists
            typically charge more than nurse practitioners or CRNAs. This often reflects meaningful
            differences in monitoring capability and safety — not just overhead.
          </li>
          <li>
            <strong>Setting:</strong> A standalone ketamine clinic has lower overhead than a hospital
            system. Independent clinics are usually cheaper.
          </li>
          <li>
            <strong>What is included:</strong> Some clinics bundle integration therapy, psychiatry
            consults, and follow-up care. These cost more but may deliver better outcomes.
          </li>
          <li>
            <strong>Market competition:</strong> Cities with 10+ clinics (Phoenix, Dallas, Denver)
            have lower prices than markets with 2–3 (smaller metros).
          </li>
        </ul>

        <h2>How to Reduce Out-of-Pocket Cost</h2>
        <ul>
          <li>
            <strong>Use your HSA or FSA.</strong> Ketamine infusions are HSA/FSA-eligible. If you
            have a high-deductible health plan with an HSA, use pre-tax dollars to pay.
          </li>
          <li>
            <strong>Ask about Spravato.</strong> If you have treatment-resistant depression, FDA-approved
            esketamine (Spravato) may be covered by insurance with prior authorization. The manufacturer
            copay assistance can reduce cost to $10/session for eligible patients.
          </li>
          <li>
            <strong>Ask about package pricing.</strong> Most clinics discount when you pay upfront for
            the full 6-session series versus session by session.
          </li>
          <li>
            <strong>Look for sliding scale or military discounts.</strong> Some clinics offer reduced
            rates for veterans, first responders, or patients with documented financial hardship.
          </li>
          <li>
            <strong>Explore nonprofit assistance.</strong> Organizations like VETS (Veterans Exploring
            Treatment Solutions) help veterans access ketamine therapy at reduced or no cost.
          </li>
          <li>
            <strong>File a superbill for reimbursement.</strong> Ask your clinic for an itemized
            superbill. Some insurance plans will reimburse a portion of out-of-network medical care,
            including ketamine when there is a documented diagnosis.
          </li>
        </ul>
      </div>

      <section className="bg-gray-50 rounded-2xl p-8 my-12">
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

      <div className="bg-teal-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Compare Clinics in Your City</h2>
        <p className="text-teal-100 mb-6">
          Use our directory to find ketamine clinics near you and compare providers.
        </p>
        <Link
          href="/listings"
          className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors inline-block"
        >
          Browse All Clinics
        </Link>
      </div>
    </main>
  )
}
