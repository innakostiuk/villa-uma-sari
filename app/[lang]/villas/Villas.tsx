import { Dictionary } from '@/dictionaries';
import { VILLA_IMAGES } from '@/lib/images';
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
};

const VillaCard = ({ labels, villa, featured = false }: VillaCardProps) => {
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
        featured ? 'col-span-2 h-130' : 'h-105',
      )}
    >
      <Image
        src={image}
        alt={villa.name}
        fill
        className="transform object-cover duration-500 ease-in-out
          group-hover:scale-104"
        sizes="50vw"
      />
      <div
        className="absolute flex size-full flex-col justify-between
          bg-[linear-gradient(to_top,rgba(20,14,8,0.88)_0%,transparent_55%)]
          pt-6 pr-6"
      >
        <div
          className="w-fit self-end border border-[#fdfaf533] bg-[#140e0880]
            px-4 py-2 text-[12px] tracking-[0.05em] text-white"
        >
          from {villa.priceFrom} / night
        </div>
        <div className="px-9 pb-8">
          <div className="mb-2 font-serif text-[32px] font-light text-white">
            {villa.name}
          </div>
          <div className="mb-5 text-[12px] tracking-[0.08em] text-fog">
            {meta}
          </div>
          <div
            className="flex flex-wrap gap-2 text-[10px] tracking-[0.12em]
              text-[#fdfaf5bf]"
          >
            {villa.tags.map((tag) => (
              <div
                key={tag}
                className="mt-4 border border-[#fdfaf540] px-3 py-1"
              >
                {tag}
              </div>
            ))}
          </div>
          <Link
            href={'/'}
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
}: {
  labels: VillaCardTranslation;
  items: VillaItem[];
}) => {
  return (
    <section className="px-12 py-16">
      <div className="grid grid-cols-2 gap-0.5">
        {items.map((item, index) => (
          <VillaCard
            key={item.slug}
            labels={labels}
            villa={item}
            featured={index === 0}
          />
        ))}
      </div>
    </section>
  );
};
