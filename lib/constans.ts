import { LanguageId } from '@/types';

export const LANGUAGES = [
  { id: 'en' as LanguageId, name: 'English', label: 'EN' },
  { id: 'id' as LanguageId, name: 'Indonesian', label: 'ID' },
];

export const DEFAULT_LANGUAGE: LanguageId = 'en';
