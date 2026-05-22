'use client';
import { Dictionary } from '@/dictionaries';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type FilterProps = {
  label: string;
  options: Dictionary['pages']['villas']['filters']['options'];
};

export const Filter = ({ label, options }: FilterProps) => {
  const [active, setActive] = useState<string>(options[0].value);
  const handleActive = (value: string) => {
    setActive(value);
  };

  return (
    <div
      className="flex items-center gap-8 border-b border-sand-dark bg-white
        px-12 py-5"
    >
      <span className="text-[10px] tracking-[0.2em] text-earth uppercase">
        {label}
      </span>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            className={twMerge(
              `cursor-pointer border border-sand-dark bg-transparent px-4.5
              py-1.5 font-sans text-[11px] tracking-widest text-ink transition
              duration-200 hover:border-earth-deep hover:bg-earth-deep
              hover:text-white`,
              active === option.value &&
                'border-earth-deep bg-earth-deep text-white',
            )}
            onClick={() => handleActive(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
