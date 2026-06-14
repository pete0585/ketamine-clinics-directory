import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ketamine for Chronic Pain | Ketamine Therapy Finder',
  description: 'IV ketamine infusions for chronic pain — fibromyalgia, CRPS, neuropathic pain, and more.',
}

export default function KetamineForChronicPain() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for Chronic Pain</h1>
      <p className="text-gray-500 mb-8">A guide to ketamine infusion therapy for pain conditions</p>
      <div className="prose prose-lg max-w-none">
        <p>Ketamine is a powerful analgesic that works differently from opioids and NSAIDs, making it valuable for chronic pain conditions that haven't responded to standard treatments. IV ketamine infusions are used for fibromyalgia, complex regional pain syndrome (CRPS), neuropathic pain, and other refractory pain conditions.</p>
        <h2>Conditions Treated</h2>
        <ul>
          <li>Complex Regional Pain Syndrome (CRPS/RSD)</li>
          <li>Fibromyalgia</li>
          <li>Neuropathic pain</li>
          <li>Phantom limb pain</li>
          <li>Postherpetic neuralgia</li>
          <li>Migraine and cluster headaches</li>
          <li>Failed back surgery syndrome</li>
        </ul>
        <h2>How It Works for Pain</h2>
        <p>Ketamine blocks NMDA receptors involved in central sensitization — the process by which the central nervous system becomes hypersensitive to pain signals. By "resetting" these pathways, ketamine can reduce or eliminate chronic pain in conditions where other treatments have failed.</p>
        <h2>Pain Treatment Protocols</h2>
        <p>Pain protocols typically involve longer infusion sessions (3–4 hours) and higher doses than psychiatric protocols. Treatment may consist of 3–5 consecutive daily infusions. Some patients achieve months or years of pain relief from a single treatment series.</p>
      </div>
    </main>
  )
}
