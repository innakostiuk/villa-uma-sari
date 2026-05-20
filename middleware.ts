// Next.js runs this file on EVERY request before it hits any page.
// Its job: make sure every URL has a valid locale prefix.
//
// Without this:
//   /villas         → 404 (no page exists without locale)
// With this:
//   /villas         → redirects to /en/villas (or /id/villas)
//   /en/villas      → passes through unchanged
//   /id/villas      → passes through unchanged
// ─────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { LanguageId } from './types';

const defaultLocale: LanguageId = 'en';
const locales: LanguageId[] = ['en', 'id'];

// Reads the browser's Accept-Language header and returns the best match.
// Example header: "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7"
// This function extracts 'id' and checks if it's a supported locale.
// Falls back to defaultLocale if nothing matches.
function getLocaleFromHeader(request: NextRequest): LanguageId {
  const header = request.headers.get('accept-language');

  // The header is a comma-separated list like "id-ID,id;q=0.9,en;q=0.8"
  // We take the first item, strip the region code (id-ID → id),
  // and check if it's in our supported locales list.
  const preferred = header?.split(',')[0].split('-')[0];

  return locales.includes(preferred as LanguageId)
    ? (preferred as LanguageId)
    : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the URL already starts with a valid locale prefix.
  // /en/villas → starts with /en → already has locale → pass through
  // /villas    → doesn't start with /en or /id → needs redirect
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    // URL is already correct — let it through to the page
    return NextResponse.next();
  }

  // URL is missing a locale prefix — redirect to the localised version.
  // We detect the preferred language from the browser header.
  // This means an Indonesian user visiting /villas gets /id/villas,
  // an English user gets /en/villas.
  const locale = getLocaleFromHeader(request);

  // Build the new URL: /villas → /en/villas, / → /en
  const newPath = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(new URL(newPath, request.url));
}

// The matcher tells Next.js which requests to run middleware on.
// This regex skips:
//   - /_next/static  (bundled JS/CSS files)
//   - /_next/image   (Next.js image optimisation)
//   - /favicon.ico   (browser favicon request)
//   - Any file with an extension (images, fonts, etc.)
// Without this, middleware would fire on every .jpg and .css request,
// wasting compute and potentially breaking asset loading.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
