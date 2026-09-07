import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const BEST_DIR = join(process.cwd(), 'app', 'best')

/**
 * Filesystem-discover static city pages under app/best.
 * Each folder that contains page.tsx becomes /best/{folder}.
 * Pattern: ketamine-clinics-{city}-{state} (optional "in-" segment).
 */
export function getBestCityPageFolders(): string[] {
  if (!existsSync(BEST_DIR)) return []

  return readdirSync(BEST_DIR)
    .filter((name) => {
      const fullPath = join(BEST_DIR, name)
      return (
        statSync(fullPath).isDirectory() &&
        existsSync(join(fullPath, 'page.tsx')) &&
        name.startsWith('ketamine-clinics-')
      )
    })
    .sort()
}
