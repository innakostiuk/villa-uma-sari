import Image from 'next/image';

export default function Intro() {
  return (
    <section className="flex items-center gap-20 bg-white px-12 py-24">
      <div className="flex-1">
        <p className="mb-6 text-[10px] tracking-[0.25em] text-earth uppercase">
          Our Philosophy
        </p>
        <h2
          className="mb-7 font-serif text-[48px] leading-[1.15] font-light
            text-ink"
        >
          Luxury that
          <br />
          leaves<em className="text-earth italic"> no trace</em>
        </h2>
        <p className="tex-[15px] mb-8 leading-[1.9] text-[#6B5F52]">
          Uma Sari was built with one belief: that true luxury is invisible. No
          grand lobbies. No performance. Just twelve villas, open to the jungle,
          where the only agenda is your own.
        </p>
        <p className="tex-[15px] mb-8 leading-[1.9] text-[#6B5F52]">
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
      <div className="relative aspect-4/5 flex-1">
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
