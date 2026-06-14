import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Ketamine Therapy? | Ketamine Therapy Finder',
  description: 'A complete guide to ketamine therapy — how it works, what to expect, conditions treated, and how to find a clinic near you.',
}

export default function WhatIsKetamineTherapy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">What Is Ketamine Therapy?</h1>
      <p className="text-gray-500 mb-8">A complete patient guide</p>

      <div className="prose prose-lg max-w-none">
        <p>Ketamine therapy is a rapidly emerging treatment for mental health conditions and chronic pain that have not responded well to traditional treatments. Originally developed as an anesthetic, ketamine has shown remarkable results in clinical settings for conditions like treatment-resistant depression, PTSD, anxiety, OCD, and chronic pain syndromes.</p>

        <h2>How Does Ketamine Work?</h2>
        <p>Unlike traditional antidepressants that target serotonin or dopamine pathways, ketamine acts primarily on the NMDA (N-methyl-D-aspartate) receptor system. This produces a rapid antidepressant effect — often within hours rather than weeks. Ketamine also promotes neuroplasticity, helping the brain form new neural connections.</p>

        <h2>Types of Ketamine Treatment</h2>
        <ul>
          <li><strong>IV Ketamine Infusion</strong> — The most studied and bioavailable method. Administered intravenously in a clinical setting over 40–60 minutes.</li>
          <li><strong>Intramuscular (IM) Injection</strong> — Injected into muscle tissue; fast-acting with similar efficacy to IV.</li>
          <li><strong>Esketamine (Spravato)</strong> — FDA-approved nasal spray for treatment-resistant depression and MDD with suicidal ideation.</li>
          <li><strong>Oral/Sublingual Ketamine</strong> — Lower bioavailability but can be used for maintenance treatment at home under supervision.</li>
        </ul>

        <h2>What Conditions Does Ketamine Treat?</h2>
        <ul>
          <li>Treatment-resistant depression (TRD)</li>
          <li>Post-traumatic stress disorder (PTSD)</li>
          <li>Anxiety disorders</li>
          <li>Obsessive-compulsive disorder (OCD)</li>
          <li>Bipolar depression</li>
          <li>Chronic pain (fibromyalgia, complex regional pain syndrome, etc.)</li>
          <li>Suicidal ideation</li>
        </ul>

        <h2>What to Expect During Treatment</h2>
        <p>A typical ketamine infusion series consists of 6 infusions over 2–3 weeks. During each session (40–60 minutes), patients may experience mild dissociative effects, visual changes, or a dreamlike state. Medical staff monitor vitals throughout. Most patients feel normal within 30–60 minutes after the infusion ends.</p>

        <h2>Is Ketamine Therapy Safe?</h2>
        <p>When administered in a clinical setting by trained professionals, ketamine therapy has a strong safety profile. Side effects are typically short-lived and include nausea, dizziness, and temporary changes in perception. Ketamine is not appropriate for patients with certain cardiovascular conditions, active psychosis, or uncontrolled hypertension.</p>

        <h2>Finding a Ketamine Clinic</h2>
        <p>Use our directory to find licensed ketamine therapy providers in your area. Look for board-certified anesthesiologists, psychiatrists, or other licensed medical professionals with ketamine-specific training.</p>
      </div>
    </main>
  )
}
