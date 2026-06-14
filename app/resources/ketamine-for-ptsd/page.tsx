import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ketamine for PTSD | Ketamine Therapy Finder',
  description: 'How ketamine therapy helps PTSD — research, treatment protocols, and finding a clinic.',
}

export default function KetamineForPTSD() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for PTSD</h1>
      <p className="text-gray-500 mb-8">Research, outcomes, and treatment options</p>
      <div className="prose prose-lg max-w-none">
        <p>Post-traumatic stress disorder (PTSD) affects millions of Americans, including veterans, first responders, and survivors of trauma. Ketamine therapy is showing promising results as a rapid-acting treatment for PTSD symptoms, including intrusive memories, hyperarousal, and avoidance behaviors.</p>
        <h2>How Ketamine Helps PTSD</h2>
        <p>Ketamine disrupts the reconsolidation of traumatic memories by blocking NMDA receptors during memory retrieval. This creates a window where traumatic associations can be weakened or rewritten. Combined with psychotherapy, this effect can produce lasting reductions in PTSD symptoms.</p>
        <h2>Clinical Evidence</h2>
        <ul>
          <li>A 2021 randomized controlled trial showed ketamine significantly reduced PTSD symptom severity vs. midazolam control</li>
          <li>Veterans programs across the US are increasingly incorporating ketamine</li>
          <li>Response rates in PTSD studies range from 50–80% depending on protocol</li>
        </ul>
        <h2>Treatment Protocol</h2>
        <p>PTSD treatment with ketamine often involves 6 infusions paired with trauma-focused therapy. The ketamine session creates a state of heightened neuroplasticity that makes subsequent therapy more effective. Many clinics offer ketamine-assisted psychotherapy (KAP) specifically for trauma.</p>
        <h2>Finding a PTSD-Specialized Clinic</h2>
        <p>Use our directory to search for ketamine clinics that specialize in PTSD treatment. Filter by condition to find providers with specific expertise in trauma-focused ketamine therapy.</p>
      </div>
    </main>
  )
}
