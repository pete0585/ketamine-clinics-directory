import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import NewsletterFooterBar from '@/components/NewsletterFooterBar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: {
    default: 'Find a Ketamine Clinic Near You | KetamineTherapyFinder.com',
    template: '%s | KetamineTherapyFinder.com',
  },
  description:
    'Find a board-certified ketamine clinic near you. Search by city, state, insurance, or specialty. Real support for ketamine therapy patients.',
  keywords: [
    'ketamine clinic',
    'ketamine therapy',
    'find ketamine clinic',
    'ketamine clinic near me',
    'ketamine treatment',
    'ketamine therapy help',
  ],
  authors: [{ name: 'KetamineTherapyFinder.com' }],
  creator: 'KetamineTherapyFinder.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ketaminetherapyfinder.com',
    siteName: 'KetamineTherapyFinder.com',
    title: 'Find a Ketamine Clinic Near You | KetamineTherapyFinder.com',
    description:
      'Find a board-certified ketamine clinic near you. Search by city, insurance, and specialty. Free to search, free to list.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ketaminetherapyfinder.com'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'KetamineTherapyFinder.com — Find Ketamine Therapy Near You',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find a Ketamine Clinic Near You | KetamineTherapyFinder.com',
    description: 'Find a board-certified ketamine clinic near you.',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ketaminetherapyfinder.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <NewsletterFooterBar />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
