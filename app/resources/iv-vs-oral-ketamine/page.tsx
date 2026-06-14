import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IV vs. Oral Ketamine | Ketamine Therapy Finder',
  description: 'Comparing IV ketamine infusions, esketamine nasal spray, oral ketamine, and IM injection.',
}

export default function IVvsOralKetamine() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">IV vs. Oral Ketamine: Which Is Right for You?</h1>
      <p className="text-gray-500 mb-8">Comparing delivery methods</p>
      <div className="prose prose-lg max-w-none">
        <p>Ketamine can be delivered in several different ways, each with distinct advantages and trade-offs. Here is a breakdown of the most common methods.</p>
        <h2>IV Ketamine Infusion</h2>
        <p><strong>Bioavailability: 100%</strong> — The gold standard. Ketamine is delivered directly into the bloodstream, providing precise dosing and rapid onset. Most clinical research is based on IV infusion. Best for: psychiatric conditions, chronic pain, acute suicidality. Cost: $400–$800/session.</p>
        <h2>Esketamine (Spravato) Nasal Spray</h2>
        <p><strong>Bioavailability: ~45%</strong> — FDA-approved for TRD and MDD with suicidal ideation. Administered in a certified healthcare facility with 2-hour monitoring. Insurance typically covers it. Best for: TRD patients with insurance. Frequency: twice weekly for 4 weeks, then weekly.</p>
        <h2>Intramuscular (IM) Injection</h2>
        <p><strong>Bioavailability: ~93%</strong> — Fast-acting and nearly as effective as IV. Often less expensive. Some clinics prefer IM for its ease of administration. Best for: patients who want high bioavailability at lower cost than IV.</p>
        <h2>Oral/Sublingual Ketamine</h2>
        <p><strong>Bioavailability: 17–29%</strong> — Much lower bioavailability but can be prescribed for at-home use as maintenance therapy. Often used after an IV loading series to maintain effects. Best for: maintenance between clinic visits. Requires prescription and close monitoring.</p>
        <h2>Which Should You Choose?</h2>
        <p>Talk to a ketamine specialist about your specific diagnosis, medical history, and treatment goals. IV infusions remain the most studied and effective option for most conditions, while Spravato may be the best choice for insured TRD patients.</p>
      </div>
    </main>
  )
}
