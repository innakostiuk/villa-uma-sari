const NAV_ITEMS = ['Villas', 'Experiences', 'About', 'Reserve'];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex justify-between px-12 py-7">
      <div
        className="font-serif text-[20px] font-normal tracking-[0.08em]
          text-white"
      >
        Uma Sari
      </div>
      <div
        className="flex cursor-pointer items-center gap-8 text-[12px]
          leading-none tracking-[0.15em] text-[#fdfaf5cc] uppercase"
      >
        {NAV_ITEMS.map((item, index) => (
          <a key={index} className="hover:text-white">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
