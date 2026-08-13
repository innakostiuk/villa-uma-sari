import { LanguageId } from '@/types';
import Link from 'next/link';

const NAV_ITEMS = [
  { name: 'Villas', url: '/villas' },
  { name: 'Experiences', url: '/experiences' },
  { name: 'About', url: '/about' },
  { name: 'Reserve', url: '/reserve' },
];

export default async function Navbar({ lang }: { lang: LanguageId }) {
  return (
    <nav className="sticky top-0 z-10 flex justify-between px-12 py-7">
      <Link
        href="/"
        className="font-comporant text-[20px] font-normal tracking-[0.08em]
          text-white"
      >
        Uma Sari
      </Link>
      <div
        className="flex cursor-pointer items-center gap-8 text-[12px]
          leading-none tracking-[0.15em] text-[#fdfaf5cc] uppercase"
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
