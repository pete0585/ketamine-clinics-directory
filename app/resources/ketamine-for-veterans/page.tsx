import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ketamine for Veterans with PTSD | Ketamine Therapy Finder',
  description: 'A guide for veterans considering ketamine therapy for PTSD, TBI, and treatment-resistant depression. Covers VA coverage, dosing, and how to find a VA-adjacent clinic.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the VA cover ketamine therapy for veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The VA does not broadly cover IV ketamine infusions as of 2026. However, Spravato (esketamine nasal spray) is available at select VA medical centers for veterans with treatment-resistant depression. Coverage and availability vary by VA location. Veterans can also pursue ketamine treatment at private clinics and may be eligible for community care reimbursement in some circumstances — check with your VA care coordinator.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ketamine effective for combat-related PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multiple studies, including research from the Mount Sinai Health System and the US Army, have shown that IV ketamine significantly reduces PTSD symptom severity — often more rapidly than traditional PTSD treatments like prolonged exposure or SSRIs. A 2021 randomized controlled trial found that ketamine produced greater PTSD symptom reduction than midazolam (active placebo) over two weeks of treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can veterans with TBI get ketamine therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Veterans with traumatic brain injury (TBI) can often receive ketamine therapy, but require careful evaluation. Some clinics with TBI experience have found ketamine beneficial for the depression and chronic pain that frequently co-occur with TBI. Disclose any history of TBI during your intake evaluation — a qualified clinic will adjust dosing and monitoring accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will ketamine interact with medications I take for PTSD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ketamine can interact with several medications. Benzodiazepines may reduce ketamine\'s effectiveness. Stimulants (prescribed for TBI-related attention issues) may increase blood pressure during infusions. Most psychiatric medications (SSRIs, SNRIs, prazosin) are compatible with ketamine. Provide a complete medication list to your clinic during intake — they will review interactions before treatment.',
      },
    },
  ],
}

export default function KetamineForVeteransPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:text-teal-600">Resources</Link>
        <span className="mx-2">/</span>
        <span>Ketamine for Veterans</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for Veterans with PTSD</h1>
      <p className="text-gray-500 mb-8">A practical guide for veterans and their families</p>

      <div className="prose prose-lg max-w-none">
        <p>
          Veterans with PTSD have fewer effective treatment options than the public conversation
          suggests. Prolonged exposure therapy works for some. SSRIs help others. But a substantial
          portion of veterans with combat-related PTSD — particularly those with moral injury,
          multiple deployments, or co-occurring TBI — find that conventional treatments fall short.
          Ketamine is changing that calculus.
        </p>

        <h2>Why Ketamine Is Different for PTSD</h2>
        <p>
          Traditional PTSD treatments require sustained engagement over months — you have to revisit
          the trauma repeatedly (in exposure therapy) or wait 4–6 weeks for medication to take effect.
          Ketamine does neither. It works on the NMDA receptor system, not serotonin, producing rapid
          anti-anxiety and antidepressant effects — often within hours. Crucially, at the sub-anesthetic
          doses used therapeutically, ketamine produces a brief dissociative state that some researchers
          believe may help patients process traumatic memories with reduced fear response.
        </p>

        <p>
          A 2021 randomized controlled trial at Mount Sinai published in JAMA Psychiatry found that
          twice-weekly ketamine infusions produced significantly greater PTSD symptom reduction than
          an active placebo over two weeks. Response rates were 67% in the ketamine group versus 20%
          in the placebo group. These results mirror what many ketamine clinics see in their veteran
          patient populations.
        </p>

        <h2>Ketamine and TBI</h2>
        <p>
          Roughly 414,000 veterans have received a TBI diagnosis since 2000, and many of them also
          carry PTSD. The co-occurrence creates a challenging clinical picture: the cognitive symptoms
          of TBI (attention, memory, processing speed) can worsen depression and PTSD, and vice versa.
          Some specialized ketamine clinics have treated TBI-PTSD patients successfully, with careful
          dosing adjustments and neurological monitoring. If you have a documented TBI, look for a
          clinic with neurologist or anesthesiologist-led protocols rather than a general wellness
          ketamine center.
        </p>

        <h2>VA Access and Community Care</h2>
        <p>
          The VA does not currently have a uniform policy covering IV ketamine at VA medical centers.
          However, Spravato (esketamine nasal spray, FDA-approved for treatment-resistant depression)
          is available at many VA facilities. If you qualify for VA Community Care — meaning the
          VA determines a needed service isn't available locally — ketamine at a private clinic could
          potentially be covered. This requires a referral from your VA provider and pre-authorization.
          The process is not fast, but veterans who pursue it successfully have gotten ketamine covered
          through community care in several states.
        </p>
        <p>
          Mission Act (2018) expanded community care eligibility. Talk to your VA care coordinator
          about whether your specific situation qualifies.
        </p>

        <h2>Paying Out of Pocket</h2>
        <p>
          Most veterans pursuing ketamine therapy pay out of pocket at private clinics. A typical
          6-infusion series costs $2,400–$4,500 depending on city and clinic. Some nonprofits and
          veteran-focused organizations provide financial assistance:
        </p>
        <ul>
          <li>
            <strong>VETS (Veterans Exploring Treatment Solutions):</strong> Specifically funds
            ketamine and psychedelic-assisted therapy for veterans. Has helped hundreds of veterans
            access treatment they could not otherwise afford.
          </li>
          <li>
            <strong>Heroic Hearts Project:</strong> Connects veterans to clinical trial opportunities
            and subsidized treatment programs.
          </li>
          <li>
            <strong>Marcus Institute of Integrative Health:</strong> Offers ketamine as part of an
            integrative veteran wellness program.
          </li>
        </ul>
        <p>Ask your ketamine clinic whether they offer military discounts — many do.</p>

        <h2>Questions to Ask Before Booking</h2>
        <ul>
          <li>Do you have experience treating combat PTSD, or primarily civilian mental health cases?</li>
          <li>Do you coordinate with VA providers or community care programs?</li>
          <li>What's your protocol if a veteran experiences a difficult reaction during a session?</li>
          <li>Do you offer integration therapy or aftercare support, or just the infusions?</li>
          <li>Do you offer a military discount?</li>
        </ul>

        <h2>Integration Therapy Matters</h2>
        <p>
          Ketamine for PTSD works best when paired with integration support — therapy that helps
          you process what comes up during and after sessions. The dissociative experience can surface
          traumatic memories, and working through them with a trauma-informed therapist significantly
          improves outcomes. Ask your clinic whether they offer integration therapy or can connect
          you with a therapist who specializes in ketamine-assisted care and veteran trauma.
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
        <h2 className="text-2xl font-bold mb-3">Find a Ketamine Clinic for PTSD</h2>
        <p className="text-teal-100 mb-6">
          Search our directory to find clinics with experience treating veterans and combat-related PTSD.
        </p>
        <Link
          href="/conditions/ptsd"
          className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors inline-block"
        >
          Find PTSD Ketamine Clinics
        </Link>
      </div>
    </main>
  )
}
