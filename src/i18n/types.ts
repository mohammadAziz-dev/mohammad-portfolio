import { en } from './translations/en';
import { de } from './translations/de';

export const translations = {
  en,
  de,
};

export type Language = keyof typeof translations;

export const DEFAULT_LANGUAGE: Language = 'en';

export const LANGUAGE_STORAGE_KEY = 'portfolio-language';
