import { CURRENCY_BY_LANG } from './constans';
import type { LanguageId } from '@/types';

export function formatCurrency(
  amount: number,
  lang: LanguageId,
  opts?: Intl.NumberFormatOptions,
) {
  const { code, locale } = CURRENCY_BY_LANG[lang] ?? CURRENCY_BY_LANG.en;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: code,
    maximumFractionDigits: 0,
    ...opts,
  }).format(amount);
}
