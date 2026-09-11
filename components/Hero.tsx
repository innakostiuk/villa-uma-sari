import Image from 'next/image';
import type { ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';
import { Title } from './Title';

type HeroProps = {
  eyebrow?: string;
  firstLine?: string;
  accent?: string;
  lastLine?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  showDiscover?: boolean;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
};

export default function Hero({
  eyebrow,
  firstLine,
  accent,
  lastLine,
  description,
  ctaLabel,
  ctaHref,
  backgroundImage = '/images/home/hero.jpg',
  showDiscover = false,
  className = '',
  contentClassName = '',
  children,
}: HeroProps) {
  return (
    <section
      className={`relative -mt-21.5 flex h-[80vh] w-full overflow-hidden bg-[linear-gradient(160deg,#3D2B1F_0%,#6B4C35_40%,#8B6B4A_100%)] lg:h-screen ${className}`.trim()}
    >
      <Image
        src={backgroundImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div
        className="absolute inset-0
          bg-[linear-gradient(to_top,rgba(30,20,12,0.85)_0%,rgba(30,20,12,0.1)_60%)]"
      />
      <div
        className={`relative z-20 mt-auto flex w-full flex-col gap-8 px-4 pb-10 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:pb-18 ${contentClassName}`.trim()}
      >
        <div className="max-w-105 lg:max-w-none">
          {eyebrow && <Eyebrow text={eyebrow} />}
          {(firstLine || accent || lastLine) && (
            <Title firstLine={firstLine} accent={accent} lastLine={lastLine} />
          )}
          {description && (
            <p
              className="mb-10 max-w-105 text-[13px] leading-[1.8]
                text-[#fdfaf5b3] lg:text-[14px]"
            >
              {description}
            </p>
          )}
          {children}
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="inline-block cursor-pointer border
                border-[#fdfaf580]/50 bg-transparent px-9 py-3.5 text-[11px]
                tracking-[0.2em] text-white uppercase
                transition-[background,border-color] duration-300
                hover:border-white hover:bg-[#fdfaf51f]"
            >
              {ctaLabel}
            </a>
          )}
        </div>
        {showDiscover && (
          <div
            className="hidden items-center gap-3 self-end text-[10px]
              tracking-[0.2em] text-fog lg:mr-12 lg:mb-8 lg:flex"
          >
            <div className="h-px w-10 bg-fog" />
            <span className="uppercase">Discover</span>
          </div>
        )}
      </div>
    </section>
  );
}
