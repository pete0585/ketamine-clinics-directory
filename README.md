# Ketamine Therapy Finder

A directory of ketamine therapy clinics across the United States. Built with Next.js 14, Supabase, and Stripe.

## Features

- Search clinics by location, condition treated, and telehealth availability
- Condition-specific pages (depression, PTSD, anxiety, chronic pain, OCD, bipolar)
- Clinic profiles with booking links, insurance info, and protocols offered
- Claim and upgrade flow for clinic owners
- Admin dashboard for managing listings
- SEO-optimized city, state, and condition pages

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe
- **Email**: Resend
- **Deployment**: Vercel

## Local Development

```bash
npm install
cp .env.example .env.local
# Fill in your environment variables
npm run dev
```

## Environment Variables

See `.env.example` for required variables.
