'use client';

import { Filter } from '@/components/Filter';
import type { Dictionary } from '@/dictionaries';
import type { LanguageId } from '@/types';
import { useMemo, useState } from 'react';
import { Villas } from './Villas';

type VillaItem = Dictionary['pages']['villas']['items'][number];

type VillasClientProps = {
  labels: Dictionary['pages']['villas']['villaCard'];
  items: VillaItem[];
  lang: LanguageId;
  label: string;
  options: Dictionary['pages']['villas']['filters']['options'];
};

export const VillasClient = ({
  labels,
  items,
  lang,
  label,
  options,
}: VillasClientProps) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') {
      return items;
    }

    if (activeFilter === 'pool') {
      return items.filter((villa) =>
        villa.amenities.some((amenity) => /pool/i.test(amenity)),
      );
    }

    return items.filter((villa) => villa.bedrooms === Number(activeFilter));
  }, [activeFilter, items]);

  return (
    <>
      <Filter
        label={label}
        options={options}
        value={activeFilter}
        onChange={setActiveFilter}
      />
      <Villas labels={labels} items={filteredItems} lang={lang} />
    </>
  );
};
