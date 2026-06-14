import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Find a Ketamine Clinic | Ketamine Therapy Finder',
  description: 'What to look for when choosing a ketamine therapy clinic — credentials, protocols, safety standards, and red flags.',
}

export default function FindingAKetamineClinic() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">How to Find a Ketamine Clinic</h1>
      <p className="text-gray-500 mb-8">What to look for — and what to avoid</p>
      <div className="prose prose-lg max-w-none">
        <p>Not all ketamine clinics are created equal. With the rapid growth of the industry, it is important to know how to evaluate providers. Here is what to look for.</p>
        <h2>Provider Credentials</h2>
        <ul>
          <li>Board-certified physicians (anesthesiologist, psychiatrist, or internist)</li>
          <li>Nurse practitioners or PAs working under physician supervision</li>
          <li>Ketamine-specific training or fellowship</li>
          <li>State licensure and DEA registration</li>
        </ul>
        <h2>Clinical Standards</h2>
        <ul>
          <li>Medical intake including health history and contraindication screening</li>
          <li>Vital sign monitoring throughout treatment</li>
          <li>Emergency protocols and resuscitation equipment on site</li>
          <li>Private treatment rooms</li>
          <li>Integration support or referrals to therapists</li>
        </ul>
        <h2>Questions to Ask Before Booking</h2>
        <ul>
          <li>What is your medical director's background and credentials?</li>
          <li>How do you screen patients for contraindications?</li>
          <li>What is your protocol for psychiatric emergencies?</li>
          <li>Do you offer integration therapy or referrals?</li>
          <li>What is your response rate for the conditions you treat?</li>
          <li>Can I speak with past patients (testimonials)?</li>
        </ul>
        <h2>Red Flags to Avoid</h2>
        <ul>
          <li>No physician on-site or on-call during treatment</li>
          <li>No medical intake or contraindication screening</li>
          <li>Telehealth-only ketamine with home administration (for non-prescribed services)</li>
          <li>Guarantees of results or cure claims</li>
          <li>No monitoring equipment during infusions</li>
        </ul>
        <div className="mt-8 p-6 bg-teal-50 rounded-xl">
          <p className="font-semibold text-teal-800">Ready to find a clinic?</p>
          <Link href="/listings" className="text-teal-600 hover:text-teal-800 underline">Browse verified ketamine clinics near you →</Link>
        </div>
      </div>
    </main>
  )
}
