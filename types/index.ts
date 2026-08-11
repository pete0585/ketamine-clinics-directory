export type ListingTier = 'unclaimed' | 'basic' | 'featured' | 'premium'

export interface Listing {
  id: string
  full_name: string
  name?: string
  practice_name?: string
  practitioner_type?: string
  bio?: string
  headshot_url?: string
  photo_url?: string
  phone?: string
  email?: string
  website?: string
  booking_url?: string
  address_line1?: string
  city?: string
  state?: string
  zip?: string
  latitude?: number
  longitude?: number
  lat?: number
  lng?: number
  conditions_treated?: string[]
  ketamine_protocols?: string[]
  insurance_accepted?: string[]
  visit_types?: string[]
  languages_spoken?: string[]
  accepts_telehealth?: boolean
  telehealth?: boolean
  accepting_new_patients?: boolean
  accepting_new_clients?: boolean
  listing_tier: ListingTier
  plan_tier?: string
  plan_tier_rank?: number
  is_verified?: boolean
  claimed?: boolean
  claimed_at?: string
  status?: string
  credentials?: string[]
  certifications?: string[]
  specialties?: string[]
  stripe_customer_id?: string
  stripe_subscription_id?: string
  subscription_expires_at?: string
  outreach_step?: number
  upgrade_nudge_step?: number
  slug: string
  created_at: string
  updated_at?: string
}

export interface SearchFilters {
  state?: string
  city?: string
  condition?: string
  telehealth?: boolean
  accepting_new_patients?: boolean
  tier?: ListingTier
}

export interface AdminUser {
  email: string
}

export interface City {
  id: string
  slug: string
  city: string
  name?: string
  state: string
  listing_count: number
  active: boolean
  updated_at?: string
  meta_description?: string
  intro_paragraph?: string
  seo_title?: string
}

export const US_STATES = [
  { abbr: 'AL', name: 'Alabama' }, { abbr: 'AK', name: 'Alaska' },
  { abbr: 'AZ', name: 'Arizona' }, { abbr: 'AR', name: 'Arkansas' },
  { abbr: 'CA', name: 'California' }, { abbr: 'CO', name: 'Colorado' },
  { abbr: 'CT', name: 'Connecticut' }, { abbr: 'DE', name: 'Delaware' },
  { abbr: 'FL', name: 'Florida' }, { abbr: 'GA', name: 'Georgia' },
  { abbr: 'HI', name: 'Hawaii' }, { abbr: 'ID', name: 'Idaho' },
  { abbr: 'IL', name: 'Illinois' }, { abbr: 'IN', name: 'Indiana' },
  { abbr: 'IA', name: 'Iowa' }, { abbr: 'KS', name: 'Kansas' },
  { abbr: 'KY', name: 'Kentucky' }, { abbr: 'LA', name: 'Louisiana' },
  { abbr: 'ME', name: 'Maine' }, { abbr: 'MD', name: 'Maryland' },
  { abbr: 'MA', name: 'Massachusetts' }, { abbr: 'MI', name: 'Michigan' },
  { abbr: 'MN', name: 'Minnesota' }, { abbr: 'MS', name: 'Mississippi' },
  { abbr: 'MO', name: 'Missouri' }, { abbr: 'MT', name: 'Montana' },
  { abbr: 'NE', name: 'Nebraska' }, { abbr: 'NV', name: 'Nevada' },
  { abbr: 'NH', name: 'New Hampshire' }, { abbr: 'NJ', name: 'New Jersey' },
  { abbr: 'NM', name: 'New Mexico' }, { abbr: 'NY', name: 'New York' },
  { abbr: 'NC', name: 'North Carolina' }, { abbr: 'ND', name: 'North Dakota' },
  { abbr: 'OH', name: 'Ohio' }, { abbr: 'OK', name: 'Oklahoma' },
  { abbr: 'OR', name: 'Oregon' }, { abbr: 'PA', name: 'Pennsylvania' },
  { abbr: 'RI', name: 'Rhode Island' }, { abbr: 'SC', name: 'South Carolina' },
  { abbr: 'SD', name: 'South Dakota' }, { abbr: 'TN', name: 'Tennessee' },
  { abbr: 'TX', name: 'Texas' }, { abbr: 'UT', name: 'Utah' },
  { abbr: 'VT', name: 'Vermont' }, { abbr: 'VA', name: 'Virginia' },
  { abbr: 'WA', name: 'Washington' }, { abbr: 'WV', name: 'West Virginia' },
  { abbr: 'WI', name: 'Wisconsin' }, { abbr: 'WY', name: 'Wyoming' },
  { abbr: 'DC', name: 'District of Columbia' },
] as const

export type StateAbbr = typeof US_STATES[number]['abbr']

export const SPECIALTIES = [
  'Depression',
  'Treatment-Resistant Depression',
  'PTSD',
  'Anxiety',
  'OCD',
  'Bipolar Depression',
  'Chronic Pain',
  'Fibromyalgia',
  'Complex Regional Pain Syndrome (CRPS)',
  'Suicidal Ideation',
  'Substance Use Disorder',
  'Palliative Care',
  'Migraine',
]

export const INSURANCE_OPTIONS = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
  'Humana',
  'Medicaid',
  'Medicare',
  'Tricare',
  'United Healthcare',
  'Out-of-Pocket / Self-Pay',
]

export const VISIT_TYPES = [
  { value: 'in-person', label: 'In-Person' },
  { value: 'telehealth', label: 'Telehealth / Virtual' },
  { value: 'at-home', label: 'At-Home Infusion' },
]
