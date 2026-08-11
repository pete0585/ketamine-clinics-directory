import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  if (host.includes('findketaminedoctor.com')) {
    const url = request.nextUrl.clone()
    url.host = 'ketaminetherapyfinder.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api/webhooks).*)',
}
