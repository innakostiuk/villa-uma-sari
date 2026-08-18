import { LanguageId } from '@/types';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: 'Villas', url: '/villas' },
  // { name: 'Experiences', url: '/experiences' },
  // { name: 'About', url: '/about' },
  // { name: 'Reserve', url: '/reserve' },
];

export default async function Navbar({ lang }: { lang: LanguageId }) {
  return (
    <nav
      className="sticky top-0 z-10 flex items-center justify-between px-4 py-5
        lg:px-12 lg:py-7"
    >
      <Link
        href="/"
        className="font-comporant text-[18px] font-normal tracking-[0.08em]
          text-white lg:text-[20px]"
      >
        Uma Sari
      </Link>
      <div
        className="flex cursor-pointer items-center gap-4 text-[10px]
          leading-none tracking-[0.15em] text-[#fdfaf5cc] uppercase lg:gap-8
          lg:text-[12px]"
      >
        {NAV_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={`/${lang}${item.url}`}
            className="hover:text-white"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
