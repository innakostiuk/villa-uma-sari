// This is the single function every page calls to get its translations.
// It does three things:
//   1. Dynamically imports only the JSON file needed (not both)
//   2. Caches the result so the same file isn't imported twice per request
//   3. Exports the Dictionary type, inferred automatically from the JSON shape
// ─────────────────────────────────────────────

import { cache } from 'react';
import 'server-only';
// ↑ This import makes the build fail if this file is accidentally
//   imported in a Client Component ('use client'). Dictionaries contain
//   all our content — we don't want them shipped to the browser bundle.

import { LanguageId } from './types';

// Each entry is a function that returns a Promise of the JSON module.
// WHY functions and not direct imports?
// Direct imports (import enJson from './en.json') load ALL languages upfront.
// Functions let Next.js split each JSON into its own chunk and load only
// the one that matches the current request's locale.
const dictionaries = {
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  id: () => import('./dictionaries/id.json').then((m) => m.default),
};

// cache() is React's request-level memoisation.
// Without it: if layout.tsx AND page.tsx both call getDictionary('en'),
// the JSON file gets imported twice in the same request.
// With it: the second call returns the already-resolved value instantly.
export const getDictionary = cache((locale: LanguageId) =>
  dictionaries[locale](),
);

// ─── Type inference ────────────────────────────────────────────────────────
// Instead of manually writing out a Dictionary type that mirrors the JSON,
// TypeScript derives it automatically from the return type of getDictionary.
//
// If you add a key to en.json, it immediately appears in Dictionary.
// If you rename a key, every file using dictionary.old.key gets a type error.
// You never have to keep a manual type in sync with the JSON.

type Awaited<T> = T extends Promise<infer U> ? U : T;
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

// Convenience type for the pages subtree — used when a component only
// needs access to a specific page's translations, not the whole dictionary.
export type PagesDictionary = Dictionary['pages'];
