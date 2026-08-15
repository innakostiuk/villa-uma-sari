import { LanguageId } from '@/types';

export const LANGUAGES = [
  { id: 'en' as LanguageId, name: 'English', label: 'EN' },
  { id: 'id' as LanguageId, name: 'Indonesian', label: 'ID' },
];

export const DEFAULT_LANGUAGE: LanguageId = 'en';

export const CURRENCY_BY_LANG: Record<
  LanguageId,
  { code: string; locale: string }
> = {
  en: { code: 'USD', locale: 'en-US' },
  id: { code: 'IDR', locale: 'id-ID' },
};
