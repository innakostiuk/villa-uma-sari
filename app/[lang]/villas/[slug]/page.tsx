import { getDictionary, type Dictionary } from '@/dictionaries';
import { PageParamsWithSlug } from '@/types';
import { formatCurrency } from '@/lib/format';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { Amenity } from './Amenity';
import { Sidebar } from './Sidebar';

type VillaDetailsTranslation = Dictionary['pages']['villas'];

export default async function VillaDetailsPage({ params }: PageParamsWithSlug) {
  // 1) Route + data
  const { lang, slug } = await params;
  const translation = await getDictionary(lang);
  const villaSection: VillaDetailsTranslation = translation.pages.villas;

  const villa = villaSection.items.find((v) => v.slug === slug);
  if (!villa) {
    notFound(); // renders Next.js 404 page
  }

  const details = villaSection.details;
  const formattedPrice = formatCurrency(villa.priceFrom, lang);

  // 2) Image config
  const heroImage = `/images/villas/${slug}.jpg`;
  const galleryImages = [
    heroImage, // slot 1
    `/images/villas/${slug}/gallery-1.jpg`, // slot 2
    `/images/villas/${slug}/gallery-2.jpg`, // slot 3
  ];
  const stripImages = [
    `/images/villas/${slug}/strip-1.jpg`,
    `/images/villas/${slug}/strip-2.jpg`,
    `/images/villas/${slug}/strip-3.jpg`,
    `/images/villas/${slug}/strip-4.jpg`,
  ];

  // 3) Derived display data
  const eyebrow = [
    `Ubud`,
    `${villa.bedrooms} ${villa.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}`,
    `${villa.tags[0]}`,
  ];
  // → "Ubud · 3 Bedrooms · Private Pool"
  const meta = [
    `${villa.bedrooms} ${villa.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}`,
    `${villa.maxGuests} Guests max`,
    `${villa.sqm} m²`,
    villa.amenities[0], // or villa.tags[0]
    'Valley View', // villa.tags[2] for sanctuary
  ];

  const [firstWord, secondWord = ''] = villa.name.split(/\s+/);
  const [subtitleFirst, subtitleSecond = ''] =
    details.amenitiesTitle.split(/\s+/);

  // 4) Render
  return (
    <>
      <section>
        <div
          className="relative -mt-21.5 grid grid-cols-1 gap-0.5
            md:grid-cols-[2fr_1fr] md:grid-rows-[400px_280px]"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={twMerge(
                'relative min-h-55 md:min-h-0',
                index === 0 && 'md:row-span-2',
              )}
            >
              <Image
                src={image}
                alt="gallery image"
                fill
                className="object-cover"
                sizes={index === 0 ? '66vw' : '33vw'}
                priority
              />
            </div>
          ))}
          {/* gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0
              bg-[linear-gradient(to_top,rgba(30,20,12,0.85)_0%,rgba(30,20,12,0.1)_60%)]"
          />
        </div>
      </section>
      {/* Breadcrumbs */}
      <div
        className="flex flex-wrap items-center gap-2 border-b-2 border-sand-dark
          bg-white px-4 py-4 text-[10px] tracking-widest text-earth md:gap-3
          md:px-10 md:py-5 md:text-[11px]"
      >
        <Link href="/" className="after:mx-3 after:content-['/']">
          Home
        </Link>
        <Link href="/villas" className="after:mx-3 after:content-['/']">
          Villas
        </Link>
        <span>{villa.name}</span>
      </div>
      {/* Main layout */}
      <section className="grid bg-white lg:grid-cols-[1fr_476px]">
        {/* Detail main */}
        <div
          className="border-sand-dark px-4 py-8 md:px-10 lg:border-r lg:px-15
            lg:py-16"
        >
          {/* Villa Eyebrow */}
          <p className="mb-4 text-[10px] tracking-[0.25em] text-earth uppercase">
            {eyebrow.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="after:mx-2 after:content-['·']
                  last:after:content-none"
              >
                {item}
              </span>
            ))}
          </p>
          <h1
            className="mb-3 font-comporant text-[40px] leading-none font-light
              md:text-[56px]"
          >
            {firstWord}&nbsp;
            <em className="text-earth italic">{secondWord}</em>
          </h1>
          <div className="mb-10 flex flex-wrap gap-y-2">
            {meta.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="text-[12px] tracking-[0.08em] text-[#6B5F52]
                  after:mx-3 after:content-['·'] last:after:content-none
                  md:after:mx-6"
              >
                {item}
              </span>
            ))}
          </div>
          <div
            className="mb-12 text-[15px] leading-[1.8] text-[#6B5F52]
              md:text-[16px] md:leading-[1.9]"
          >
            {villa.description.map((item, index) => (
              <p key={index} className="mb-5">
                {item}
              </p>
            ))}
          </div>
          <h2 className="mb-8 font-comporant text-[24px] md:text-[28px]">
            {subtitleFirst}&nbsp;
            <em className="italic">{subtitleSecond}</em>
          </h2>
          <div className="mb-14 grid gap-0 md:grid-cols-2">
            {villa.amenities.map((item, index) => (
              <Amenity key={index} amenity={item} index={index} />
            ))}
          </div>
          <div className="mb-14 grid w-full grid-cols-2 gap-0.5 sm:grid-cols-4">
            {stripImages.map((item, index) => (
              <div key={index} className="relative aspect-square w-full">
                <Image
                  src={item}
                  alt="Strip Image"
                  fill
                  sizes="(max-width: 1023px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Detail sidebar */}
        <Sidebar
          booking={details.booking}
          priceFrom={formattedPrice}
          maxGuests={villa.maxGuests}
        />
      </section>
    </>
  );
}
