import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Amenities from '@/components/Amenities';
import Rooms from '@/components/Rooms';
import Quote from '@/components/Quote';
import { PageParams } from '@/types';
import { getDictionary } from '@/dictionaries';

export default async function Home({ params }: PageParams) {
  const { lang } = await params;
  const translation = await getDictionary(lang);

  const hero = translation.pages.home.hero;
  const viewVilla = translation.shared.cta.viewVilla;

  const introduction = translation.pages.home.intro;

  const accomodation = translation.pages.home.accomodation;

  const amenities = translation.pages.home.amenities;

  const { bedroomLabel, priceFrom, perNight } =
    translation.pages.villas.villaCard;

  const roomsItems = translation.pages.villas.items.slice(0, 3).map((villa) => {
    const bedroomText =
      villa.bedrooms === 1 ? bedroomLabel.one : bedroomLabel.other;

    return {
      title: villa.name,
      price: villa.priceFrom,
      description: `${villa.bedrooms} ${bedroomText} · ${villa.tags[0]} · ${villa.sqm} m²`,
      image: `/images/villas/${villa.slug}.jpg`,
    };
  });

  const quote = translation.pages.home.quote;

  return (
    <>
      <Hero
        {...hero}
        ctaLabel={viewVilla}
        ctaHref={`/${lang}/villas`}
        showDiscover
      />
      <Intro {...introduction} />
      <Rooms
        {...accomodation}
        items={roomsItems}
        from={priceFrom}
        perNight={perNight}
      />
      <Amenities {...amenities} />
      <Quote {...quote} />
    </>
  );
}
