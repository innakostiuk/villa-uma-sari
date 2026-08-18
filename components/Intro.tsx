import Image from 'next/image';

export default function Intro() {
  return (
    <section
      className="flex flex-col gap-8 bg-white px-4 py-12 lg:flex-row
        lg:items-center lg:gap-20 lg:px-12 lg:py-24"
    >
      <div className="w-full lg:flex-1">
        <p className="mb-6 text-[10px] tracking-[0.25em] text-earth uppercase">
          Our Philosophy
        </p>
        <h2
          className="mb-7 font-comporant text-[36px] leading-[1.15] font-light
            text-ink lg:text-[48px]"
        >
          Luxury that
          <br />
          leaves<em className="text-earth italic"> no trace</em>
        </h2>
        <p
          className="mb-8 text-[14px] leading-[1.9] text-[#6B5F52]
            lg:text-[15px]"
        >
          Uma Sari was built with one belief: that true luxury is invisible. No
          grand lobbies. No performance. Just twelve villas, open to the jungle,
          where the only agenda is your own.
        </p>
        <p
          className="mb-8 text-[14px] leading-[1.9] text-[#6B5F52]
            lg:text-[15px]"
        >
          Each villa was designed by local architects using reclaimed teak and
          volcanic stone — materials that age with the land, not against it.
        </p>
        <span
          className="cursor-pointer border-b border-earth pb-1 text-[11px]
            tracking-[0.2em] text-earth-deep uppercase"
        >
          Read our story
        </span>
      </div>
      <div className="relative aspect-[4/5] w-full lg:flex-1">
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
