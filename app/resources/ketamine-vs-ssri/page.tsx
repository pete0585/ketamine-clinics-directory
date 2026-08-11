import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ketamine vs. SSRIs for Depression: Key Differences | Ketamine Therapy Finder',
  description: 'How does ketamine compare to antidepressants (SSRIs and SNRIs) for treating depression? Speed, efficacy, side effects, and cost — a clinical comparison for patients.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does ketamine work better than antidepressants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For treatment-resistant depression — patients who have failed two or more antidepressants — ketamine outperforms SSRIs/SNRIs significantly. Clinical response rates for ketamine in TRD are 60–70% compared to roughly 20–30% for additional antidepressant trials. For patients who have not yet tried antidepressants, SSRIs are typically the first-line treatment due to lower cost and broader insurance coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take ketamine and antidepressants at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most ketamine clinics treat patients who are already on SSRIs, SNRIs, or other antidepressants. The drugs work through different mechanisms and are generally compatible. Some evidence suggests that continuing an antidepressant after a ketamine series may help sustain the ketamine response longer. Your psychiatrist and ketamine clinic should coordinate your medication plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do SSRIs take so long to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SSRIs block serotonin reuptake immediately, but the downstream changes in receptor sensitivity and gene expression that produce antidepressant effects take 4–6 weeks to develop. The exact mechanism is not fully understood. This delay is a major clinical limitation, especially for patients at risk of suicide or those who have suffered through depression for years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ketamine addictive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ketamine has abuse potential as a recreational drug at high doses, but therapeutic use at clinical doses under medical supervision does not appear to create dependence in the vast majority of patients. Clinics screen for substance use history before treatment. The controlled clinical environment — 6 infusions spaced over weeks — is very different from recreational use patterns that drive addiction.',
      },
    },
  ],
}

export default function KetamineVsSSRIPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:text-teal-600">Resources</Link>
        <span className="mx-2">/</span>
        <span>Ketamine vs. SSRIs</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine vs. SSRIs for Depression</h1>
      <p className="text-gray-500 mb-8">A clinical comparison for patients weighing their options</p>

      <div className="prose prose-lg max-w-none">
        <p>
          If you have been on multiple antidepressants and still struggling with depression, you have
          probably wondered whether ketamine is worth trying. The comparison is not simply "which is
          better" — it depends heavily on where you are in the treatment journey, your timeline, your
          finances, and what matters most to you. Here is what the evidence actually says.
        </p>

        <h2>The Core Difference: Mechanism and Speed</h2>
        <p>
          SSRIs (selective serotonin reuptake inhibitors) like Lexapro, Zoloft, and Prozac work by
          increasing serotonin availability in the brain. The antidepressant effect takes 4–8 weeks
          to develop. You may try two, three, or more different SSRIs before finding one that works —
          or finding that none of them do.
        </p>
        <p>
          Ketamine works through a completely different pathway: it blocks NMDA glutamate receptors
          and triggers rapid production of BDNF (brain-derived neurotrophic factor), which promotes
          synapse growth. The antidepressant effect appears within hours of the first infusion, not
          weeks. For someone who has been struggling for years, this difference in timeline is not
          academic — it is life-changing.
        </p>

        <h2>How the Evidence Compares</h2>
      </div>

      <div className="overflow-x-auto my-8">
        <table className="w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 font-semibold text-gray-700">Factor</th>
              <th className="text-left p-4 font-semibold text-gray-700">SSRIs / SNRIs</th>
              <th className="text-left p-4 font-semibold text-gray-700">Ketamine</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            <tr>
              <td className="p-4 font-medium">Time to effect</td>
              <td className="p-4">4–8 weeks</td>
              <td className="p-4">Hours to days</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Response rate (TRD)</td>
              <td className="p-4">~20–30% for additional trials</td>
              <td className="p-4">60–70%</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Duration of effect</td>
              <td className="p-4">Ongoing (must continue daily)</td>
              <td className="p-4">Weeks to months per series; requires maintenance</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Cost</td>
              <td className="p-4">$10–$50/month (generic)</td>
              <td className="p-4">$2,400–$4,800 for initial series</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Insurance coverage</td>
              <td className="p-4">Almost universally covered</td>
              <td className="p-4">Usually not (IV); Spravato often covered</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Common side effects</td>
              <td className="p-4">Sexual dysfunction, weight gain, insomnia, emotional blunting</td>
              <td className="p-4">Temporary dissociation, nausea, elevated BP during infusion</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Administration</td>
              <td className="p-4">Daily oral pill</td>
              <td className="p-4">6 clinical infusions over 2–3 weeks; maintenance infusions as needed</td>
            </tr>
            <tr>
              <td className="p-4 font-medium">Best for</td>
              <td className="p-4">First-line depression; ongoing maintenance</td>
              <td className="p-4">Treatment-resistant depression; PTSD; suicidal ideation; rapid relief needed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>When Ketamine Makes More Sense Than Another SSRI</h2>
        <p>
          If you meet any of the following criteria, ketamine deserves serious consideration:
        </p>
        <ul>
          <li>You have tried two or more antidepressants without adequate response (this defines "treatment-resistant depression")</li>
          <li>You have had serious side effects from SSRIs (sexual dysfunction, weight gain, emotional blunting) that impair quality of life</li>
          <li>You need faster relief — you cannot wait 6–8 weeks to find out if a medication works</li>
          <li>You have active suicidal ideation — ketamine can reduce it within hours; SSRIs cannot</li>
          <li>You have PTSD — ketamine has strong evidence here; SSRIs are only modestly effective for combat-related PTSD</li>
        </ul>

        <h2>When to Keep Trying SSRIs First</h2>
        <p>
          SSRIs are still the right starting point if you are newly diagnosed, have not yet tried
          antidepressants, and have good insurance coverage. They are inexpensive, broadly effective
          (about 50% of first-time patients respond), and safe for long-term use. The cost advantage
          is significant: SSRIs cost tens of dollars per month; ketamine costs thousands upfront.
        </p>

        <h2>Combining Both: The Most Common Real-World Approach</h2>
        <p>
          Many patients use ketamine and antidepressants together. A common pattern: ketamine provides
          rapid initial relief that breaks a depressive episode; an antidepressant then helps maintain
          that remission over time. Some research suggests that continuing an SSRI after a ketamine
          series extends the duration of the ketamine response. Your psychiatrist can help design a
          combination approach.
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
        <h2 className="text-2xl font-bold mb-3">Find a Ketamine Clinic Near You</h2>
        <p className="text-teal-100 mb-6">
          Browse our directory of ketamine therapy clinics for depression, PTSD, and chronic pain.
        </p>
        <Link
          href="/conditions/depression"
          className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors inline-block"
        >
          Find Depression Ketamine Clinics
        </Link>
      </div>
    </main>
  )
}
