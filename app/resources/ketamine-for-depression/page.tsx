import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ketamine for Depression | Ketamine Therapy Finder',
  description: 'How ketamine therapy helps treatment-resistant depression — research, outcomes, and what to expect.',
}

export default function KetamineForDepression() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Ketamine for Depression</h1>
      <p className="text-gray-500 mb-8">Research, outcomes, and what to expect</p>

      <div className="prose prose-lg max-w-none">
        <p>Ketamine has emerged as one of the most significant breakthroughs in depression treatment in decades, particularly for patients who have not responded to standard antidepressants. Studies show that 60–70% of treatment-resistant patients experience significant relief, often within hours of their first infusion.</p>

        <h2>Treatment-Resistant Depression (TRD)</h2>
        <p>TRD is defined as depression that has not adequately responded to at least two different antidepressant medications at adequate doses. Approximately 30% of people with major depression have TRD, making it a significant public health challenge. Ketamine offers these patients a fast-acting alternative.</p>

        <h2>The Science Behind Ketamine for Depression</h2>
        <p>Ketamine blocks NMDA receptors, which leads to a rapid increase in glutamate transmission. This triggers AMPA receptor activation and downstream signaling that promotes synaptogenesis — the growth of new synaptic connections in the prefrontal cortex and hippocampus, areas critical for mood regulation.</p>

        <h2>Clinical Evidence</h2>
        <ul>
          <li>Multiple randomized controlled trials have shown ketamine produces antidepressant effects within 2–4 hours</li>
          <li>Response rates of 50–70% in treatment-resistant populations</li>
          <li>FDA approved esketamine (Spravato) for TRD and MDD with suicidal ideation in 2019</li>
          <li>Effects typically last 2–3 weeks per treatment series; maintenance infusions can extend remission</li>
        </ul>

        <h2>The Treatment Protocol</h2>
        <p>Standard treatment for depression involves 6 IV ketamine infusions over 2–3 weeks. Each session lasts 40–60 minutes. Patients are monitored throughout. Many clinics also offer integration therapy sessions to maximize the neuroplastic window following treatment.</p>

        <h2>Who Is a Good Candidate?</h2>
        <p>You may be a good candidate for ketamine therapy if you have tried 2 or more antidepressants without adequate relief, experience significant side effects from standard medications, or need rapid relief from severe depressive symptoms or suicidal ideation.</p>
      </div>
    </main>
  )
}
