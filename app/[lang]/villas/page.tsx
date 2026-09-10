import Hero from '@/components/Hero';
import { getDictionary } from '@/dictionaries';
import { PageParams } from '@/types';
import { VillasClient } from './VillasClient';

export default async function VillasPage({ params }: PageParams) {
  const { lang } = await params;
  const translation = await getDictionary(lang);
  const { eyebrow, firstLine, accent } = translation.pages.villas.hero;
  const { label, options } = translation.pages.villas.filters;
  const { items } = translation.pages.villas;
  const { villaCard } = translation.pages.villas;

  return (
    <main>
      <Hero
        eyebrow={eyebrow}
        firstLine={firstLine}
        accent={accent}
        backgroundClassName="before:bg-[url('/images/villas/hero.jpg')]"
        className="h-[46vh] lg:h-[55vh]"
        contentClassName="px-4 py-10 lg:px-12 lg:py-16"
      />
      <VillasClient
        label={label}
        options={options}
        labels={villaCard}
        items={items}
        lang={lang}
      />
    </main>
  );
}
