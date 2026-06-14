import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ketamine Therapy FAQs | Ketamine Therapy Finder',
  description: 'Answers to the most common questions about ketamine therapy — safety, efficacy, cost, and what to expect.',
}

export default function KetamineTherapyFAQs() {
  const faqs = [
    { q: 'Is ketamine therapy legal?', a: 'Yes. Ketamine is a Schedule III controlled substance in the US, meaning it can be legally prescribed and administered by licensed medical professionals. IV ketamine for depression is an off-label but legal use. Esketamine (Spravato) is FDA-approved for specific indications.' },
    { q: 'How quickly does ketamine work?', a: 'Many patients notice improvements in mood within hours of their first infusion. Unlike traditional antidepressants that take 4–6 weeks, ketamine can produce rapid antidepressant effects. A full treatment series (6 infusions) typically takes 2–3 weeks.' },
    { q: 'How long do the effects last?', a: 'A single series of ketamine infusions typically provides relief for 2–6 months. Some patients maintain remission with periodic booster infusions (every 1–3 months). Individual results vary significantly.' },
    { q: 'Is ketamine addictive?', a: 'When administered in clinical settings at therapeutic doses, ketamine has a low addiction risk. Recreational ketamine use carries higher risk. Clinics screen for substance use disorders and monitor for misuse. The therapeutic dose schedule (6 infusions over 2–3 weeks) is very different from recreational patterns.' },
    { q: 'What are the side effects?', a: 'Common short-term side effects include dissociation, nausea, dizziness, increased blood pressure, and changes in perception. These typically resolve within 1–2 hours after the infusion. Serious adverse events are rare when administered by qualified professionals.' },
    { q: 'Can I drive after a ketamine infusion?', a: 'No. You should not drive or operate machinery for at least 24 hours after an infusion. All clinics require patients to have a driver. Plan for someone to accompany you home.' },
    { q: 'Who is NOT a good candidate for ketamine?', a: 'Ketamine may not be appropriate for people with active psychosis, uncontrolled hypertension, certain cardiovascular conditions, a history of ketamine or dissociative drug abuse, or active manic episodes. A thorough medical intake will screen for these contraindications.' },
    { q: 'Do I need a referral?', a: 'Most ketamine clinics do not require a referral, though some may prefer a note from your current psychiatrist or prescribing physician. A medical intake evaluation is typically conducted by the clinic before treatment begins.' },
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine Therapy FAQs</h1>
      <p className="text-gray-500 mb-10">Answers to the most common questions</p>
      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-100 pb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{faq.q}</h2>
            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
