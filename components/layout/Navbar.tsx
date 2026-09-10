'use client';

import { LANGUAGES } from '@/lib/constans';
import { LanguageId } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'Villas', url: '/villas' },
  // { name: 'Experiences', url: '/experiences' },
  // { name: 'About', url: '/about' },
  // { name: 'Reserve', url: '/reserve' },
];

export default function Navbar({ lang }: { lang: LanguageId }) {
  const pathname = usePathname();

  const getLocalizedPath = (targetLang: LanguageId) => {
    const currentPath = pathname.replace(new RegExp(`^/${lang}`), '') || '/';
    return currentPath === '/'
      ? `/${targetLang}`
      : `/${targetLang}${currentPath}`;
  };

  return (
    <nav
      className="sticky top-0 z-10 flex items-center justify-between px-4 py-5
        lg:px-12 lg:py-7"
    >
      <Link
        href={`/${lang}`}
        className="font-comporant text-[18px] font-normal tracking-[0.08em]
          text-white lg:text-[20px]"
      >
        Uma Sari
      </Link>

      <div className="flex items-center gap-4 lg:gap-8">
        <div
          className="flex cursor-pointer items-center gap-4 text-[10px]
            leading-none tracking-[0.15em] text-[#fdfaf5cc] uppercase
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

        <div
          className="flex items-center rounded-full border border-white/20
            bg-white/5 p-1"
        >
          {LANGUAGES.map((locale) => {
            const isActive = locale.id === lang;

            return (
              <Link
                key={locale.id}
                href={getLocalizedPath(locale.id)}
                className={[
                  'rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.12em]',
                  isActive
                    ? 'bg-white text-ink'
                    : 'text-[#fdfaf5cc] transition-colors hover:text-white',
                ].join(' ')}
              >
                {locale.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
