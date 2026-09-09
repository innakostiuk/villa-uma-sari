import { Dictionary } from '@/dictionaries';
import { VILLA_IMAGES } from '@/lib/images';
import { LanguageId } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

// The villaCard strings specifically
type VillaCardTranslation = Dictionary['pages']['villas']['villaCard'];

// A single item from the items array
// [number] means "the type of any element in this array"
type VillaItem = Dictionary['pages']['villas']['items'][number];

type VillaCardProps = {
  labels: VillaCardTranslation;
  villa: VillaItem;
  featured?: boolean;
  lang: LanguageId;
};

const VillaCard = ({
  labels,
  villa,
  featured = false,
  lang,
}: VillaCardProps) => {
  const { bedrooms, maxGuests, sqm, amenities } = villa;
  const { bedroomLabel, guestsLabel, viewVilla } = labels;
  const image = VILLA_IMAGES[villa.slug];

  const meta = [
    `${bedrooms} ${bedrooms === 1 ? bedroomLabel : `${bedroomLabel}s`}`,
    `${maxGuests} ${guestsLabel}`,
    `${sqm} m²`,
    amenities[0], // first amenity is always the pool type
  ];

  return (
    <div
      className={twMerge(
        'group relative cursor-pointer overflow-hidden',
        featured ? 'h-80 lg:col-span-2 lg:h-130' : 'h-72 lg:h-105',
      )}
    >
      <Image
        src={image}
        alt={villa.name}
        fill
        className="transform object-cover duration-500 ease-in-out
          group-hover:scale-104"
        sizes={featured ? '100vw' : '50vw'}
      />
      <div
        className="absolute flex size-full flex-col justify-between
          bg-[linear-gradient(to_top,rgba(20,14,8,0.88)_0%,transparent_55%)]
          pt-6 pr-4 lg:pr-6"
      >
        <div
          className="w-fit self-end border border-[#fdfaf533] bg-[#140e0880]
            px-3 py-1.5 text-[10px] tracking-[0.05em] text-white lg:px-4 lg:py-2 lg:text-[12px]"
        >
          from ${villa.priceFrom} / night
        </div>
        <div className="px-4 pb-5 lg:px-9 lg:pb-8">
          <div className="mb-2 font-comporant text-[24px] font-light text-white lg:text-[32px]">
            {villa.name}
          </div>
          <div className="mb-3 text-[10px] tracking-[0.08em] text-fog lg:mb-5 lg:text-[12px]">
            {meta.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="after:mx-2 after:content-['·']
                  last:after:content-none"
              >
                {item}
              </span>
            ))}
          </div>
          <div
            className="flex flex-wrap gap-2 text-[9px] tracking-[0.12em]
              text-[#fdfaf5bf] lg:text-[10px]"
          >
            {villa.tags.map((tag) => (
              <div
                key={tag}
                className="mt-2 border border-[#fdfaf540] px-2 py-1 lg:mt-4 lg:px-3"
              >
                {tag}
              </div>
            ))}
          </div>
          <Link
            href={`/${lang}/villas/${villa.slug}`}
            className="mt-4 inline-flex w-fit items-center gap-2 border-b
              border-[#fdfaf54d] pb-0.5 text-[10px] tracking-[0.2em] text-white
              uppercase"
          >
            {viewVilla} →
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Villas = ({
  labels,
  items,
  lang,
}: {
  labels: VillaCardTranslation;
  items: VillaItem[];
  lang: LanguageId;
}) => {
  return (
    <section className="px-4 py-8 lg:px-12 lg:py-16">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0.5">
        {items.map((item, index) => (
          <VillaCard
            key={item.slug}
            labels={labels}
            villa={item}
            featured={index === 0}
            lang={lang}
          />
        ))}
      </div>
    </section>
  );
};
