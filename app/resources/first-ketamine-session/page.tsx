import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What to Expect at Your First Ketamine Infusion | Ketamine Therapy Finder',
  description: 'A step-by-step guide to your first ketamine infusion: what happens before, during, and after your session — what to bring, what you will feel, and what to avoid.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I drive myself home after a ketamine infusion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You must arrange a ride home from every ketamine session. The dissociative effects of ketamine persist for 1–2 hours after the infusion ends, and your reaction time and judgment will be impaired. Do not drive, operate machinery, or make important decisions for the rest of the day following a session.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a ketamine infusion session last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The infusion itself runs 40–60 minutes for mood disorder protocols. Including check-in, IV placement, post-infusion recovery, and discharge, plan for 2–2.5 hours total at the clinic. CRPS and chronic pain protocols use longer infusion times — sometimes 3–4 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does ketamine feel like during an infusion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ketamine produces a dissociative, dreamlike state. Most patients experience visual changes (colors or patterns), a sense of floating or disconnection from their body, and altered time perception. Some find it pleasant or even profoundly meaningful; others find it disorienting. The staff can adjust the dose if the experience becomes uncomfortable. The dissociative effects fade completely within 30–60 minutes after the infusion stops.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I avoid eating before a ketamine infusion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most clinics require 4–6 hours of fasting (no food) before your session because nausea is a common side effect, and vomiting under sedation carries risk. Light liquids (water, clear juice) are usually acceptable until 2 hours before. Follow your specific clinic\'s pre-treatment instructions exactly.',
      },
    },
  ],
}

export default function FirstKetamineSessionPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/resources" className="hover:text-teal-600">Resources</Link>
        <span className="mx-2">/</span>
        <span>First Ketamine Session</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4 text-gray-900">What to Expect at Your First Ketamine Infusion</h1>
      <p className="text-gray-500 mb-8">A step-by-step guide from consultation to the day after</p>

      <div className="prose prose-lg max-w-none">
        <p>
          Ketamine infusion therapy is unlike any other medical treatment most people have experienced.
          The session itself is genuinely unusual — and if you walk in prepared, it is far less
          disorienting than if it catches you by surprise. Here is an honest account of the entire
          process, from your intake call through the day after your first session.
        </p>

        <h2>Before Your First Session: What the Clinic Will Ask</h2>
        <p>
          Before you ever set foot in the infusion chair, a quality ketamine clinic will conduct a
          medical intake. This typically includes:
        </p>
        <ul>
          <li>A review of your psychiatric and medical history</li>
          <li>Your current medication list (ketamine interacts with some drugs)</li>
          <li>Blood pressure screening (high BP can be a contraindication)</li>
          <li>A discussion of your treatment goals and expectations</li>
          <li>Consent forms covering the risks and off-label nature of treatment</li>
        </ul>
        <p>
          Be honest during this process. Disclosing your full medication list and history protects you.
          If a clinic skips intake and wants to start immediately, that is a red flag.
        </p>

        <h2>What to Bring and What to Leave at Home</h2>
        <p><strong>Bring:</strong></p>
        <ul>
          <li>A driver or someone to take you home — non-negotiable</li>
          <li>Comfortable clothing; you will be reclining for 40–60 minutes</li>
          <li>An eye mask if you prefer darkness (many clinics provide one)</li>
          <li>Headphones and a music playlist — music significantly shapes the experience</li>
          <li>A light snack for after the session (not before)</li>
        </ul>
        <p><strong>Leave at home:</strong></p>
        <ul>
          <li>Your car — do not plan to drive yourself</li>
          <li>Anything requiring decisions or important conversations afterward</li>
          <li>Alcohol consumed the night before (it increases nausea)</li>
        </ul>

        <h2>The Day of Your First Infusion</h2>
        <p>
          Fast for 4–6 hours before your appointment as directed. Most clinics ask you to avoid food
          because nausea is a common side effect, and vomiting while sedated is dangerous. Clear
          liquids are usually fine until 2 hours before.
        </p>
        <p>
          When you arrive, a nurse or medical assistant will place an IV line — typically in your arm
          or hand. Your vital signs (blood pressure, heart rate, oxygen saturation) will be monitored
          throughout the session. The room will usually be quiet and dimly lit.
        </p>

        <h2>During the Infusion: What You Will Actually Feel</h2>
        <p>
          Ketamine produces a dissociative, dreamlike state that most people find strange but not
          unpleasant. Common experiences include:
        </p>
        <ul>
          <li><strong>Visual changes:</strong> Colors may appear more vivid, patterns may seem to move or breathe</li>
          <li><strong>Disconnection:</strong> A sense of floating outside your body or being separate from the room</li>
          <li><strong>Time distortion:</strong> The 40-minute infusion may feel much shorter or much longer</li>
          <li><strong>Emotional shifts:</strong> Some patients feel euphoric; some feel deeply introspective; some feel neutral</li>
          <li><strong>Physical sensations:</strong> Mild dizziness, tingling, or warmth are common</li>
        </ul>
        <p>
          If the experience becomes uncomfortable, tell the staff. They can reduce the infusion rate.
          The effects begin fading immediately once the infusion stops and resolve completely within
          30–60 minutes for most patients.
        </p>

        <h2>After the Session: The Next 24 Hours</h2>
        <p>
          Most patients feel groggy and mildly disoriented for 1–2 hours after the infusion. You will
          rest at the clinic until your provider clears you to leave — you cannot drive yourself home.
          Plan for a quiet day:
        </p>
        <ul>
          <li>No driving or operating machinery</li>
          <li>No important decisions, legal documents, or financial transactions</li>
          <li>Avoid alcohol</li>
          <li>Eat lightly if nausea lingers</li>
        </ul>
        <p>
          Many patients notice a mood lift within hours of the first infusion. Others notice little
          after session one and feel the cumulative effect build across sessions 2–4. Both patterns
          are normal. The full course of 6 infusions is the standard protocol — don't judge the
          outcome from a single session.
        </p>

        <h2>Integration: Making the Most of the Experience</h2>
        <p>
          Ketamine therapy is most effective when paired with integration — processing what came up
          during the session with a therapist or on your own through journaling. Many clinics offer
          integration therapy, or can refer you to a therapist familiar with ketamine-assisted care.
          The altered state can surface insights, memories, or emotional material; having a structured
          way to work with that material significantly improves long-term outcomes.
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
          Search our directory of vetted ketamine therapy clinics across the US.
        </p>
        <Link
          href="/listings"
          className="bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors inline-block"
        >
          Browse Clinics
        </Link>
      </div>
    </main>
  )
}
