import type { Dictionary } from '@/dictionaries';
import Image from 'next/image';
import Link from 'next/link';

type RoomItem = {
  slug: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

type RoomsProps = {
  label: string;
  firstLine: string;
  accent: string;
  items: RoomItem[];
  from: Dictionary['shared']['cta']['from'];
  perNight: Dictionary['shared']['cta']['perNight'];
};

const RoomCard = ({
  slug,
  title,
  price,
  description,
  image,
  from,
  perNight,
}: RoomItem & { from: string; perNight: string }) => {
  return (
    <Link
      href={`/villas/${slug}`}
      className="relative aspect-3/4 cursor-pointer overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        sizes="33vw"
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
          {from} {price} / {perNight}
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full
          bg-[linear-gradient(to_top,rgba(20,14,8,0.9)_0%,transparent_100%)]
          px-6 pt-8 pb-6"
      >
        <div className="mb-1.5 font-comporant text-[22px] text-white">
          {title}
        </div>
        <div className="font-fog text-[11px] tracking-widest text-fog">
          {description}
        </div>
      </div>
    </Link>
  );
};

export default function Rooms({
  label,
  firstLine,
  accent,
  items,
  from,
  perNight,
}: RoomsProps) {
  return (
    <div className="bg-sand px-4 py-14 lg:px-12 lg:py-24">
      <div className="mb-10 lg:mb-14">
        <p className="mb-4 text-[10px] tracking-[0.25em] text-earth uppercase">
          {label}
        </p>
        <h2
          className="text-[32px] leading-[1.1] font-light text-ink
            lg:text-[44px]"
        >
          {firstLine}
          <br />
          <em className="font-comporant text-earth italic">{accent}</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-0.5">
        {items.map((room, index) => (
          <RoomCard
            key={`${room.title}-${index}`}
            {...room}
            from={from}
            perNight={perNight}
          />
        ))}
      </div>
    </div>
  );
}
