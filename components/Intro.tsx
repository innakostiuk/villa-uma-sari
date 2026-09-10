import type { Dictionary } from '@/dictionaries';
import Image from 'next/image';

type IntroProps = Dictionary['pages']['home']['intro'];

export default function Intro({ label, title, accent, body, cta }: IntroProps) {
  return (
    <section
      className="flex flex-col gap-8 bg-white px-4 py-12 lg:flex-row
        lg:items-center lg:gap-20 lg:px-12 lg:py-24"
    >
      <div className="w-full lg:flex-1">
        <p className="mb-6 text-[10px] tracking-[0.25em] text-earth uppercase">
          {label}
        </p>
        <h2
          className="mb-7 font-comporant text-[36px] leading-[1.15] font-light
            whitespace-pre-line text-ink lg:text-[48px]"
        >
          {title}
          <em className="text-earth italic">{accent}</em>
        </h2>
        {body.map((paragraph, index) => (
          <p
            key={index}
            className="mb-8 text-[14px] leading-[1.9] text-[#6B5F52]
              lg:text-[15px]"
          >
            {paragraph}
          </p>
        ))}
        <span
          className="cursor-pointer border-b border-earth pb-1 text-[11px]
            tracking-[0.2em] text-earth-deep uppercase"
        >
          {cta}
        </span>
      </div>
      <div className="relative aspect-4/5 w-full lg:flex-1">
        <Image
          src="/images/villas/the-canopy-house.jpg"
          alt="Intro Image"
          fill
          sizes="50vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
