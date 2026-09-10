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
  backgroundClassName?: string;
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
  backgroundClassName = "before:bg-[url('/images/home/hero.jpg')]",
  showDiscover = false,
  className = '',
  contentClassName = '',
  children,
}: HeroProps) {
  return (
    <section
      className={`relative -mt-21.5 flex h-[80vh] w-full bg-[linear-gradient(160deg,#3D2B1F_0%,#6B4C35_40%,#8B6B4A_100%)] before:absolute before:inset-0 before:bg-cover before:bg-center before:opacity-[0.55] before:content-[''] ${backgroundClassName} after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(30,20,12,0.85)_0%,rgba(30,20,12,0.1)_60%)] after:bg-cover after:bg-center lg:h-screen ${className}`.trim()}
    >
      <div
        className={`z-20 mt-auto flex w-full flex-col gap-8 px-4 pb-10 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:pb-18 ${contentClassName}`.trim()}
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
