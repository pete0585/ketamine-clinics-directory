export type ListingTier = 'unclaimed' | 'basic' | 'featured' | 'premium'

export interface Listing {
  id: string
  full_name: string
  practice_name?: string
  practitioner_type?: string
  bio?: string
  headshot_url?: string
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
  conditions_treated?: string[]
  ketamine_protocols?: string[]
  insurance_accepted?: string[]
  languages_spoken?: string[]
  accepts_telehealth?: boolean
  accepting_new_patients?: boolean
  listing_tier: ListingTier
  is_verified?: boolean
  claimed_at?: string
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
