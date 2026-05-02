import Image, { StaticImageData } from 'next/image';
import ForestVillaImage from '@/public/images/home/villa-forest.jpg';
import TerraceVillaImage from '@/public/images/home/villa-terrace.jpg';
import SanctuaryVillaImage from '@/public/images/home/villa-sanctuary.jpg';

const rooms = [
  {
    src: ForestVillaImage,
    price: 340,
    title: 'The Forest Villa',
    description: '1 bedroom · Private pool · 120 m²',
  },
  {
    src: TerraceVillaImage,
    price: 520,
    title: 'The Terrace Suite',
    description: '2 bedrooms · Rice field view · 200 m²',
  },
  {
    src: SanctuaryVillaImage,
    price: 890,
    title: 'The Sanctuary',
    description: '3 bedrooms · Infinity pool · 380 m²',
  },
];

const RoomCard = ({
  src,
  price,
  title,
  description,
}: {
  src: StaticImageData;
  price: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative aspect-3/4 cursor-pointer overflow-hidden">
      <Image
        src={src}
        alt={title}
        fill
        className="transform object-cover duration-500 ease-in-out
          hover:scale-104"
        priority
      />
      <div
        className="absolute flex w-full justify-end
          bg-[linear-gradient(to_bottom,rgba(20,14,8,0.9)_0%,transparent_100%)]
          px-5 pt-5 pb-8"
      >
        <div
          className="w-fit border border-[#FDFAF5]/20 bg-[#FDFAF5]/12 px-3.5
            py-2 text-[12px] tracking-[0.05em] text-white"
        >
          from {price} / night
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full
          bg-[linear-gradient(to_top,rgba(20,14,8,0.9)_0%,transparent_100%)]
          px-6 pt-8 pb-6"
      >
        <div className="mb-1.5 font-serif text-[22px] text-white">{title}</div>
        <div className="font-fog text-[11px] tracking-widest text-fog">
          {description}
        </div>
      </div>
    </div>
  );
};

export default function Rooms() {
  return (
    <div className="bg-sand px-12 py-24">
      <div className="mb-14">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-earth uppercase">
          Accommodations
        </p>
        <h2 className="text-[44px] leading-[1.1] font-light text-ink">
          Twelve villas,
          <br />
          <em className="font-serif italic">one jungle</em>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            src={room.src}
            price={room.price}
            title={room.title}
            description={room.description}
          />
        ))}
      </div>
    </div>
  );
}
