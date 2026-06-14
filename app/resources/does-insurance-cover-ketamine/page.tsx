import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Does Insurance Cover Ketamine Therapy? | Ketamine Therapy Finder',
  description: 'What you need to know about insurance coverage for ketamine therapy and out-of-pocket costs.',
}

export default function InsuranceCoverageKetamine() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Does Insurance Cover Ketamine Therapy?</h1>
      <p className="text-gray-500 mb-8">Understanding costs and coverage options</p>
      <div className="prose prose-lg max-w-none">
        <p>Insurance coverage for ketamine therapy varies significantly depending on the type of treatment, your diagnosis, and your insurance plan. Here is what you need to know.</p>
        <h2>Esketamine (Spravato) — Often Covered</h2>
        <p>Esketamine (brand name Spravato) is FDA-approved for treatment-resistant depression and MDD with suicidal ideation. Because it's FDA-approved and administered in a certified healthcare setting, most major insurance plans — including Medicare — cover it after prior authorization. Patients typically pay a copay of $10–$40 per session.</p>
        <h2>IV Ketamine Infusions — Usually Not Covered</h2>
        <p>IV ketamine infusions for depression, PTSD, and other psychiatric conditions are generally not covered by insurance because they are considered "off-label" use. Out-of-pocket costs typically range from $400–$800 per infusion, with a standard series of 6 infusions costing $2,400–$4,800.</p>
        <h2>Strategies to Reduce Costs</h2>
        <ul>
          <li>Ask about clinic payment plans or financing (many offer 0% APR)</li>
          <li>Use a Health Savings Account (HSA) or Flexible Spending Account (FSA)</li>
          <li>Submit to insurance for possible partial reimbursement (some plans cover anesthesia costs)</li>
          <li>Ask your clinic about sliding-scale fees</li>
          <li>Look into clinical trials — some offer free treatment</li>
        </ul>
        <h2>Questions to Ask Your Clinic</h2>
        <ul>
          <li>Do you offer financing or payment plans?</li>
          <li>Do you help with insurance pre-authorization for Spravato?</li>
          <li>Can you provide itemized receipts for HSA/FSA reimbursement?</li>
          <li>Are there package discounts for the full infusion series?</li>
        </ul>
      </div>
    </main>
  )
}
