import { Eyebrow } from '@/components/Eyebrow';
import { Filter } from '@/components/Filter';
import { Title } from '@/components/Title';
import { getDictionary } from '@/dictionaries';
import { PageParams } from '@/types';
import { Villas } from './Villas';

export default async function VillasPage({ params }: PageParams) {
  const { lang } = await params;
  const translation = await getDictionary(lang);
  const { eyebrow, title } = translation.pages.villas.hero;
  const { label, options } = translation.pages.villas.filters;
  const { items } = translation.pages.villas;
  const { villaCard } = translation.pages.villas;

  return (
    <main>
      {/* TODO: convert to Hero component */}
      <section>
        <div
          className="relative -mt-21.5 flex h-[55vh]
            bg-[linear-gradient(160deg,#3D2B1F_0%,#6B4C35_40%,#8B6B4A_100%)]
            px-12 py-16 before:absolute before:inset-0
            before:bg-[url('/images/villas/hero.jpg')] before:bg-cover
            before:bg-center before:opacity-[0.55] after:absolute after:inset-0
            after:bg-[linear-gradient(to_top,rgba(30,20,12,0.85)_0%,rgba(30,20,12,0.1)_60%)]
            after:bg-cover after:bg-center"
        >
          <div className="z-10 mt-auto">
            <Eyebrow text={eyebrow} />
            <Title text={title} />
          </div>
        </div>
      </section>
      <Filter label={label} options={options} />
      <Villas labels={villaCard} items={items} />
    </main>
  );
}
