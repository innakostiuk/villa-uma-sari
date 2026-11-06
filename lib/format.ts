import { LOCALE_BY_LANG, VILLA_PRICE_CURRENCY } from './constans';
import type { LanguageId } from '@/types';

export function formatCurrency(
  amount: number,
  lang: LanguageId,
  opts?: Intl.NumberFormatOptions,
) {
  return new Intl.NumberFormat(LOCALE_BY_LANG[lang], {
    style: 'currency',
    currency: VILLA_PRICE_CURRENCY,
    maximumFractionDigits: 0,
    ...opts,
  }).format(amount);
}
