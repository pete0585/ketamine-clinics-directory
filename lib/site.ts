/** Absolute site origin. Prefer NEXT_PUBLIC_SITE_URL; fall back to production domain. */
export const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ketaminetherapyfinder.com'

export function absoluteUrl(path: string): string {
  const base = BASE.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

/** Canonical URL for a static city page under /best/{folder}. */
export function cityPageCanonical(folder: string): string {
  return absoluteUrl(`/best/${folder}`)
}
