import pt from './pt.json';
import en from './en.json';
import type { Lang } from './routes';

const dictionaries = { pt, en } satisfies Record<Lang, unknown>;

export type Dictionary = typeof pt;

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang] as Dictionary;
}

export { languages, defaultLang, routes, pathFor, alternateLang } from './routes';
export type { PageKey } from './routes';
