'use client';
import { Dictionary } from '@/dictionaries';
import { twMerge } from 'tailwind-merge';

type FilterProps = {
  label: string;
  options: Dictionary['pages']['villas']['filters']['options'];
  value: string;
  onChange: (value: string) => void;
};

export const Filter = ({ label, options, value, onChange }: FilterProps) => {
  return (
    <div
      className="flex flex-col gap-3 border-b border-sand-dark bg-white px-4
        py-4 lg:flex-row lg:items-center lg:gap-8 lg:px-12 lg:py-5"
    >
      <span className="text-[10px] tracking-[0.2em] text-earth uppercase">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={twMerge(
              `cursor-pointer border border-sand-dark bg-transparent px-4.5
              py-1.5 font-jost text-[11px] tracking-widest text-ink transition
              duration-200 hover:border-earth-deep hover:bg-earth-deep
              hover:text-white`,
              value === option.value &&
                'border-earth-deep bg-earth-deep text-white',
            )}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
