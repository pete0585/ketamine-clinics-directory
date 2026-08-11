import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spravato (Esketamine) vs IV Ketamine: What Patients Need to Know | Ketamine Therapy Finder',
  description: 'Spravato is FDA-approved and often covered by insurance. IV ketamine has stronger evidence but costs more out of pocket. Here is how to decide which is right for you.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Spravato (esketamine)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spravato is the brand name for esketamine nasal spray, developed by Janssen (a Johnson & Johnson company). Esketamine is the S-enantiomer of ketamine. It received FDA approval in 2019 for treatment-resistant depression and in 2020 for major depressive disorder with acute suicidal ideation. Unlike IV ketamine, which is used off-label, Spravato is an FDA-approved drug for specific indications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Spravato different from IV ketamine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spravato is self-administered as a nasal spray at a certified treatment center under observation. IV ketamine is delivered intravenously in a clinical setting. IV ketamine has much higher bioavailability (100% versus approximately 48% for nasal spray) and a larger clinical evidence base. Spravato is FDA-approved; IV ketamine for depression is off-label. Spravato is more likely to be covered by insurance; IV ketamine usually is not.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Spravato treatment take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FDA-approved Spravato protocol begins with an induction phase: twice-weekly sessions for 4 weeks (8 sessions total). This is followed by weekly sessions for 4 weeks, then biweekly or monthly maintenance as needed. Each session involves 2–3 doses of the nasal spray administered at the clinic, with 2 hours of monitoring afterward before you can leave. The process is time-intensive compared to IV ketamine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover Spravato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most major commercial insurers (Aetna, Cigna, BCBS, UnitedHealthcare) cover Spravato with prior authorization when you meet clinical criteria (documented treatment-resistant depression, failed 2+ antidepressants). Medicare Part B covers Spravato administered in a certified treatment center. The Janssen copay assistance program (REMS) can reduce cost to as low as $10 per session for commercially insured patients. Call your insurer before starting to confirm your specific coverage.',
      },
    },
  ],
}

export default function SpravatoEsketamineGuidePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:text-teal-600">Resources</Link>
        <span className="mx-2">/</span>
        <span>Spravato vs IV Ketamine</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Spravato (Esketamine) vs IV Ketamine</h1>
      <p className="text-gray-500 mb-8">A practical guide for patients deciding between the two options</p>

      <div className="prose prose-lg max-w-none">
        <p>
          Two forms of ketamine treatment are available to patients in the United States: IV ketamine
          infusions (off-label, widely used since the early 2000s) and Spravato, the FDA-approved
          nasal spray form of esketamine. They are related compounds with different evidence bases,
          different costs, and dramatically different insurance coverage situations. Here is how
          to think through which makes sense for you.
        </p>

        <h2>What Is Spravato?</h2>
        <p>
          Spravato is the brand name for esketamine, a nasal spray developed by Janssen Pharmaceuticals.
          Esketamine is the "S-enantiomer" of ketamine — one half of the ketamine molecule. It received
          FDA approval in March 2019 for treatment-resistant depression (TRD) in adults, and a second
          approval in August 2020 for major depressive disorder with acute suicidal ideation or behavior
          (MDSI). These two approvals make Spravato the only FDA-approved drug for suicidal ideation.
        </p>
        <p>
          Spravato is not a take-home prescription. It is administered at a certified healthcare setting
          under the FDA REMS (Risk Evaluation and Mitigation Strategy) program. You self-administer the
          nasal spray at the clinic, then stay for 2 hours of monitoring. This is required every session.
        </p>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-700">Factor</th>
              <th className="text-left p-4 font-semibold text-gray-700">IV Ketamine</th>
              <th className="text-left p-4 font-semibold text-gray-700">Spravato (Esketamine)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-4 font-medium">FDA status</td>
              <td className="p-4">Off-label for depression</td>
              <td className="p-4">FDA-approved for TRD and MDSI</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Administration</td>
              <td className="p-4">IV drip, 40–60 minutes</td>
              <td className="p-4">Nasal spray self-administered at clinic, 2 hours monitoring</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Bioavailability</td>
              <td className="p-4">100% (intravenous)</td>
              <td className="p-4">~48% (intranasal)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Insurance coverage</td>
              <td className="p-4">Rarely covered</td>
              <td className="p-4">Often covered with prior authorization</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">List price (per session)</td>
              <td className="p-4">$400–$900</td>
              <td className="p-4">$590–$885</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">With insurance</td>
              <td className="p-4">Unlikely to be covered</td>
              <td className="p-4">Can be as low as $10/session with copay assistance</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Clinical evidence</td>
              <td className="p-4">Extensive (20+ years of use)</td>
              <td className="p-4">Strong (FDA trials)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Protocol length</td>
              <td className="p-4">6 sessions over 2–3 weeks</td>
              <td className="p-4">8 sessions over 4 weeks (induction), then weekly/biweekly</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Time commitment per visit</td>
              <td className="p-4">~2 hours total</td>
              <td className="p-4">~2.5–3 hours total (longer monitoring)</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Available for CRPS/pain</td>
              <td className="p-4">Yes</td>
              <td className="p-4">No (depression/MDSI only)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>When to Choose Spravato</h2>
        <ul>
          <li>You have treatment-resistant depression (failed 2+ antidepressants) — this is the core insurance-approval criterion</li>
          <li>You have active suicidal ideation with a recent diagnosis of MDD — this unlocks the MDSI approval</li>
          <li>Your insurance plan covers Spravato with prior authorization (call first)</li>
          <li>You want an FDA-approved option with clear clinical protocols</li>
        </ul>

        <h2>When to Choose IV Ketamine</h2>
        <ul>
          <li>You have PTSD, anxiety, OCD, or chronic pain — Spravato is not approved for these conditions</li>
          <li>Your insurance does not cover Spravato, or you do not qualify for the FDA indications</li>
          <li>You want a faster, shorter protocol (6 infusions vs. 8+ Spravato sessions)</li>
          <li>Your provider has stronger experience with IV protocols and offers better integration support</li>
        </ul>

        <h2>Can I Switch Between Them?</h2>
        <p>
          Yes. Some patients start with Spravato (covered by insurance) and switch to IV ketamine
          if Spravato is not producing adequate results, or vice versa. The compounds are closely
          related and clinical experience with one does inform the other. Your ketamine physician
          can help you decide when and whether to switch.
        </p>

        <h2>Finding a Clinic That Offers Both</h2>
        <p>
          Not every ketamine clinic offers Spravato — it requires REMS certification. When you
          browse clinics in our directory, look for clinics that indicate Spravato/esketamine
          availability if that is your primary interest. Many clinics offer both IV and Spravato
          and can help you decide which is more appropriate after a consultation.
        </p>
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
        <h2 className="text-2xl font-bold mb-3">Find a Ketamine or Spravato Clinic Near You</h2>
        <p className="text-teal-100 mb-6">
          Browse our directory to find clinics offering IV ketamine or Spravato treatment.
        </p>
        <Link
          href="/listings"
          className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors inline-block"
        >
          Find a Clinic
        </Link>
      </div>
    </main>
  )
}
