# Uma Sari

A responsive, bilingual hospitality website concept for a boutique villa stay in
Ubud, Bali. The site includes a landing page, a filterable villa directory, and
individual villa detail pages in English and Indonesian.

## Features

- Locale-prefixed routes for English (`/en`) and Indonesian (`/id`)
- Villa directory filters for bedroom count and pool availability
- Villa detail pages with image galleries, amenities, and a booking-form demo
- Localized page content and currency formatting; villa rates are displayed in
  USD for both locales
- Responsive layouts and optimized local photography using `next/image`

The booking form demonstrates client-side validation only. It does not submit
reservations to a backend.

## Tech stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to
a locale-prefixed page.

## Checks

```bash
npm run lint
npm run type-check
npm run build
```
