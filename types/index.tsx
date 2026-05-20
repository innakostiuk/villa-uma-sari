export type LanguageId = 'en' | 'id';

export type PageParams = {
  params: Promise<{
    lang: LanguageId;
  }>;
};

// export type PageParamsWithSlug = {
//   params: Promise<{
//     lang: LanguageId;
//     slug: string;
//   }>;
// };

export type Villa = {
  slug: string;
  name: string;
  tagline: string;
  priceFrom: number;
  bedrooms: number;
  maxGuests: number;
  sqm: number;
  description: string[];
  amenities: string[];
  tags: string[];
  heroImage: string;
};
