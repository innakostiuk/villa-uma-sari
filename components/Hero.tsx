export default function Hero() {
  return (
    <section
      className="relative -mt-21.5 flex h-screen w-full
        bg-[linear-gradient(160deg,#3D2B1F_0%,#6B4C35_40%,#8B6B4A_100%)]
        before:absolute before:inset-0 before:bg-[url('/images/home/hero.jpg')]
        before:bg-cover before:bg-center before:opacity-[0.55] after:absolute
        after:inset-0
        after:bg-[linear-gradient(to_top,rgba(30,20,12,0.85)_0%,rgba(30,20,12,0.1)_60%)]
        after:bg-cover after:bg-center"
    >
      <div className="z-20 mt-auto flex w-full justify-between">
        <div className="px-12 pb-18">
          <p className="mb-5 text-[11px] tracking-[0.25em] text-fog uppercase">
            Ubud · Bali · Indonesia
          </p>
          <h1
            className="mb-6 font-serif text-[72px] leading-none font-light
              text-white"
          >
            Where the
            <br />
            <em className="italic">jungle breathes</em>
            <br />
            around you
          </h1>
          <p
            className="mb-10 max-w-105 text-[14px] leading-[1.8]
              text-[#fdfaf5b3]"
          >
            Twelve private villas hidden among Ubud&apos;s ancient rice
            terraces. A place to arrive slowly, and leave differently.
          </p>
          <a
            href="#"
            className="inline-block cursor-pointer border border-[#fdfaf580]/50
              bg-transparent px-9 py-3.5 text-[11px] tracking-[0.2em] text-white
              uppercase transition-[background,border-color] duration-300
              hover:border-white hover:bg-[#fdfaf51f]"
          >
            Explore Villas
          </a>
        </div>
        <div
          className="mr-12 mb-8 flex items-center gap-3 self-end text-[10px]
            tracking-[0.2em] text-fog"
        >
          <div className="h-px w-10 bg-fog" />
          <span className="uppercase">Discover</span>
        </div>
      </div>
    </section>
  );
}
